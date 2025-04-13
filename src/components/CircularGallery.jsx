import { useRef, useEffect } from 'react'
import {
  Renderer,
  Camera,
  Transform,
  Plane,
  Mesh,
  Program,
  Texture,
} from 'ogl'

function debounce(func, wait) {
  let timeout
  return function (...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

function lerp(p1, p2, t) {
  return p1 + (p2 - p1) * t
}

function autoBind(instance) {
  const proto = Object.getPrototypeOf(instance)
  Object.getOwnPropertyNames(proto).forEach((key) => {
    if (key !== 'constructor' && typeof instance[key] === 'function') {
      instance[key] = instance[key].bind(instance)
    }
  })
}

function createTextTexture(gl, text, font = "bold 30px monospace", color = "black") {
  const canvas = document.createElement("canvas")
  const context = canvas.getContext("2d")
  context.font = font
  const metrics = context.measureText(text)
  const textWidth = Math.ceil(metrics.width)
  const textHeight = Math.ceil(parseInt(font, 10) * 1.2)
  canvas.width = textWidth
  canvas.height = textHeight
  context.font = font
  context.fillStyle = color
  context.textBaseline = "middle"
  context.textAlign = "center"
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.fillText(text, canvas.width / 2, canvas.height / 2)
  const texture = new Texture(gl, { generateMipmaps: false })
  texture.image = canvas
  return { texture, width: canvas.width, height: canvas.height }
}

class Title {
  constructor({ gl, plane, renderer, text, textColor = "#545050", font = "30px sans-serif" }) {
    autoBind(this)
    this.gl = gl
    this.plane = plane
    this.renderer = renderer
    this.text = text
    this.textColor = textColor
    this.font = font
    this.createMesh()
  }
  createMesh() {
    const { texture, width, height } = createTextTexture(
      this.gl,
      this.text,
      this.font,
      this.textColor
    )
    const geometry = new Plane(this.gl)
    const program = new Program(this.gl, {
      vertex: `
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform sampler2D tMap;
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tMap, vUv);
          if (color.a < 0.1) discard;
          gl_FragColor = color;
        }
      `,
      uniforms: { tMap: { value: texture } },
      transparent: true
    })
    this.mesh = new Mesh(this.gl, { geometry, program })
    const aspect = width / height
    const textHeight = this.plane.scale.y * 0.15
    const textWidth = textHeight * aspect
    this.mesh.scale.set(textWidth, textHeight, 1)
    this.mesh.position.y = -this.plane.scale.y * 0.5 - textHeight * 0.5 - 0.05
    this.mesh.setParent(this.plane)
  }
}

class Media {
  constructor({
    geometry,
    gl,
    image,
    index,
    length,
    renderer,
    scene,
    screen,
    text,
    viewport,
    bend,
    textColor,
    borderRadius = 0,
    font
  }) {
    this.extra = 0
    this.geometry = geometry
    this.gl = gl
    this.image = image
    this.index = index
    this.length = length
    this.renderer = renderer
    this.scene = scene
    this.screen = screen
    this.text = text
    this.viewport = viewport
    this.bend = bend
    this.textColor = textColor
    this.borderRadius = borderRadius
    this.font = font
    this.createShader()
    this.createMesh()
    this.createTitle()
    this.onResize()
  }
  createShader() {
    const texture = new Texture(this.gl, { generateMipmaps: false })
    this.program = new Program(this.gl, {
      depthTest: false,
      depthWrite: false,
      vertex: `
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform float uTime;
        uniform float uSpeed;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 p = position;
          p.z = 0.0;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform vec2 uImageSizes;
        uniform vec2 uPlaneSizes;
        uniform sampler2D tMap;
        uniform float uBorderRadius;
        varying vec2 vUv;
        
        // Rounded box SDF for UV space
        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }
        
        void main() {
          vec2 ratio = vec2(
            min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
            min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
          );
          vec2 uv = vec2(
            vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
            vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
          );
          vec4 color = texture2D(tMap, uv);
          
          // Apply rounded corners (assumes vUv in [0,1])
          float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          if(d > 0.0) {
            discard;
          }
          
          gl_FragColor = vec4(color.rgb, 1.0);
        }
      `,
      uniforms: {
        tMap: { value: texture },
        uPlaneSizes: { value: [0, 0] },
        uImageSizes: { value: [0, 0] },
        uSpeed: { value: 0 },
        uTime: { value: 100 * Math.random() },
        uBorderRadius: { value: this.borderRadius }
      },
      transparent: true
    })
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = this.image
    img.onload = () => {
      texture.image = img
      this.program.uniforms.uImageSizes.value = [img.naturalWidth, img.naturalHeight]
    }
  }
  createMesh() {
    this.plane = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program
    })
    this.plane.setParent(this.scene)
  }
  createTitle() {
    this.title = new Title({
      gl: this.gl,
      plane: this.plane,
      renderer: this.renderer,
      text: this.text,
      textColor: this.textColor,
      fontFamily: this.font
    })
  }
  update(scroll, direction) {
    this.plane.position.x = this.x - scroll.current - this.extra

    const x = this.plane.position.x
    const H = this.viewport.width / 2

    // Calculate how centered this card is (0 = perfectly centered, 1 = at edge or beyond)
    const distanceFromCenter = Math.abs(x) / (this.viewport.width / 2)
    const centerFactor = Math.max(0, 1 - distanceFromCenter)
    
    // Scale up cards when they're in the center (adjust 0.15 to control how much bigger)
    const scaleBoost = 1 + (0.15 * centerFactor)
    
    // Apply the scaling - store original scales first time
    if (!this.originalScaleX) {
      this.originalScaleX = this.plane.scale.x
      this.originalScaleY = this.plane.scale.y
    }
    
    // Apply the scale boost
    this.plane.scale.x = this.originalScaleX * scaleBoost
    this.plane.scale.y = this.originalScaleY * scaleBoost

    if (this.bend === 0) {
      this.plane.position.y = 0
      this.plane.rotation.z = 0
    } else {
      const B_abs = Math.abs(this.bend)
      const R = (H * H + B_abs * B_abs) / (2 * B_abs)
      const effectiveX = Math.min(Math.abs(x), H)

      const arc = R - Math.sqrt(R * R - effectiveX * effectiveX)
      if (this.bend > 0) {
        this.plane.position.y = -arc
        this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R)
      } else {
        this.plane.position.y = arc
        this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R)
      }
    }

    this.speed = scroll.current - scroll.last
    this.program.uniforms.uTime.value += 0.04
    this.program.uniforms.uSpeed.value = this.speed

    const planeOffset = this.plane.scale.x / 2
    const viewportOffset = this.viewport.width / 2
    this.isBefore = this.plane.position.x + planeOffset < -viewportOffset
    this.isAfter = this.plane.position.x - planeOffset > viewportOffset
    if (direction === 'right' && this.isBefore) {
      this.extra -= this.widthTotal
      this.isBefore = this.isAfter = false
    }
    if (direction === 'left' && this.isAfter) {
      this.extra += this.widthTotal
      this.isBefore = this.isAfter = false
    }
  }
  onResize({ screen, viewport } = {}) {
    if (screen) this.screen = screen
    if (viewport) {
      this.viewport = viewport
      if (this.plane.program.uniforms.uViewportSizes) {
        this.plane.program.uniforms.uViewportSizes.value = [this.viewport.width, this.viewport.height]
      }
    }
    
    // Get screen size
    const isSmall = this.screen.width < 640;  // sm breakpoint
    const isMedium = this.screen.width >= 640 && this.screen.width < 768;  // md breakpoint
    
    // Adjust scale based on screen size
    let heightScale = 1000;
    let widthScale = 750;
    
    if (isSmall) {
      heightScale = 750;  // smaller height for mobile
      widthScale = 500;   // smaller width for mobile
    } else if (isMedium) {
      heightScale = 900;  // medium height for tablets
      widthScale = 700;   // medium width for tablets
    }
    
    this.scale = this.screen.height / 1500
    this.plane.scale.y = (this.viewport.height * (heightScale * this.scale)) / this.screen.height
    this.plane.scale.x = (this.viewport.width * (widthScale * this.scale)) / this.screen.width
    this.plane.program.uniforms.uPlaneSizes.value = [this.plane.scale.x, this.plane.scale.y]
    
    // Adjust padding for different screen sizes
    this.padding = isSmall ? 2 : (isMedium ? 1.5 : 2);
    
    this.width = this.plane.scale.x + this.padding
    this.widthTotal = this.width * this.length
    this.x = this.width * this.index
  }
}

