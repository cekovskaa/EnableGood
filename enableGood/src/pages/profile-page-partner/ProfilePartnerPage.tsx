import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/AccountStyles.css";
import styles from "./ProfilePartnerPage.module.css";
import OurWorkContent from "./nav-tab-contents/OurWorkContent";
import PartnersContent from "./nav-tab-contents/PartnersContent";
import ProjectsContent from "./nav-tab-contents/ProjectsContent";
import NewsStoriesContent from "./nav-tab-contents/NewsStoriesContent";
import AboutUsContent from "./nav-tab-contents/AboutUsContent";

const tags = [
  "Human Rights",
  "Environment",
  "Climate Justice",
  "Education",
  "Food Security",
];

const navTabs = [
  "Our Work",
  "Partners",
  "Projects",
  "News & Stories",
  "About Us",
];

export default function ProfilePartnerPage() {
  const [activeTab, setActiveTab] = useState(0);

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <OurWorkContent />;
      case 1:
        return <PartnersContent />;
      case 2:
        return <ProjectsContent />;
      case 3:
        return <NewsStoriesContent />;
      case 4:
        return <AboutUsContent />;
      default:
        return <OurWorkContent />;
    }
  };

  return (
    <div className="general-section">
      <div className={styles["profile-header-container"]}>
        {/* Heading Row */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="general-heading">
              <h1 className="general-title">
                <i className="fa-solid fa-th me-2"></i>CARE /
                {navTabs[activeTab]}
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

      <div className="container-90">
        <div className="row g-3 mt-5">
          <div className="col-12 col-md-6">
            <div className="container-80">
              <div className="d-flex justify-content-center align-items-end">
                <img
                  src="/src/assets/images/company-logo-circle.png"
                  alt="Company Logo"
                  className={`${styles["company-logo"]} ${
                    activeTab === 1 ? styles["company-logo-bordered"] : ""
                  }`}
                />
                <img
                  src="/src/assets/images/golden-badge.png"
                  alt="Golden Badge"
                  className={styles["golden-badge"]}
                />
              </div>
              <div className=" mt-5 text-center">
                <p className={`${styles["company-desc"]} `}>
                  CARE is a global leader within a worldwide movement dedicated
                  to ending poverty. We are known everywhere for our unshakeable
                  commitment to the dignity of people.
                </p>
              </div>
              <div className="mt-5 d-flex align-items-center">
                <span className="me-3">Check availability</span>
                <Link to={"/calendar"}>
                  <i
                    className={`fa-solid fa-calendar-day ${styles["calendar-logo"]}`}
                  ></i>
                </Link>
              </div>
              <div className="d-flex gap-4 mt-4">
                <Link
                  className={`${styles["contact-btn"]} ${styles["btn-fnc"]} text-decoration-none text-center`}
                  to={"/partnership-page"}
                >
                  Contact
                </Link>

                <button
                  className={`${styles["follow-btn"]} ${styles["btn-fnc"]}`}
                >
                  Follow
                </button>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 mt-5 mt-md-0">
            {/* Blue stats box */}
            <div className={styles["stats-box"]}>
              <div className="row text-center">
                <div className="col-4">
                  <h3>1256</h3>
                  <p>Followers</p>
                </div>
                <div className="col-4">
                  <h3>156</h3>
                  <p>Partners</p>
                </div>
                <div className="col-4">
                  <h3>322</h3>
                  <p>Projects</p>
                </div>
              </div>
              <div className="row text-center">
                <div className="col-4">
                  <h3>93%</h3>
                  <p>Local staff</p>
                </div>
                <div className="col-4">
                  <h3>25M</h3>
                  <p>People supported</p>
                </div>
                <div className="col-4">
                  <h3>100+</h3>
                  <p>Countries</p>
                </div>
              </div>
            </div>

            <div
              className={`d-flex flex-wrap gap-3 mt-5 ${styles["tags-container"]}`}
            >
              {tags.map((tag, index) => (
                <span key={index} className={styles["info-tag"]}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="container-90">
              <div className={styles["nav-tabs-container"]}>
                {navTabs.map((tab, index) => (
                  <button
                    key={index}
                    className={`${styles["nav-tab-btn"]} ${
                      activeTab === index ? styles["nav-tab-active"] : ""
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="container">
          <div className="row mt-4">
            <div className="col-12">{renderTabContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
