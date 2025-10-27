// Second Cards landing page section
import styles from "../../pages/landingPage/LandingPage.module.css";
import { Link } from "react-router-dom";

export default function SecondCards() {
  return (
    <section className={styles["second-section"]}>
      <div className={styles["landing-container"]}>
        <div className={styles["landing-headings"]}>
          <h2>Simplifying Corporate - NGO Partnerships</h2>
          <p>
            We provide all the tools you need to discover, establish, and manage
            impactful partnerships while meeting your ESG goals
          </p>
        </div>

        <div className="row g-3">
          <div className="col-12 col-md-3">
            <div className={`${styles["first-cards"]} row`}>
              <div className="col-12 mb-3">
                <div className={`card ${styles["card-teal-bg"]}`}>
                  <div className="card-body">
                    <h5 className="card-title w-75">Intelligent Matching</h5>
                    <p className="card-text">
                      Connect with NGOs aligned to your ESG values and
                      sustainable development goals
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                      <Link
                        className={`${styles["learn-more-button"]} text-decoration-none text-center`}
                        to="/learn-more"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className={`card ${styles["card-yellow-bg"]}`}>
                  <div className="card-body w-75">
                    <p className="card-text">Global & Local Impact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className={`card h-100 ${styles["middle-cards"]}`}>
              <img
                src="/images/landing-page-1.png"
                className="card-img-top"
                alt="Tiered Certification image"
              />
              <div className="card-body">
                <h5 className="card-title w-75">Tiered Certification</h5>
                <p className="card-text w-75">
                  Bronze, Silver, and Gold certification levels for transparency
                  and credibility
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className={`card h-100 ${styles["middle-cards"]}`}>
              <img
                src="/images/landing-page-2.png"
                className="card-img-top"
                alt="Tiered Certification image"
              />
              <div className="card-body">
                <h5 className="card-title">End-to-End ESG Management</h5>
                <p className="card-text">
                  Tools for reporting, collaborating, and integrating ESG data
                  into financial statements
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className={`${styles["second-cards"]} row`}>
              <div className="col-12">
                <div className={`card ${styles["card-teal-bg"]}`}>
                  <div className="card-body">
                    <h5 className="card-title">End-to-End ESG Management</h5>
                    <p className="card-text">
                      Tools for reporting, collaborating, and integrating ESG
                      data into financial statement
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                      <Link
                        className={`${styles["learn-more-button"]} text-decoration-none text-center`}
                        to="/learn-more"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 mb-3">
                <div className={`card ${styles["card-yellow-bg"]}`}>
                  <div className="card-body">
                    <p className="card-text">Streamlined Compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