// Create pagination dots component
class PaginationDots {
  constructor({ container, itemCount, dotColor = '#ffffff', activeDotColor = '#007bff', size = 10, gap = 10 }) {
    this.container = container
    this.itemCount = itemCount
    this.dotColor = dotColor
    this.activeDotColor = activeDotColor
    this.size = size
    this.gap = gap
    this.activeIndex = 0
    this.dots = []
    this.createDots()
  }

  createDots() {
    // Create pagination container
    this.dotsContainer = document.createElement('div')
    this.dotsContainer.className = 'pagination-dots'
    this.dotsContainer.style.position = 'absolute'
    this.dotsContainer.style.bottom = '20px'
    this.dotsContainer.style.left = '50%'
    this.dotsContainer.style.transform = 'translateX(-50%)'
    this.dotsContainer.style.display = 'flex'
    this.dotsContainer.style.justifyContent = 'center'
    this.dotsContainer.style.alignItems = 'center'
    this.dotsContainer.style.zIndex = '100'
    
    // Create individual dots
    for (let i = 0; i < this.itemCount; i++) {
      const dot = document.createElement('div')
      dot.className = 'pagination-dot'
      dot.style.width = `${this.size}px`
      dot.style.height = `${this.size}px`
      dot.style.borderRadius = '50%'
      dot.style.backgroundColor = i === 0 ? this.activeDotColor : this.dotColor
      dot.style.margin = `0 ${this.gap / 2}px`
      dot.style.transition = 'all 0.3s ease'
      dot.style.opacity = i === 0 ? '1' : '0.5'
      dot.style.transform = i === 0 ? 'scale(1.2)' : 'scale(1)'
      
      this.dots.push(dot)
      this.dotsContainer.appendChild(dot)
    }
    
    this.container.appendChild(this.dotsContainer)
  }
  
