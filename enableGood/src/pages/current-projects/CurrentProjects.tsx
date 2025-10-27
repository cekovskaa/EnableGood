import styles from "./CurrentProjects.module.css";
import "../../styles/AccountStyles.css";
import DonutChart from "../../components/statistics/DonutChart";
import { projects } from "../../data/new-projects";
import ProjectCard from "./ ProjectCard";
import { Link } from "react-router-dom";

export default function CurrentProjects() {
  return (
    <div className="general-section">
      <div className="row mb-0 mb-md-4">
        <div className="col-12">
          <div className="general-heading">
            <h1 className="general-title">
              <i className="fa-solid fa-briefcase me-2"></i> Current projects
            </h1>
            <div className="general-icons">
              <div className="notification-wrapper">
                <i className="fa-solid fa-bell"></i>
                <span className="notification-badge"></span>
              </div>
              <Link className="text-decoration-none ms-3" to="/messages">
                <i className="fa-regular fa-message message-icon"></i>
              </Link>
            </div>
          </div>

          {/* Notification Messages Panel */}
          <div className="notifications-panel">
            <div className="notification-item">
              <div className="notification-indicator"></div>
              <div className="notification-avatar">
                <img
                  src="/src/assets/images-account/add-img3.png"
                  alt="Porsche"
                />
              </div>
              <div className="notification-content">
                <span className="notification-name">Porsche</span>
                <span className="notification-text">messaged you!</span>
              </div>
            </div>

            <div className="notification-item">
              <div className="notification-indicator"></div>
              <div className="notification-avatar">
                <img
                  src="/src/assets/images-account/new-projects2.png"
                  alt="Green Roots"
                />
              </div>
              <div className="notification-content">
                <span className="notification-name">Green Roots</span>
                <span className="notification-text">
                  project has made progress!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["projects-container"]}>
        {/* Left side - Ongoing projects and New open projects */}
        <div className={styles["left-section"]}>
          {/* Ongoing projects progress */}
          <div className={styles["card"]}>
            <h3 className={styles["card-title"]}>Ongoing projects progress</h3>

            <div className={styles["project-item"]}>
              <div className={styles["project-header"]}>
                <span className={styles["project-name"]}>Pathways Out</span>
                <span className={styles["tag"]} data-tag="no-poverty">
                  <i className="fa-solid fa-star me-1"></i> No poverty
                </span>
              </div>
              <div className="d-flex align-items-center">
                <span className={styles["progress-text"]}>20%</span>
                <div className={styles["progress-bar"]}>
                  <div
                    className={styles["progress-fill"]}
                    style={{ width: "20%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className={styles["project-item"]}>
              <div className={styles["project-header"]}>
                <span className={styles["project-name"]}>
                  BrightMind Alliance
                </span>
                <span className={styles["tag"]} data-tag="quality-education">
                  <i className="fa-solid fa-star me-1"></i> Quality Education
                </span>
              </div>
              <div className="d-flex align-items-center">
                <span className={styles["progress-text"]}>60%</span>
                <div className={styles["progress-bar"]}>
                  <div
                    className={styles["progress-fill"]}
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className={styles["project-item"]}>
              <div className={styles["project-header"]}>
                <span className={styles["project-name"]}>
                  EarthPulse Movement
                </span>
                <span className={styles["tag"]} data-tag="climate-action">
                  <i className="fa-solid fa-star me-1"></i> Climate Action
                </span>
              </div>
              <div className="d-flex align-items-center">
                <span className={styles["progress-text"]}>20%</span>
                <div className={styles["progress-bar"]}>
                  <div
                    className={styles["progress-fill"]}
                    style={{ width: "20%" }}
                  ></div>
                </div>
              </div>
            </div>

            <a href="#" className={styles["see-all-link"]}>
              See all projects →
            </a>
          </div>

          {/* New open projects */}
          <div className={styles["card"]}>
            <h3 className={styles["card-title"]}>New open projects</h3>

            <div className={styles["project-grid"]}>
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  imageSrc={project.imageSrc}
                  tagText={project.tagText}
                  tagClass={project.tagClass}
                  title={project.title}
                  description={project.description}
                />
              ))}
            </div>
            <Link className={styles["see-all-link"]} to="/explore">
              {" "}
              See all new projects →
            </Link>
          </div>
        </div>

        {/* Right side - Statistics */}
        <div className={styles["right-section"]}>
          <DonutChart className="d-flex flex-column" />
        </div>
      </div>
    </div>
  );
}
