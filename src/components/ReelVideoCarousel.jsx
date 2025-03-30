import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight, FaExpand, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

// Sample video data with different aspect ratios
const videoData = [
  { 
    id: "video1", 
    src: "https://res.cloudinary.com/dragkodnu/video/upload/v1743306752/Reels/r1.mp4",
    aspectRatio: "9/16", // vertical/reel format
    title: "Vertical Reel" 
  },
  { 
    id: "video2", 
    src: "https://res.cloudinary.com/dragkodnu/video/upload/v1743306747/Reels/r2.mp4",
    aspectRatio: "9/16", // vertical/reel format
    title: "Vertical Reel" 
  },
  { 
    id: "video3", 
    src: "https://res.cloudinary.com/dragkodnu/video/upload/v1743306744/Reels/r3.mp4",
    aspectRatio: "9/16", // vertical/reel format
    title: "Vertical Reel" 
  },
  { 
    id: "video4", 
    src: "https://res.cloudinary.com/dragkodnu/video/upload/v1743306744/Reels/r4.mp4",
    aspectRatio: "9/16", // vertical/reel format
    title: "Vertical Reel" 
  },
  { 
    id: "video5", 
    src: "https://res.cloudinary.com/dragkodnu/video/upload/v1743306743/Reels/r5.mp4",
    aspectRatio: "9/16", // vertical/reel format
    title: "Vertical Reel" 
  },
  { 
    id: "video6", 
    src: "https://res.cloudinary.com/dragkodnu/video/upload/v1743306743/Reels/r6.mp4",
    aspectRatio: "9/16", // vertical/reel format
    title: "Vertical Reel" 
  },
  { 
    id: "video7", 
    src: "https://res.cloudinary.com/dragkodnu/video/upload/v1743306742/Reels/r7.mp4",
    aspectRatio: "9/16", // vertical/reel format
    title: "Vertical Reel" 
  },
  { 
    id: "video8", 
    src: "https://res.cloudinary.com/dragkodnu/video/upload/v1743306741/Reels/r8.mp4",
    aspectRatio: "9/16", // vertical/reel format
    title: "Vertical Reel" 
  },
  { 
    id: "video9", 
    src: "https://res.cloudinary.com/dragkodnu/video/upload/v1743306741/Reels/r9.mp4",
    aspectRatio: "9/16", // vertical/reel format
    title: "Vertical Reel" 
  },
  { 
    id: "video10", 
    src: "https://res.cloudinary.com/dragkodnu/video/upload/v1743306740/Reels/r10.mp4",
    aspectRatio: "9/16", // vertical/reel format
    title: "Vertical Reel" 
  },
  { 
    id: "video11", 
    src: "https://res.cloudinary.com/dragkodnu/video/upload/v1743306739/Reels/r11.mp4",
    aspectRatio: "9/16", // vertical/reel format
    title: "Vertical Reel" 
  },
];