  setActiveDot(index) {
    // Normalize index to actual item count (for the duplicated items)
    const actualIndex = index % (this.itemCount / 2)
    
    // Update all dots
    this.dots.forEach((dot, i) => {
      if (i === actualIndex) {
        dot.style.backgroundColor = this.activeDotColor
        dot.style.opacity = '1'
        dot.style.transform = 'scale(1.2)'
      } else {
        dot.style.backgroundColor = this.dotColor
        dot.style.opacity = '0.5'
        dot.style.transform = 'scale(1)'
      }
    })
    
    this.activeIndex = actualIndex
  }
  
  destroy() {
    if (this.dotsContainer && this.dotsContainer.parentNode) {
      this.dotsContainer.parentNode.removeChild(this.dotsContainer)
    }
  }
}

class App {
  constructor(container, { items, bend, textColor = "#ffffff", borderRadius = 0, font = "bold 30px DM Sans", autoScroll = true, autoScrollInterval = 2000, dotColor = '#ffffff', activeDotColor = '#007bff', dotSize = 10, dotGap = 10 } = {}) {
    document.documentElement.classList.remove('no-js')
    this.container = container
    this.scroll = { ease: 0.05, current: 0, target: 0, last: 0 }
    this.onCheckDebounce = debounce(this.onCheck, 200)

    // Auto scroll properties
    this.autoScroll = autoScroll
    this.autoScrollInterval = autoScrollInterval
    this.autoScrollPaused = false
    this.autoScrollTimer = null
    
    // Pagination dots properties
    this.dotColor = dotColor
    this.activeDotColor = activeDotColor
    this.dotSize = dotSize
    this.dotGap = dotGap
    
    // Create renderer, camera, and scene first
    this.createRenderer()
    this.createCamera()
    this.createScene()
    
    // Calculate viewport and screen dimensions
    this.onResize()
    
    // Create geometry and media items after dimensions are established
    this.createGeometry()
    this.createMedias(items, bend, textColor, borderRadius, font)
    
    // Create pagination dots after medias are created
    this.createPaginationDots(items)
    
    // Start the update loop and add event listeners
    this.update()
    this.addEventListeners()

    // Start auto-scrolling if enabled
    if (this.autoScroll) {
      this.startAutoScroll()
    }
  }
  
