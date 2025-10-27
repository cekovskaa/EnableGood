import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import type { Project } from "../../types/types";
import styles from "./ProjectOverview.module.css";
import "../../styles/AccountStyles.css";
import PhotoShowcase from "../../components/ui/PhotoShowcase";

export default function ProjectOverview() {
  const location = useLocation();
  const project: Project = location.state?.project;

  if (!project) {
    return (
      <div className="general-section">
        <div className="container-90">
          <div className="text-center">
            <h1>Project Not Found</h1>
            <p>The project you're looking for doesn't exist.</p>
            <Link to="/explore" className="btn btn-primary">
              Back to Explore
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="general-section">
      {/* Heading Row */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="general-heading">
            <h1 className="general-title">
              <i className="fa-solid fa-th me-2"></i>Project overview
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

      {/* Main Content */}
      <div className={styles["main-content"]}>
        <div className="row g-4">
          {/* Left Column - Project Info */}
          <div className="col-12 col-md-6">
            <div className={styles["info-section"]}>
              <h2 className={styles["project-title"]}>{project.title}</h2>

              {/* Location */}
              {project.location && (
                <div className={styles["info-group"]}>
                  <div className={styles["info-label"]}>Location:</div>
                  <div className={styles["info-value"]}>{project.location}</div>
                </div>
              )}

              {/* Dates */}
              {project.startDate && (
                <div className={styles["info-group"]}>
                  <div className={styles["info-label"]}>
                    Start Date: {project.startDate}
                  </div>
                  <div className={styles["info-value"]}>
                    Estimated Completion: {project.estimatedCompletion || "TBD"}
                  </div>
                </div>
              )}

              {/* Team Contacts */}
              {project.teamContacts && project.teamContacts.length > 0 && (
                <div className={styles["info-group"]}>
                  <div className={styles["info-label"]}>Team Contacts:</div>
                  <div className={styles["contacts-list"]}>
                    {project.teamContacts.map((contact, index) => (
                      <div key={index} className={styles["contact-item"]}>
                        {contact.name}, {contact.role} – {contact.organization}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Documents & Avatars */}
              <div className={styles["documents-section"]}>
                <span className={styles["documents-label"]}>
                  Documents & Reports
                </span>
                <button className={styles["download-button"]}>
                  <i className="fa-solid fa-download"></i>
                </button>
              </div>

              {/* Contact NGO Button */}
              <Link
                className={`${styles["contact-button"]} text-decoration-none text-center`}
                to={"/partnership-page"}
              >
                Contact NGO
              </Link>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="col-12 col-md-6">
            <div className={styles["hero-image-container"]}>
              <img
                src={project.heroImage}
                alt={project.title}
                className={styles["hero-image"]}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Organization Cards Section */}
      <div className={styles["organizations-section"]}>
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <div className={`${styles["org-card"]} ${styles["org-card-teal"]}`}>
              <h3 className={styles["org-title"]}>Care organization</h3>
              <p className={styles["org-description"]}>
                Empowering communities to lift themselves out of poverty.
              </p>
              <div className="d-flex justify-content-end">
                <Link to="/profile-page" className={styles["org-button"]}>
                  View Profile
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className={`${styles["org-card"]} ${styles["org-card-navy"]}`}>
              <h3 className={styles["org-title"]}>Starbucks corporation</h3>
              <p className={styles["org-description"]}>
                Committed to ethical sourcing and sustainability in every cup.
              </p>
              <div className="d-flex justify-content-end">
                <Link to="/profile-page" className={styles["org-button"]}>
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Overview Section */}
      <div className={styles["overview-section"]}>
        <h2 className={styles["section-title"]}>Project Overview</h2>
        <p className={styles["overview-text"]}>{project.overview}</p>
      </div>

      {/* Goals & Objectives Section */}
      <div className={styles["goals-section"]}>
        <div className="row align-items-center">
          <div className="col-12 col-lg-7">
            <h2 className={styles["section-title"]}>Goals & Objectives</h2>

            <div className={styles["goals-list"]}>
              <div className={styles["goal-item"]}>
                <div className={styles["goal-icon"]}>
                  <i className="fa-solid fa-check"></i>
                </div>
                <div className={styles["goal-text"]}>
                  Train 10,000 farmers in climate-smart agricultural techniques
                </div>
              </div>

              <div className={styles["goal-item"]}>
                <div className={styles["goal-icon"]}>
                  <i className="fa-solid fa-check"></i>
                </div>
                <div className={styles["goal-text"]}>
                  Introduce agroforestry practices across 2,000 hectares of
                  farmland
                </div>
              </div>

              <div className={styles["goal-item"]}>
                <div className={styles["goal-icon"]}>
                  <i className="fa-solid fa-check"></i>
                </div>
                <div className={styles["goal-text"]}>
                  Improve soil health and water retention through regenerative
                  farming
                </div>
              </div>

              <div className={styles["goal-item"]}>
                <div className={styles["goal-icon"]}>
                  <i className="fa-solid fa-check"></i>
                </div>
                <div className={styles["goal-text"]}>
                  Promote female leadership in farming communities
                </div>
              </div>

              <div className={styles["goal-item"]}>
                <div className={styles["goal-icon"]}>
                  <i className="fa-solid fa-check"></i>
                </div>
                <div className={styles["goal-text"]}>
                  Establish local resource centers for farming education and
                  seed banks
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className={styles["circle-image-container"]}>
              <img
                src="/src/assets/images/image3-circle.png"
                alt="Farmers"
                className={styles["circle-image"]}
              />
              <div className={styles["circle-overlay"]}>
                <img
                  src="/src/assets/images/vector3.png"
                  alt=""
                  className={styles["vector-image"]}
                />
                <div className={styles["overlay-content"]}>
                  <div className={styles["percentage"]}>58%</div>
                  <div className={styles["location-text"]}>South America</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className={styles["statistics-section"]}>
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div
              className={`${styles["stat-card"]} ${styles["stat-card-yellow"]} text-decoration-none`}
            >
              <div className={styles["stat-number"]}>3,200</div>
              <div className={styles["stat-label"]}>Farmers Trained</div>
              <div className={styles["stat-description"]}>
                Local coffee growers are gaining hands-on skills in sustainable
                and climate-smart farming methods.
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div
              className={`${styles["stat-card"]} ${styles["stat-card-red"]} text-decoration-none`}
            >
              <div className={styles["stat-number"]}>870 ha</div>
              <div className={styles["stat-label"]}>
                Land Converted to Sustainable Practices
              </div>
              <div className={styles["stat-description"]}>
                Farming areas are being restored using techniques that improve
                soil health and biodiversity.
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div
              className={`${styles["stat-card"]} ${styles["stat-card-green"]} text-decoration-none`}
            >
              <div className={styles["stat-number"]}>15</div>
              <div className={styles["stat-label"]}>
                Training Hubs Established
              </div>
              <div className={styles["stat-description"]}>
                Local resource centers are enabling continuous learning, seed
                distribution, and peer-to-peer support.
              </div>
            </div>
          </div>
        </div>
      </div>

      <PhotoShowcase />
    </div>
  );
}
