import { useState } from "react";
import styles from "./CompanyProfile.module.css";
import { Link } from "react-router-dom";
import PopupOverlay from "../../components/ui/PopupOverlay";

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

const focusAreas = [
  {
    title: "HUMAN RIGHTS",
    description:
      "We advocate for social justice and inclusive policies that uphold human dignity, protect vulnerable populations, and ensure equitable access to resources.",
    bgColor: "#086A75",
  },
  {
    title: "ENVIRONMENT",
    description:
      "We support communities in building resilience for climate change, conserving ecosystems, and promoting sustainable practices through local innovation.",
    bgColor: "#F6DED4",
    textColor: "#000",
  },
  {
    title: "CLIMATE JUSTICE",
    description:
      "Climate change affects the most vulnerable first. We work to ensure that marginalized communities have a voice in climate decisions and access to resources.",
    bgColor: "#CEEFC2",
    textColor: "#000",
  },
  {
    title: "EDUCATION",
    description:
      "From early childhood learning to adult literacy, we create access to quality education that empowers people to change their future.",
    bgColor: "#F3E391",
    textColor: "#000",
  },
  {
    title: "FOOD SECURITY",
    description:
      "We tackle hunger by promoting sustainable agriculture, improving nutrition, and strengthening food systems in crisis-affected regions.",
    bgColor: "#F47D6A",
  },
  {
    title: "HEALTH & WELLBEING",
    description:
      "We provide essential health services, reproductive care, and hygiene education, focusing on the unique needs of women and girls.",
    bgColor: "#012960",
  },
];

export default function CompanyProfile() {
  const [activeTab] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className={styles["compy-page-section"]}>
      <div className="container-90">
        <div className="row g-3 mt-5">
          <div className="col-12 col-md-6">
            <div className="container-80">
              <div className="d-flex justify-content-center align-items-end">
                <img
                  src="/src/assets/images/company-logo-circle.png"
                  alt="Company Logo"
                  className={styles["company-logo"]}
                />
                <img
                  src="/src/assets/images/golden-badge.png"
                  alt="Golden Bagde"
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

                <i
                  className={`fa-solid fa-calendar-day ${styles["calendar-logo"]}`}
                  onClick={() => setShowPopup(true)}
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
              <div className="d-flex gap-4 mt-4">
                <button
                  className={`${styles["contact-btn"]} ${styles["btn-fnc"]}`}
                  onClick={() => setShowPopup(true)}
                >
                  Contact
                </button>
                <button
                  className={`${styles["follow-btn"]} ${styles["btn-fnc"]}`}
                  onClick={() => setShowPopup(true)}
                >
                  Follow
                </button>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 mb-5 mb-md-0">
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

        {/* Focus Areas Section */}
        <div className="row mt-md-3">
          <div className="col-12">
            <div className={styles["focus-section"]}>
              <div className="container-90">
                {/* Navigation Tabs */}

                <div className={styles["nav-tabs-container"]}>
                  {navTabs.map((tab, index) => (
                    <button
                      key={index}
                      className={`${styles["nav-tab-btn"]} ${
                        activeTab === index ? styles["nav-tab-active"] : ""
                      }`}
                      onClick={() => setShowPopup(true)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Area */}
              <div className={styles["focus-content"]}>
                <h2 className={styles["focus-title"]}>Our Key Focus Areas</h2>
                <p className={styles["focus-subtitle"]}>
                  We work across diverse sectors to address the root causes of
                  poverty and create lasting change.
                </p>

                {/* Focus Area Cards */}
                <div className="row g-4 mt-4">
                  {focusAreas.map((area, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-4">
                      <div
                        className={styles["focus-card"]}
                        style={{
                          backgroundColor: area.bgColor,
                          color: area.textColor || "#fff",
                        }}
                      >
                        <h3 className={styles["focus-card-title"]}>
                          {area.title}
                        </h3>
                        <p className={styles["focus-card-desc"]}>
                          {area.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["video-slider-overlay-wrapper"]}>
          {/* Key Performance Indicators Card */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="container-90">
                <div className={styles["kpi-card"]}>
                  <h2 className={styles["kpi-title"]}>
                    Key Performance Indicators
                  </h2>

                  <div className={styles["kpi-item"]}>
                    <div className={styles["kpi-icon"]}>
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div className={styles["kpi-content"]}>
                      <h3 className={styles["kpi-heading"]}>
                        Women-led initiatives supported
                      </h3>
                      <p className={styles["kpi-text"]}>
                        78% of our development programs are led or co-designed
                        by women in local communities.
                      </p>
                    </div>
                  </div>

                  <div className={styles["kpi-item"]}>
                    <div className={styles["kpi-icon"]}>
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div className={styles["kpi-content"]}>
                      <h3 className={styles["kpi-heading"]}>
                        Access to essential services
                      </h3>
                      <p className={styles["kpi-text"]}>
                        Over 12 million people gained access to clean water,
                        healthcare, or education in the past year.
                      </p>
                    </div>
                  </div>

                  <div className={styles["kpi-item"]}>
                    <div className={styles["kpi-icon"]}>
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div className={styles["kpi-content"]}>
                      <h3 className={styles["kpi-heading"]}>
                        Local partnerships established
                      </h3>
                      <p className={styles["kpi-text"]}>
                        CARE collaborates with 1250+ local organizations to
                        ensure sustainable community-driven impact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles["custom-marketing"]} text-center`}>
          <h3 className="mb-4">To see more, join our community</h3>
          <p>
            Or just curious how you could team up for good? Let's explore what's
            possible — together.
          </p>
          <div className="d-flex justify-content-center mt-4">
            <Link className={styles["learn-more-link"]} to="/learn-more">
              Learn More
            </Link>

            <Link
              className={`${styles["join-now-btn"]} text-decoration-none`}
              to="/onboarding/role"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>

      {showPopup && (
        <PopupOverlay show={showPopup} onClose={() => setShowPopup(false)} />
      )}
    </section>
  );
}