  createPaginationDots(items) {
    const defaultItems = [
      { image: `https://picsum.photos/seed/1/800/600`, text: 'Bridge' },
      { image: `https://picsum.photos/seed/2/800/600`, text: 'Desk Setup' },
      { image: `https://picsum.photos/seed/3/800/600`, text: 'Waterfall' },
      { image: `https://picsum.photos/seed/4/800/600`, text: 'Strawberries' },
      { image: `https://picsum.photos/seed/5/800/600`, text: 'Deep Diving' },
      { image: `https://picsum.photos/seed/16/800/600`, text: 'Train Track' },
      { image: `https://picsum.photos/seed/17/800/600`, text: 'Santorini' },
      { image: `https://picsum.photos/seed/8/800/600`, text: 'Blurry Lights' },
      { image: `https://picsum.photos/seed/9/800/600`, text: 'New York' },
      { image: `https://picsum.photos/seed/10/800/600`, text: 'Good Boy' },
      { image: `https://picsum.photos/seed/21/800/600`, text: 'Coastline' },
      { image: `https://picsum.photos/seed/12/800/600`, text: "Palm Trees" }
    ]
    const galleryItems = items && items.length ? items : defaultItems
    
    this.paginationDots = new PaginationDots({
      container: this.container,
      itemCount: galleryItems.length,
      dotColor: this.dotColor,
      activeDotColor: this.activeDotColor,
      size: this.dotSize,
      gap: this.dotGap
    })
  }
  
  createRenderer() {
    this.renderer = new Renderer({ alpha: true })
    this.gl = this.renderer.gl
    this.gl.clearColor(0, 0, 0, 0)
    const canvas = this.gl.canvas
    canvas.style.height = "120vh" // Increase canvas height to 120% of viewport height
    
    this.container.appendChild(this.gl.canvas)
  }
  createCamera() {
    this.camera = new Camera(this.gl)
    this.camera.fov = 45
    this.camera.position.z = 20
  }
  createScene() {
    this.scene = new Transform()
  }
  createGeometry() {
    this.planeGeometry = new Plane(this.gl, {
      heightSegments: 50,
      widthSegments: 100
    })
  }
  createMedias(items, bend = 1, textColor, borderRadius, font) {
    const defaultItems = [
      { image: `https://picsum.photos/seed/1/800/600`, text: 'Bridge' },
      { image: `https://picsum.photos/seed/2/800/600`, text: 'Desk Setup' },
      { image: `https://picsum.photos/seed/3/800/600`, text: 'Waterfall' },
      { image: `https://picsum.photos/seed/4/800/600`, text: 'Strawberries' },
      { image: `https://picsum.photos/seed/5/800/600`, text: 'Deep Diving' },
      { image: `https://picsum.photos/seed/16/800/600`, text: 'Train Track' },
      { image: `https://picsum.photos/seed/17/800/600`, text: 'Santorini' },
      { image: `https://picsum.photos/seed/8/800/600`, text: 'Blurry Lights' },
      { image: `https://picsum.photos/seed/9/800/600`, text: 'New York' },
      { image: `https://picsum.photos/seed/10/800/600`, text: 'Good Boy' },
      { image: `https://picsum.photos/seed/21/800/600`, text: 'Coastline' },
      { image: `https://picsum.photos/seed/12/800/600`, text: "Palm Trees" }
    ]
    const galleryItems = items && items.length ? items : defaultItems
    this.mediasImages = galleryItems.concat(galleryItems)
    this.originalItemCount = galleryItems.length
    this.medias = this.mediasImages.map((data, index) => {
      return new Media({
        geometry: this.planeGeometry,
        gl: this.gl,
        image: data.image,
        index,
        length: this.mediasImages.length,
        renderer: this.renderer,
        scene: this.scene,
        screen: this.screen,
        text: data.text,
        viewport: this.viewport,
        bend,
        textColor,
        borderRadius,
        font
      })
    })
  }

