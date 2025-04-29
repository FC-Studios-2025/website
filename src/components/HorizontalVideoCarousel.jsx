import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight, FaExpand, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const HorizontalVideoCarousel = ({ videos, containerClassName = "", carouselTitle = "" }) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRefs = useRef({});
  const videoContainerRefs = useRef({});
  const [previousIndex, setPreviousIndex] = useState(null);
  const autoAdvanceTimerRef = useRef(null);
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

  // Start auto-advance timer
  const startAutoAdvanceTimer = () => {
    // Clear any existing timer first
    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
    }
    
    // Set new timer to advance to next slide after 5 seconds
    autoAdvanceTimerRef.current = setTimeout(() => {
      if (swiperRef.current?.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    }, 5000); // 5 seconds timeout
  };

  const handleSlideChange = (swiper) => {
    const newIndex = swiper.realIndex;
    
    // Store the previous index before updating to the new one
    setPreviousIndex(activeIndex);
    setActiveIndex(newIndex);

    // Immediately pause the previous video
    if (previousIndex !== null && previousIndex !== newIndex) {
      const prevVideo = videoRefs.current[videos[previousIndex].id];
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
      const currentVideo = videoRefs.current[videos[newIndex].id];
      if (currentVideo && isPlaying) {
        currentVideo.play().catch(err => console.log("Autoplay prevented:", err));
      }
      
      // Start the auto-advance timer for the new slide
      startAutoAdvanceTimer();
    }, 100);
  };

  // Toggle play/pause for the current video
  const togglePlayPause = () => {
    const currentVideo = videoRefs.current[videos[activeIndex].id];
    if (!currentVideo) return;

    if (isPlaying) {
      currentVideo.pause();
      // Clear auto-advance timer when paused
      if (autoAdvanceTimerRef.current) {
        clearTimeout(autoAdvanceTimerRef.current);
      }
    } else {
      currentVideo.play().catch(err => console.log("Play prevented:", err));
      // Restart auto-advance timer when resumed
      startAutoAdvanceTimer();
    }
    setIsPlaying(!isPlaying);
  };

  // Toggle mute/unmute for the current video
  const toggleMute = () => {
    const currentVideo = videoRefs.current[videos[activeIndex].id];
    if (!currentVideo) return;
    
    currentVideo.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Create a fullscreen container with proper aspect ratio
  const toggleFullscreen = () => {
    // Get references to current video elements
    const currentVideoContainer = videoContainerRefs.current[videos[activeIndex].id];
    const currentVideo = videoRefs.current[videos[activeIndex].id];
    
    if (!currentVideoContainer || !currentVideo) return;

    // Clear auto-advance timer when entering fullscreen
    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
    }

    if (!isFullscreen) {
      // Use the container div for fullscreen to maintain aspect ratio
      if (currentVideoContainer.requestFullscreen) {
        currentVideoContainer.requestFullscreen();
      } else if (currentVideoContainer.webkitRequestFullscreen) {
        currentVideoContainer.webkitRequestFullscreen();
      } else if (currentVideoContainer.msRequestFullscreen) {
        currentVideoContainer.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      
      // Restart auto-advance timer when exiting fullscreen if video is playing
      if (isPlaying) {
        startAutoAdvanceTimer();
      }
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
      
      // If exiting fullscreen and video is playing, restart auto-advance timer
      if (!newFullscreenState && isPlaying) {
        startAutoAdvanceTimer();
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
  }, [isPlaying]);

  // Play the first video when component mounts
  useEffect(() => {
    if (videos && videos.length > 0) {
      const timer = setTimeout(() => {
        const firstVideo = videoRefs.current[videos[0].id];
        if (firstVideo) {
          firstVideo.play().catch(err => console.log("Initial autoplay prevented:", err));
          // Start auto-advance timer for the first video
          startAutoAdvanceTimer();
        }
      }, 100);
  
      return () => clearTimeout(timer);
    }
  }, [videos]);

  // Ensure only one video plays at a time when activeIndex changes
  useEffect(() => {
    if (!videos || videos.length === 0) return;
    
    // Pause all videos except the active one
    Object.entries(videoRefs.current).forEach(([id, videoEl]) => {
      if (videoEl) {
        const videoIndex = videos.findIndex(video => video.id === id);
        if (videoIndex !== activeIndex) {
          videoEl.pause();
        } else if (isPlaying) {
          videoEl.play().catch(err => console.log("Play prevented:", err));
        }
      }
    });
  }, [activeIndex, isPlaying, videos]);

  // Add fullscreen styles when entering fullscreen mode
  useEffect(() => {
    if (isFullscreen) {
      const currentVideoContainer = videoContainerRefs.current[videos[activeIndex].id];
      if (currentVideoContainer) {
        // Add specific styles for fullscreen mode
        currentVideoContainer.style.display = "flex";
        currentVideoContainer.style.alignItems = "center";
        currentVideoContainer.style.justifyContent = "center";
        currentVideoContainer.style.backgroundColor = "#000";
        
        // Find the video element within container and apply styles
        const videoElement = currentVideoContainer.querySelector("video");
        if (videoElement) {
          // Maintain aspect ratio in fullscreen
          videoElement.style.width = "auto";
          videoElement.style.height = "auto";
          videoElement.style.maxWidth = "100%";
          videoElement.style.maxHeight = "100%";
          videoElement.style.objectFit = "contain";
        }
      }
    }
  }, [isFullscreen, activeIndex, videos]);

  // Clean up auto-advance timer when component unmounts
  useEffect(() => {
    return () => {
      if (autoAdvanceTimerRef.current) {
        clearTimeout(autoAdvanceTimerRef.current);
      }
    };
  }, []);

  // Reset auto-advance timer on user interaction
  const handleUserInteraction = () => {
    if (isPlaying) {
      startAutoAdvanceTimer();
    }
  };

  // Get dynamic height for video container - changed for horizontal videos
  const getVideoContainerStyles = () => {
    // Using aspect ratio 16:9 for horizontal videos
    if (viewportSize.isMobile) {
      return {
        width: "85vw",
        aspectRatio: "16/9", 
        maxWidth: "95%",
        margin: "0 auto",
      };
    } else if (viewportSize.isTablet) {
      return {
        width: "75vw",
        aspectRatio: "16/9",
        maxWidth: "90%",
        margin: "0 auto"
      };
    } else {
      return {
        width: "60vw",
        aspectRatio: "16/9",
        maxWidth: "100%",
        margin: "0 auto"
      };
    }
  };

  // Determine icon sizes based on viewport
  const getIconSize = () => {
    if (viewportSize.isMobile) return 14; 
    if (viewportSize.isTablet) return 16;
    return 18;
  };

  // If no videos are provided, show a placeholder or nothing
  if (!videos || videos.length === 0) {
    return (
      <div className="py-8 px-4 text-center text-gray-500">
        No videos available to display
      </div>
    );
  }

  return (
    <div className={`py-2 px-1 sm:py-3 md:py-4 lg:py-6 xl:py-8 sm:px-2 md:px-3 lg:px-6 ${containerClassName}`}>
      {carouselTitle && (
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">{carouselTitle}</h2>
      )}
      <div className="relative w-full max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto">
        {/* Navigation Arrows - Responsive sizes and positions */}
        <button
          className="absolute left-0 sm:left-1 md:left-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-1.5 sm:p-2 md:p-3 rounded-full z-10 hover:bg-black/80 transition-all"
          onClick={() => {
            swiperRef.current?.swiper?.slidePrev();
            handleUserInteraction();
          }}
          aria-label="Previous video"
        >
          <FaChevronLeft size={getIconSize()} />
        </button>

        <button
          className="absolute right-0 sm:right-1 md:right-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-1.5 sm:p-2 md:p-3 rounded-full z-10 hover:bg-black/80 transition-all"
          onClick={() => {
            swiperRef.current?.swiper?.slideNext();
            handleUserInteraction();
          }}
          aria-label="Next video"
        >
          <FaChevronRight size={getIconSize()} />
        </button>

        <Swiper
          ref={swiperRef}
          slidesPerView={viewportSize.isMobile ? 1.3 : viewportSize.isTablet ? 1.3 : 1.4}
          spaceBetween={viewportSize.isMobile ? 15 : viewportSize.isTablet ? 20 : 30}
          centeredSlides={true}
          loop={true}
          speed={600}
          modules={[Navigation, Autoplay]}
          onSlideChange={handleSlideChange}
          breakpoints={{
            320: { slidesPerView: 1.3, spaceBetween: 10 },
            480: { slidesPerView: 1.4, spaceBetween: 15 },
            640: { slidesPerView: 1.6, spaceBetween: 20 },
            768: { slidesPerView: 1.8, spaceBetween: 25 },
            1024: { slidesPerView: 2.0, spaceBetween: 30 },
            1280: { slidesPerView: 2.2, spaceBetween: 35 },
          }}
          className="w-full"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={video.id} className="flex justify-center py-2 sm:py-3 md:py-4 lg:py-6">
              <div
                ref={(el) => (videoContainerRefs.current[video.id] = el)}
                className={`relative overflow-hidden rounded-lg shadow-xl transition-all duration-500 ${
                  activeIndex === index
                    ? "scale-100 sm:scale-102 md:scale-105 opacity-100 shadow-2xl"
                    : viewportSize.isMobile ? "scale-95 opacity-85" : "scale-90 opacity-80"
                } ${isFullscreen && activeIndex === index ? "fullscreen-container" : ""}`}
                style={getVideoContainerStyles()}
              >
                {/* Video title overlay - responsive text size */}
                {video.title && activeIndex === index && (
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
                  className={`w-full h-full object-cover ${isFullscreen && activeIndex === index ? "fullscreen-video" : ""}`}
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
                      onClick={() => {
                        togglePlayPause();
                        handleUserInteraction();
                      }}
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
                        onClick={() => {
                          toggleMute();
                          handleUserInteraction();
                        }}
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

export default HorizontalVideoCarousel;