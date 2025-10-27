import { useState } from "react";
import "../../styles/LearnMore.css";

interface LearnHeroProps {
  containerClass?: string;
}

export default function LearnHero({
  containerClass = "container-80",
}: LearnHeroProps) {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="learn-hero">
      <div className={containerClass}>
        <div className="row g-5">
          {/* Left Side */}
          <div className="col-12 col-md-6">
            <h1>Not Sure Where to Start?</h1>
            <p>
              No worries — we've got you. Whether you're new to ESG or looking
              to deepen your impact, our Learning Hub is your go-to resource.
              <br /> Explore everything from beginner-friendly ESG 101s to
              in-depth toolkits, case studies, and real-world success stories.
              It's all designed to help companies and NGOs take meaningful steps
              — at your own pace, on your own terms.
            </p>

            <h3>Overview:</h3>

            <p>
              Enable Good is a purpose-driven platform connecting companies and
              NGOs through transparent, strategic ESG partnerships. By
              streamlining discovery, alignment, and certification, it helps
              businesses achieve sustainability goals while amplifying NGO
              impact. The platform blends joyful design, storytelling, and
              user-centered tools to inspire trust, action, and lasting change.
            </p>
          </div>

          {/* Right Side */}
          <div className="col-12 col-md-6">
            <div className="learn-hero-video-wrapper">
              {!playVideo ? (
                <>
                  <img
                    src="/src/assets/images/learn-hero-img.png"
                    alt="Learn hero image"
                    className="learn-hero-img"
                  />
                  <div
                    className="video-overlay-banner"
                    onClick={() => setPlayVideo(true)}
                  >
                    <span>New here? Let's dive in.</span>
                    <i className="fa-solid fa-circle-play"></i>
                  </div>
                </>
              ) : (
                <div className="video-container">
                  <iframe
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/MLpWrANjFbI?autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <button
                    className="close-video-btn"
                    onClick={() => setPlayVideo(false)}
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
