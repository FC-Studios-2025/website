import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight, FaExpand } from "react-icons/fa";

const SquareImageCarousel = ({ images, containerClassName = "", carouselTitle = "" }) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const imageContainerRefs = useRef({});
  const autoAdvanceTimerRef = useRef(null);
  const [previousIndex, setPreviousIndex] = useState(null);

  // Reset auto advance timer
  const resetAutoAdvanceTimer = () => {
    // Clear any existing timer
    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
    }

    // Set a new timer to advance to the next slide after 5 seconds
    autoAdvanceTimerRef.current = setTimeout(() => {
      if (swiperRef.current?.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    }, 5000);
  };

  const handleSlideChange = (swiper) => {
    const newIndex = swiper.realIndex;
    
    // Store previous index before updating
    setPreviousIndex(activeIndex);
    setActiveIndex(newIndex);
    
    // Reset the auto-advance timer for the new slide
    resetAutoAdvanceTimer();
  };

  // Toggle fullscreen for the current image
  const toggleFullscreen = () => {
    const currentImageContainer = imageContainerRefs.current[images[activeIndex]?.id];
    
    if (!currentImageContainer) return;

    // Clear auto-advance timer when entering fullscreen
    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
    }

    if (!isFullscreen) {
      if (currentImageContainer.requestFullscreen) {
        currentImageContainer.requestFullscreen();
      } else if (currentImageContainer.webkitRequestFullscreen) {
        currentImageContainer.webkitRequestFullscreen();
      } else if (currentImageContainer.msRequestFullscreen) {
        currentImageContainer.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      
      // Restart auto-advance timer when exiting fullscreen
      resetAutoAdvanceTimer();
    }
    setIsFullscreen(!isFullscreen);
  };

  // Handle fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      const newFullscreenState = !!(
        document.fullscreenElement || 
        document.webkitFullscreenElement || 
        document.msFullscreenElement
      );
      
      setIsFullscreen(newFullscreenState);
      
      // If exiting fullscreen, restart auto-advance timer
      if (!newFullscreenState) {
        resetAutoAdvanceTimer();
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("msfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.removeEventListener("msfullscreenchange", handleFullscreenChange);
    };
  }, []);

  // Start auto-advance when component mounts
  useEffect(() => {
    if (images && images.length > 0) {
      resetAutoAdvanceTimer();
    }
    
    return () => {
      if (autoAdvanceTimerRef.current) {
        clearTimeout(autoAdvanceTimerRef.current);
      }
    };
  }, [images]);

  // Add fullscreen styles when entering fullscreen mode
  useEffect(() => {
    if (isFullscreen) {
      const currentImageContainer = imageContainerRefs.current[images[activeIndex]?.id];
      if (currentImageContainer) {
        // Add specific styles for fullscreen mode
        currentImageContainer.style.display = "flex";
        currentImageContainer.style.alignItems = "center";
        currentImageContainer.style.justifyContent = "center";
        currentImageContainer.style.backgroundColor = "#000";
        
        // Find the image element within container and apply styles
        const imageElement = currentImageContainer.querySelector("img");
        if (imageElement) {
          // Maintain aspect ratio in fullscreen
          imageElement.style.width = "auto";
          imageElement.style.height = "auto";
          imageElement.style.maxWidth = "100%";
          imageElement.style.maxHeight = "100%";
          imageElement.style.objectFit = "contain";
        }
      }
    }
  }, [isFullscreen, activeIndex, images]);

  return (
    <div className={`square-carousel-container ${containerClassName} py-10 px-4`}>
      {carouselTitle && (
        <h3 className="carousel-title text-xl font-semibold mb-4 text-center">{carouselTitle}</h3>
      )}
      
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Navigation Arrows */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full z-10 hover:bg-black/80 transition-all"
          onClick={() => {
            swiperRef.current?.swiper?.slidePrev();
            resetAutoAdvanceTimer();
          }}
          aria-label="Previous image"
        >
          <FaChevronLeft size={14} />
        </button>

        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full z-10 hover:bg-black/80 transition-all"
          onClick={() => {
            swiperRef.current?.swiper?.slideNext();
            resetAutoAdvanceTimer();
          }}
          aria-label="Next image"
        >
          <FaChevronRight size={14} />
        </button>

        <Swiper
          ref={swiperRef}
          slidesPerView={1.2}
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          speed={600}
          modules={[Navigation, Autoplay]}
          onSlideChange={handleSlideChange}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            480: { slidesPerView: 1.4 },
            640: { slidesPerView: 1.6 },
            768: { slidesPerView: 1.8 },
            1024: { slidesPerView: 2.2 },
            1280: { slidesPerView: 2.5 },
          }}
          className="w-xs md:w-xl lg:w-full"
        >
          {images && images.map((image, index) => (
            <SwiperSlide key={image.id || index} className="flex justify-center py-8">
              <div
                className={`relative overflow-hidden rounded-lg shadow-xl transition-all duration-500 ${
                  activeIndex === index
                    ? "scale-105 opacity-100 shadow-2xl"
                    : "scale-90 opacity-40"
                }`}
                style={{ maxWidth: "100%" }}
              >
                {/* Image title overlay */}
                {activeIndex === index && image.title && (
                  <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black/70 to-transparent p-4 z-10">
                    <h3 className="text-white font-medium text-lg">
                      {image.title}
                    </h3>
                  </div>
                )}

                {/* Image container with 1:1 aspect ratio */}
                <div 
                  className="relative"
                  style={{ aspectRatio: "1/1" }}
                  ref={(el) => (imageContainerRefs.current[image.id || index] = el)}
                >
                  <img
                    src={image.url}
                    alt={image.alt || `Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Caption and controls overlay - only visible on active slide */}
                  {activeIndex === index && (
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 flex justify-between items-center z-10">
                      {image.caption && (
                        <div className="text-white text-sm">
                          {image.caption}
                        </div>
                      )}

                      <div className="flex-shrink-0 ml-auto">
                        <button
                          onClick={toggleFullscreen}
                          className="text-white bg-black/40 rounded-full p-2 hover:bg-black/60"
                          aria-label="Fullscreen"
                        >
                          <FaExpand size={16} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Pagination indicators */}
      {/* {images && images.length > 1 && (
        <div className="pagination-dots flex justify-center mt-4 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`pagination-dot w-2 h-2 rounded-full ${
                index === activeIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
              onClick={() => {
                swiperRef.current?.swiper.slideToLoop(index);
                resetAutoAdvanceTimer();
              }}
            />
          ))}
        </div>
      )} */}
    </div>
  );
};

export default SquareImageCarousel;