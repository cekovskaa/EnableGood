import { useState } from "react";
import type { CarouselProps } from "../../types/types";
import ProjectCard from "./ProjectCard";
import "../../styles/ProjectsFilter.css";

export default function ProjectCarousel({
  items,
  variant,
  onProjectClick,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3; // Show 3 cards at once for authorized
  const maxIndex = Math.max(0, items.length - itemsPerView);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerView);

  if (variant === "unauthorized") {
    // For unauthorized, show the original scrollable grid
    return (
      <div className="projects-grid">
        {items.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            variant="unauthorized"
            isClickable={false}
          />
        ))}
      </div>
    );
  }

  // For authorized, show carousel with navigation
  return (
    <div className="project-carousel-container">
      <button
        className="carousel-btn carousel-btn-left"
        onClick={goToPrevious}
        disabled={currentIndex === 0}
        aria-label="Previous projects"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <div className="project-carousel">
        {visibleItems.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            variant="authorized"
            isClickable={true}
            onClick={onProjectClick}
          />
        ))}
      </div>

      <button
        className="carousel-btn carousel-btn-right"
        onClick={goToNext}
        disabled={currentIndex >= maxIndex}
        aria-label="Next projects"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
}