const ReelVideoCarousel = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRefs = useRef({});
  const [previousIndex, setPreviousIndex] = useState(null);
  const [viewportSize, setViewportSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
    isMobile: typeof window !== 'undefined' ? window.innerWidth < 640 : false,
    isTablet: typeof window !== 'undefined' ? window.innerWidth >= 640 && window.innerWidth < 1024 : false
  });

  // Detect viewport size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setViewportSize({
        width,
        height,
        isMobile: width < 640,
        isTablet: width >= 640 && width < 1024
      });
    };
    
    // Initial check
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSlideChange = (swiper) => {
    const newIndex = swiper.realIndex;
    
    // Store the previous index before updating to the new one
    setPreviousIndex(activeIndex);
    setActiveIndex(newIndex);

    // Immediately pause the previous video
    if (previousIndex !== null && previousIndex !== newIndex) {
      const prevVideo = videoRefs.current[videoData[previousIndex].id];
      if (prevVideo) {
        prevVideo.pause();
        prevVideo.currentTime = 0;
      }
    }

    // Pause ALL videos to be extra safe
    Object.values(videoRefs.current).forEach((videoEl) => {
      if (videoEl) {
        videoEl.pause();
      }
    });

    // Play the active video after a short delay
    setTimeout(() => {
      const currentVideo = videoRefs.current[videoData[newIndex].id];
      if (currentVideo && isPlaying) {
        currentVideo.play().catch(err => console.log("Autoplay prevented:", err));
      }
    }, 100);
  };

  // Toggle play/pause for the current video
  const togglePlayPause = () => {
    const currentVideo = videoRefs.current[videoData[activeIndex].id];
    if (!currentVideo) return;

    if (isPlaying) {
      currentVideo.pause();
    } else {
      currentVideo.play().catch(err => console.log("Play prevented:", err));
    }
    setIsPlaying(!isPlaying);
  };

  // Toggle mute/unmute for the current video
  const toggleMute = () => {
    const currentVideo = videoRefs.current[videoData[activeIndex].id];
    if (!currentVideo) return;
    
    currentVideo.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Toggle fullscreen for the current video
  const toggleFullscreen = () => {
    const currentVideo = videoRefs.current[videoData[activeIndex].id];
    if (!currentVideo) return;

    if (!isFullscreen) {
      if (currentVideo.requestFullscreen) {
        currentVideo.requestFullscreen();
      } else if (currentVideo.webkitRequestFullscreen) {
        currentVideo.webkitRequestFullscreen();
      } else if (currentVideo.msRequestFullscreen) {
        currentVideo.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  // Handle fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(
        document.fullscreenElement || 
        document.webkitFullscreenElement || 
        document.msFullscreenElement
      );
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

  // Play the first video when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      const firstVideo = videoRefs.current[videoData[0].id];
      if (firstVideo) {
        firstVideo.play().catch(err => console.log("Initial autoplay prevented:", err));
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Ensure only one video plays at a time when activeIndex changes
  useEffect(() => {
    // Pause all videos except the active one
    Object.entries(videoRefs.current).forEach(([id, videoEl]) => {
      if (videoEl) {
        const videoIndex = videoData.findIndex(video => video.id === id);
        if (videoIndex !== activeIndex) {
          videoEl.pause();
        } else if (isPlaying) {
          videoEl.play().catch(err => console.log("Play prevented:", err));
        }
      }
    });
  }, [activeIndex, isPlaying]);

  // Get dynamic height for video container
  const getVideoContainerStyles = () => {
    // Using aspect ratio 9:16 for vertical videos
    if (viewportSize.isMobile) {
      // On mobile, use a fixed height based on viewport height
      return {
        width: "70vw",
        height: "50vh", // Use most of the screen height
        maxWidth: "96%",
        margin: "0 auto",
      };
    } else if (viewportSize.isTablet) {
      // On tablet, maintain aspect ratio but with a max height
      return {
        aspectRatio: "9/16",
        maxHeight: "70vh",
        width: "auto",
        margin: "0 auto"
      };
    } else {
      // On desktop, maintain aspect ratio
      return {
        aspectRatio: "9/16",
        width: "86%",
        margin: "0 auto"
      };
    }
  };

  // Determine icon sizes based on viewport
  const getIconSize = () => {
    if (viewportSize.isMobile) return 14; // Slightly larger for better touch targets
    if (viewportSize.isTablet) return 16;
    return 18;
  };

  return (
    <div className="py-2 px-1 sm:py-3 md:py-4 lg:py-6 xl:py-8 sm:px-2 md:px-3 lg:px-4">
      <div className="relative w-full max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        {/* Navigation Arrows - Responsive sizes and positions */}
        <button
          className="absolute left-0 sm:left-1 md:left-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-1.5 sm:p-2 md:p-3 rounded-full z-10 hover:bg-black/80 transition-all"
          onClick={() => swiperRef.current?.swiper?.slidePrev()}
          aria-label="Previous video"
        >
          <FaChevronLeft size={getIconSize()} />
        </button>

        <button
          className="absolute right-0 sm:right-1 md:right-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-1.5 sm:p-2 md:p-3 rounded-full z-10 hover:bg-black/80 transition-all"
          onClick={() => swiperRef.current?.swiper?.slideNext()}
          aria-label="Next video"
        >
          <FaChevronRight size={getIconSize()} />
        </button>

        <Swiper
          ref={swiperRef}
          slidesPerView={viewportSize.isMobile ? 1.3 : viewportSize.isTablet ? 1.5 : 1.8}
          spaceBetween={viewportSize.isMobile ? 10 : viewportSize.isTablet ? 12 : 14}
          centeredSlides={true}
          loop={true}
          speed={600}
          modules={[Navigation, Autoplay]}
          onSlideChange={handleSlideChange}
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: 6 },
            480: { slidesPerView: 1.3, spaceBetween: 8 },
            640: { slidesPerView: 1.4, spaceBetween: 10 },
            768: { slidesPerView: 1.5, spaceBetween: 14 },
            1024: { slidesPerView: 1.8, spaceBetween: 16 },
            1280: { slidesPerView: 2.2, spaceBetween: 16 },
          }}
          className="w-xs md:w-xl lg:w-full"
        >
          {videoData.map((video, index) => (
            <SwiperSlide key={video.id} className="flex justify-center py-2 sm:py-3 md:py-4 lg:py-6">
              <div
                className={`relative overflow-hidden rounded-lg shadow-xl transition-all duration-500 ${
                  activeIndex === index
                    ? "scale-100 sm:scale-102 md:scale-105 opacity-100 shadow-2xl"
                    : viewportSize.isMobile ? "scale-95 opacity-70" : "scale-90 opacity-50"
                }`}
                style={getVideoContainerStyles()}
              >
                {/* Video title overlay - responsive text size */}
                {activeIndex === index && (
                  <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black/70 to-transparent p-2 sm:p-3 md:p-4 z-10">
                    <h3 className="text-white font-medium text-sm sm:text-base md:text-lg">
                      {video.title}
                    </h3>
                  </div>
                )}
                
                {/* Video element with proper dimensions */}
                <video
                  ref={(el) => (videoRefs.current[video.id] = el)}
                  src={video.src}
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover"
                  onPlay={(e) => {
                    // Safety check - ensure only active video plays
                    if (index !== activeIndex) {
                      e.target.pause();
                    }
                  }}
                />
                
                {/* Video controls overlay - responsive padding and sizing */}
                {activeIndex === index && (
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-2 sm:p-3 md:p-4 flex justify-between items-center z-10">
                    <button 
                      onClick={togglePlayPause}
                      className="text-white bg-black/40 rounded-full p-1.5 sm:p-2 md:p-2.5 hover:bg-black/60"
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width={getIconSize()} height={getIconSize()} fill="currentColor" viewBox="0 0 16 16">
                          <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width={getIconSize()} height={getIconSize()} fill="currentColor" viewBox="0 0 16 16">
                          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                        </svg>
                      )}
                    </button>
                    
                    <div className="flex space-x-2 sm:space-x-3">
                      <button 
                        onClick={toggleMute}
                        className="text-white bg-black/40 rounded-full p-1.5 sm:p-2 md:p-2.5 hover:bg-black/60"
                        aria-label={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted ? 
                          <FaVolumeMute size={getIconSize()} /> : 
                          <FaVolumeUp size={getIconSize()} />
                        }
                      </button>
                      
                      <button 
                        onClick={toggleFullscreen}
                        className="text-white bg-black/40 rounded-full p-1.5 sm:p-2 md:p-2.5 hover:bg-black/60"
                        aria-label="Fullscreen"
                      >
                        <FaExpand size={getIconSize()} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReelVideoCarousel;