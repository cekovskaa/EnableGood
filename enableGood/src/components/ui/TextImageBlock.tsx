import React from "react";
import type { ContentBlockProps } from "../../types/types";

const ContentBlock: React.FC<ContentBlockProps> = ({
  heading,
  content,
  imageSrc,
  imageAlt,
  imageClassName,
  imageOnRight = true,
  className = "",
}) => {
  return (
    <div
      className={`row d-flex justify-content-center align-items-center g-5 ${className}`}
    >
      {/* Text Content Column */}
      <div
        className={`col-12 col-md-7 ${
          imageOnRight ? "order-md-1" : "order-md-2"
        }`}
      >
        <div className="content-text">
          <h2 className="content-heading mb-5">{heading}</h2>
          <div className="content-body">{content}</div>
        </div>
      </div>

      {/* Image Column */}
      <div
        className={`col-12 col-md-5 ${
          imageOnRight ? "order-md-2" : "order-md-1"
        }`}
      >
        <div className="content-image">
          <img
            src={imageSrc}
            alt={imageAlt}
            className={imageClassName}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentBlock;
