import { Link } from "react-router-dom";
import ProjectsFilter from "../../components/ui/ProjectsFilter";
import styles from "./Explore.module.css";

export default function Explore() {
  return (
    <section className={styles["explore-page-section"]}>
      <div className="container-90">
        <div className={styles["explore-headings"]}>
          <h1>Good Things Happen When We Team Up</h1>
          <p className={`${styles["explore-subtitle"]} w-md-50`}>
            From planting forests to empowering communities — explore real
            stories of companies and NGOs making impact happen, together.
          </p>
        </div>

        <div className={styles["video-slider-overlay-wrapper"]}>
          <ProjectsFilter variant="unauthorized" />
        </div>

        <div className={`${styles["custom-marketing"]} text-center`}>
          <h3 className="mb-4">Got a project in mind? </h3>
          <p>
            Or just curious how you could team up for good? Let's explore what's
            possible — together.
          </p>
          <div className="d-flex justify-content-center mt-4">
            <Link className={styles["learn-more-link"]} to="/learn-more">
              Learn More
            </Link>

            <Link className={`${styles["join-now-btn"]} text-decoration-none`} to="/onboarding/role">
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
