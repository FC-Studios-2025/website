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
    src: "https://res.cloudinary.com/dragkodnu/video/upload/v1743306783/Square%20Videos/sq1.mp4",
    aspectRatio: "1/1", // sq/reel format
    title: "Vertical Reel" 
  },
  { 
    id: "video2", 
    src: "https://res.cloudinary.com/dragkodnu/video/upload/v1743306782/Square%20Videos/sq2.mp4",
    aspectRatio: "1/1", // sq/reel format
    title: "Vertical Reel" 
  },
  { 
    id: "video3", 
    src: "https://res.cloudinary.com/dragkodnu/video/upload/v1743306781/Square%20Videos/sq3.mp4",
    aspectRatio: "1/1", // sq/reel format
    title: "Vertical Reel" 
  },
  { 
    id: "video4", 
    src: "https://res.cloudinary.com/dragkodnu/video/upload/v1743306780/Square%20Videos/sq4.mp4",
    aspectRatio: "1/1", // sq/reel format
    title: "Vertical Reel" 
  },
  { 
    id: "video5", 
    src: "https://res.cloudinary.com/dragkodnu/video/upload/v1743306779/Square%20Videos/sq5.mp4",
    aspectRatio: "1/1", // sq/reel format
    title: "Vertical Reel" 
  },
  { 
    id: "video6", 
    src: "https://res.cloudinary.com/dragkodnu/video/upload/v1743306778/Square%20Videos/sq6.mp4",
    aspectRatio: "1/1", // sq/reel format
    title: "Vertical Reel" 
  },
  { 
    id: "video7", 
    src: "https://res.cloudinary.com/dragkodnu/video/upload/v1743306778/Square%20Videos/sq7.mp4",
    aspectRatio: "1/1", // sq/reel format
    title: "Vertical Reel" 
  },
  { 
    id: "video8", 
    src: "https://res.cloudinary.com/dragkodnu/video/upload/v1743306778/Square%20Videos/sq8.mp4",
    aspectRatio: "1/1", // sq/reel format
    title: "Vertical Reel" 
  },
];

const SqVideoCarousel = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRefs = useRef({});
  const [previousIndex, setPreviousIndex] = useState(null);

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

  return (
    <div className="py-10 px-4">
      
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Navigation Arrows */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full z-10 hover:bg-black/80 transition-all"
          onClick={() => swiperRef.current?.swiper?.slidePrev()}
          aria-label="Previous video"
        >
          <FaChevronLeft size={14} />
        </button>

        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full z-10 hover:bg-black/80 transition-all"
          onClick={() => swiperRef.current?.swiper?.slideNext()}
          aria-label="Next video"
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
          {videoData.map((video, index) => (
            <SwiperSlide key={video.id} className="flex justify-center py-8">
              <div
                className={`relative overflow-hidden rounded-lg shadow-xl transition-all duration-500 ${
                  activeIndex === index
                    ? "scale-105 opacity-100 shadow-2xl"
                    : "scale-90 opacity-40"
                }`}
                style={{ maxWidth: "100%" }}
              >
                {/* Video title overlay */}
                {activeIndex === index && (
                  <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black/70 to-transparent p-4 z-10">
                    <h3 className="text-white font-medium text-lg">{video.title}</h3>
                  </div>
                )}
                
                {/* Video container with dynamic aspect ratio */}
                <div className="relative" style={{ aspectRatio: video.aspectRatio }}>
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
                  
                  {/* Video controls overlay - only visible on active slide */}
                  {activeIndex === index && (
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 flex justify-between items-center z-10">
                      <button 
                        onClick={togglePlayPause}
                        className="text-white bg-black/40 rounded-full p-2 hover:bg-black/60"
                        aria-label={isPlaying ? "Pause" : "Play"}
                      >
                        {isPlaying ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                          </svg>
                        )}
                      </button>
                      
                      <div className="flex space-x-2">
                        <button 
                          onClick={toggleMute}
                          className="text-white bg-black/40 rounded-full p-2 hover:bg-black/60"
                          aria-label={isMuted ? "Unmute" : "Mute"}
                        >
                          {isMuted ? <FaVolumeMute size={16} /> : <FaVolumeUp size={16} />}
                        </button>
                        
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
    </div>
  );
};

export default SqVideoCarousel;