  startAutoScroll() {
    if (this.autoScrollTimer) {
      clearInterval(this.autoScrollTimer)
    }
    
    this.autoScrollTimer = setInterval(() => {
      if (!this.autoScrollPaused && this.medias && this.medias.length > 0) {
        // Calculate the width of one item to move
        const width = this.medias[0].width
        // Move one card to the right
        this.scroll.target += width
        this.onCheck()
      }
    }, this.autoScrollInterval)
  }
  
  pauseAutoScroll() {
    this.autoScrollPaused = true
  }
  
  resumeAutoScroll() {
    this.autoScrollPaused = false
  }
  
  onTouchDown(e) {
    this.isDown = true
    this.scroll.position = this.scroll.current
    this.start = e.touches ? e.touches[0].clientX : e.clientX

    this.pauseAutoScroll()
  }
  onTouchMove(e) {
    if (!this.isDown) return
    const x = e.touches ? e.touches[0].clientX : e.clientX
    const distance = (this.start - x) * 0.05
    this.scroll.target = this.scroll.position + distance
  }
  onTouchUp() {
    this.isDown = false
    this.onCheck()
    setTimeout(() => {
      this.resumeAutoScroll()
    }, 1000)
  }
  onWheel() {
    this.scroll.target += 2
    this.onCheckDebounce()
    this.pauseAutoScroll()
    
    // Resume after some idle time
    clearTimeout(this.wheelTimer)
    this.wheelTimer = setTimeout(() => {
      this.resumeAutoScroll()
    }, 2000)
  }
  onCheck() {
    if (!this.medias || !this.medias[0]) return
    const width = this.medias[0].width
    const itemIndex = Math.round(Math.abs(this.scroll.target) / width)
    const item = width * itemIndex
    this.scroll.target = this.scroll.target < 0 ? -item : item
  }
  onResize() {
    // Make sure container exists
    if (!this.container) return;
    
    this.screen = {
      width: this.container.clientWidth,
      height: this.container.clientHeight
    }
    
    // Make sure the renderer exists
    if (this.renderer) {
      this.renderer.setSize(this.screen.width, this.screen.height)
    }
    
    // Make sure camera exists
    if (this.camera) {
      this.camera.perspective({
        aspect: this.screen.width / this.screen.height
      })
      
      const fov = (this.camera.fov * Math.PI) / 180
      const height = 2 * Math.tan(fov / 2) * this.camera.position.z
      const width = height * this.camera.aspect
      this.viewport = { width, height }
    }
    
    // Only update medias if they exist
    if (this.medias && this.screen && this.viewport) {
      this.medias.forEach((media) =>
        media.onResize({ screen: this.screen, viewport: this.viewport })
      )
    }
  }
  update() {
    this.scroll.current = lerp(
      this.scroll.current,
      this.scroll.target,
      this.scroll.ease
    )
    const direction = this.scroll.current > this.scroll.last ? 'right' : 'left'
    
    if (this.medias) {
      this.medias.forEach((media) => media.update(this.scroll, direction))
      
      // Update pagination dots based on current slide
      if (this.paginationDots && this.medias[0]) {
        const width = this.medias[0].width
        const currentIndex = Math.round(Math.abs(this.scroll.current) / width) % this.originalItemCount
        this.paginationDots.setActiveDot(currentIndex)
      }
    }
    
    this.renderer.render({ scene: this.scene, camera: this.camera })
    this.scroll.last = this.scroll.current
    this.raf = window.requestAnimationFrame(this.update.bind(this))
  }
  addEventListeners() {
    this.boundOnResize = this.onResize.bind(this)
    this.boundOnWheel = this.onWheel.bind(this)
    this.boundOnTouchDown = this.onTouchDown.bind(this)
    this.boundOnTouchMove = this.onTouchMove.bind(this)
    this.boundOnTouchUp = this.onTouchUp.bind(this)
    window.addEventListener('resize', this.boundOnResize)
    window.addEventListener('mousewheel', this.boundOnWheel)
    window.addEventListener('wheel', this.boundOnWheel)
    window.addEventListener('mousedown', this.boundOnTouchDown)
    window.addEventListener('mousemove', this.boundOnTouchMove)
    window.addEventListener('mouseup', this.boundOnTouchUp)
    window.addEventListener('touchstart', this.boundOnTouchDown)
    window.addEventListener('touchmove', this.boundOnTouchMove)
    window.addEventListener('touchend', this.boundOnTouchUp)
  }
  destroy() {
    // Clean up pagination dots
    if (this.paginationDots) {
      this.paginationDots.destroy()
    }
    
    // Clear auto-scroll timer when component unmounts
    if (this.autoScrollTimer) {
      clearInterval(this.autoScrollTimer)
      this.autoScrollTimer = null
    }
    
    if (this.wheelTimer) {
      clearTimeout(this.wheelTimer)
    }
    window.cancelAnimationFrame(this.raf)
    window.removeEventListener('resize', this.boundOnResize)
    window.removeEventListener('mousewheel', this.boundOnWheel)
    window.removeEventListener('wheel', this.boundOnWheel)
    window.removeEventListener('mousedown', this.boundOnTouchDown)
    window.removeEventListener('mousemove', this.boundOnTouchMove)
    window.removeEventListener('mouseup', this.boundOnTouchUp)
    window.removeEventListener('touchstart', this.boundOnTouchDown)
    window.removeEventListener('touchmove', this.boundOnTouchMove)
    window.removeEventListener('touchend', this.boundOnTouchUp)
    if (this.renderer && this.renderer.gl && this.renderer.gl.canvas.parentNode) {
      this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas)
    }
  }
}

export default function CircularGallery({
  items,
  bend = 3,
  textColor = "#ffffff",
  borderRadius = 0.05,
  font = "bold 30px DM Sans",
  autoScroll = true,
  autoScrollInterval = 2000,
  dotColor = '#ffffff',
  activeDotColor = '#007bff',
  dotSize = 6,
  dotGap = 10
}) {
  const containerRef = useRef(null)
  useEffect(() => {
    const app = new App(containerRef.current, { 
      items, 
      bend, 
      textColor, 
      borderRadius, 
      font, 
      autoScroll, 
      autoScrollInterval,
      dotColor,
      activeDotColor,
      dotSize,
      dotGap
    })
    return () => {
      app.destroy()
    }
  }, [items, bend, textColor, borderRadius, font, autoScroll, autoScrollInterval, dotColor, activeDotColor, dotSize, dotGap])
  
  return (
    <div className='w-full h-full overflow-hidden cursor-grab active:cursor-grabbing relative' ref={containerRef} />
  )
}