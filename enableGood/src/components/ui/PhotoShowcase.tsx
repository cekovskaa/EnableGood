import React from "react";
import "../../styles/PhotoShowcase.css";

const PhotoShowcase: React.FC = () => {
  return (
    <section className="photo-showcase">
      <div className="photo-showcase-header">
        <h1 className="photo-showcase-title">The 10 most impactful photos</h1>
        <p className="photo-showcase-subtitle">
          from CARE's 2024 global image library
        </p>
      </div>

      <div className="photo-showcase-grid">
        <div className="photo-showcase-item">
          <img
            src="/src/assets/images-account/photo-showcase1.png"
            alt="Child portrait"
            className="photo-showcase-image"
          />
        </div>
        <div className="photo-showcase-item">
          <img
            src="/src/assets/images-account/photo-showcase2.png"
            alt="Woman with children"
            className="photo-showcase-image"
          />
        </div>
        <div className="photo-showcase-item">
          <img
            src="/src/assets/images-account/photo-showcase3.png"
            alt="Couple sharing meal"
            className="photo-showcase-image"
          />
        </div>
        <div className="photo-showcase-item">
          <img
            src="/src/assets/images-account/photo-showcase4.png"
            alt="Young student"
            className="photo-showcase-image"
          />
        </div>
      </div>
    </section>
  );
};

export default PhotoShowcase;
