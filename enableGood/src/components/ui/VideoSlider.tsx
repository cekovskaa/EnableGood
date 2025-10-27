import React, { useRef, useState } from "react";
import { videoItems } from "../../data/videoItems";
import type { VideoItem } from "../../types/types";
import "../../styles/VideoCarousel.css";

interface VideoSliderProps {
  isClickable?: boolean;
}

const VideoSlider: React.FC<VideoSliderProps> = ({ isClickable = true }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);

  const handlePlayClick = (videoId: number) => {
    if (!isClickable) return;
    setPlayingVideoId(videoId);
  };

  const handleCloseVideo = () => {
    setPlayingVideoId(null);
  };

  return (
    <div className="video-slider-container">
      <div className="video-slider" ref={sliderRef}>
        {videoItems.map((item: VideoItem) => (
          <div key={item.id} className="video-card">
            <div className="video-thumbnail">
              {playingVideoId === item.id && isClickable ? (
                <div className="video-player">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/MLpWrANjFbI?si=fd7bbhF3mRLmOf8c&autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  <button
                    className="close-video-btn"
                    onClick={handleCloseVideo}
                    aria-label="Close video"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              ) : (
                <>
                  <img src={item.thumbnail} alt={item.title} />
                  <div className="video-overlay">
                    <div className="d-flex justify-content-center align-items-center">
                      <h3 className="video-title">{item.title}</h3>
                      <i
                        className={`fa-solid fa-circle-play play-button ${
                          !isClickable ? "disabled-play" : ""
                        }`}
                        onClick={() => handlePlayClick(item.id)}
                      ></i>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSlider;
