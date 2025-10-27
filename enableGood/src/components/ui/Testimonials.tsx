import { useState } from "react";
import type { Testimonial } from "../../types/types";
import styles from "../../pages/landingPage/LandingPage.module.css";
import "../../styles/Testimonials.css";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="testimonials-section">
      <div className="container-80">
        <div className={`${styles["landing-headings"]} pb-4`}>
          <h2>What our Partners Say</h2>
          <p>
            Hear from companies and NGOs that have created meaningful impact
            through Enable Good
          </p>
        </div>
      </div>

      <div className="wrapper-testimonials">
        {/* Testimonials Carousel */}
        <div className="testimonials-carousel">
          {/* Mobile Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18l6-6-6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="testimonial-container">
            <div
              className="testimonial-track"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-slide">
                  <div className="row">
                    {/* Left side - Quote and Author */}
                    <div className="col-12 col-md-8">
                      <div className="testimonial-content">
                        <blockquote className="testimonial-quote">
                          {testimonial.quote}
                        </blockquote>

                        <div className="testimonial-desc">
                          {testimonial.description}
                        </div>

                        <div className="testimonial-author">
                          <div className="author-info">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="author-avatar"
                            />
                            <div className="author-details">
                              <h5 className="author-name">
                                {testimonial.name}
                              </h5>
                              <p className="author-position">
                                {testimonial.position}, {testimonial.company}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right side - Statistic (if available) */}
                    {testimonial.statistic && (
                      <div className="col-12 col-lg-4">
                        <div className="testimonial-statistic">
                          <div className="statistic-circle">
                            <div className="statistic-value">
                              {testimonial.statistic.value}
                            </div>
                            <div className="statistic-label">
                              {testimonial.statistic.label}
                            </div>
                            <img
                              src="/src/assets/images/testimonials-circles.png"
                              alt="Design circles"
                              className="testimonials-circle-design"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="carousel-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${currentSlide === index ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
