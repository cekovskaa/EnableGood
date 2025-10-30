import { Link } from "react-router-dom";
import LearnHero from "../../components/ui/LearnHero";
import PathFilters from "../../components/ui/PathFilters";
import Testimonials from "../../components/ui/Testimonials";
import VideoSlider from "../../components/ui/VideoSlider";
import { testimonialsData } from "../../data/testimonials-data";
import styles from "./LearnMorePage.module.css";

const FourtSection = () => (
  <section className={styles["fourth-section"]}>
    <div className="row">
      <div className="col-12 col-md-6 bg-yellow px-0">
        <div className={styles["container-custom"]}>
          <h4 className="w-75">Ready to Put Your Learning Into Practice?</h4>
          <p className="w-75">
            Join impact Enable Good and be part of a growing community creating
            meaningful change through strategic partnerships.
          </p>
          <Link
            className={`${styles["btn-style"]} text-decoration-none`}
            to="/onboarding/role"
          >
            {" "}
            Join Now
          </Link>
        </div>
      </div>
      <div className="col-12 col-md-6 px-0">
        <img
          src="/images/learn-more2-img.png"
          alt="Learn More image"
          className={styles["fourth-section-img"]}
        />
      </div>
    </div>
  </section>
);

export default function LearnMorePage() {
  return (
    <section className={styles["learn-more-section"]}>
      <LearnHero />
      <PathFilters />
      <div className="slider-header">
        <h2>Recommended for You</h2>
        <p>Bite-sized articles</p>
        
      </div>
      <div className={styles["video-slider-overlay-wrapper"]}>
        <VideoSlider isClickable={false} />
      </div>
      <FourtSection />
      <Testimonials testimonials={testimonialsData} />
    </section>
  );
}
