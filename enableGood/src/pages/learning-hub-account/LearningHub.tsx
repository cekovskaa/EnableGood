import styles from "./LearningHub.module.css";

import LearnHero from "../../components/ui/LearnHero";
import PathFilters from "../../components/ui/PathFilters";
import VideoSlider from "../../components/ui/VideoSlider";
import { Link } from "react-router-dom";

export default function LearningHub() {
  return (
    <div className="general-section">
      {/* Heading Row */}
      <div className={styles["learninghub-container"]}>
        <div className="row mb-4">
          <div className="col-12">
            <div className="general-heading">
              <h1 className="general-title">
                <i className="fa-solid fa-graduation-cap me-2"></i> Learning Hub
              </h1>
              <div className="general-icons">
                <i className="fa-solid fa-bell"></i>
                <Link className="text-decoration-none ms-3" to="/messages">
                  <i className="fa-regular fa-message message-icon"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LearnHero containerClass="wrapper-85" />
      <div className="mt-3">
        <PathFilters containerClass="wrapper-85" />
      </div>
      <div className="ps-1 ps-md-4">
        <div className={styles["slider-header"]}>
          <h2>Recommended for You</h2>
          <p>Bite-sized articles</p>
        </div>
        <VideoSlider isClickable={true} />
      </div>
    </div>
  );
}
