import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./VerificationSteps.module.css";
import "../../styles/AccountStyles.css";

const VerificationSteps: React.FC = () => {
  const navigate = useNavigate();

  const handleStartVerification = () => {
    // Navigate to the first step of verification process
    navigate("/verification/first-step");
  };

  return (
    <div className="general-section">
      {/* Heading Row */}

      <div className={styles["verification-container"]}>
        <div className="row mb-4">
          <div className="col-12">
            <div className="general-heading">
              <h1 className="general-title">
                <i className="fa-regular fa-id-card me-2"></i> Verification
                steps
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
        <div className="row">
          {/* Left Side - Steps */}
          <div className="col-12 col-md-7">
            <div className={styles["steps-section"]}>
              {/* Step 1 */}
              <div className={styles["step-item"]}>
                <div className={styles["step-number"]}>1</div>
                <div className={styles["step-content"]}>
                  <h3 className={styles["step-title"]}>Why should I verify?</h3>
                  <p className={styles["step-text"]}>
                    Verifying your company on{" "}
                    <span className="fw-bold">Enable Good</span> signals to NGOs
                    and fellow corporate partners that you're serious about
                    transparency and impact. Through a simple upload of
                    compliance documents and ESG reports, you'll earn a Bronze,
                    Silver, or Gold certification badge that appears on your
                    profile—no more wondering whether a partner walks the talk.
                    These tiered credentials build instant credibility,
                    unlocking priority access to high-impact projects and
                    streamlined collaboration. In today's competitive ESG
                    landscape, a verified badge isn't just a symbol—it's your
                    passport to trusted, lasting partnerships.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className={styles["step-item"]}>
                <div className={styles["step-number"]}>2</div>
                <div className={styles["step-content"]}>
                  <h3 className={styles["step-title"]}>
                    How do I get a certification badge?
                  </h3>
                  <p className={styles["step-text"]}>
                    When you complete the verification process—submitting your
                    ESG policies, financial statements, and impact reports—our
                    platform automatically evaluates your commitment to
                    transparency and ethical practice. Based on this review,
                    you'll be awarded a{" "}
                    <span className="fw-bold">
                      Bronze, Silver, or Gold certification
                    </span>{" "}
                    badge that's displayed prominently on your profile page.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className={styles["step-item"]}>
                <div className={styles["step-number"]}>3</div>
                <div className={styles["step-content"]}>
                  <h3 className={styles["step-title"]}>
                    Why should I want a higher badge?
                  </h3>
                  <p className={styles["step-text"]}>
                    This tiered system not only demonstrates your adherence to
                    industry best practices, but also fast-tracks your access to
                    premium partnership opportunities with NGOs and fellow
                    corporates. As you climb from Bronze to Gold, you signal an
                    ever-stronger level of trustworthiness, making other
                    organizations far more likely to choose you as a
                    collaborative partner. Ultimately, verification and
                    certification work hand-in-hand to guarantee that every
                    match you make is built on a foundation of accountability
                    and credibility.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Certification Tiers */}
          <div className="col-12 col-md-5 h-75">
            <div className={styles["certification-section"]}>
              <h3 className={styles["certification-title"]}>
                Certification Tiers
              </h3>

              {/* Gold Card */}
              <div className={styles["certification-card"]}>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3">
                    <div className={styles["medal-container"]}>
                      <img
                        src="/src/assets/images/golden-badge.png"
                        alt="Gold certification badge"
                        className={styles["medal-image"]}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-9">
                    <p className={styles["certification-text"]}>
                      <strong>Gold</strong> - Represents the pinnacle of ethical
                      practice with regular audits and robust, ongoing impact
                      metrics, instantly earning you priority access to flagship
                      projects and top-tier co-branding opportunities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Silver Card */}
              <div className={styles["certification-card"]}>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3">
                    <div className={styles["medal-container"]}>
                      <img
                        src="/src/assets/images/badge-silver.png"
                        alt="Silver certification badge"
                        className={styles["medal-image"]}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-9">
                    <p className={styles["certification-text"]}>
                      <strong>Silver</strong> - Showcases your deeper commitment
                      through comprehensive impact reports and measurable
                      outcomes, positioning you as a results-driven collaborator
                      in the ESG community.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bronze Card */}
              <div className={styles["certification-card"]}>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3">
                    <div className={styles["medal-container"]}>
                      <img
                        src="/src/assets/images/badge-bronze.png"
                        alt="Bronze certification badge"
                        className={styles["medal-image"]}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-9">
                    <p className={styles["certification-text"]}>
                      <strong>Bronze</strong> - Demonstrates your company's
                      foundational transparency by verifying essential ESG
                      policies and financial statements, signaling reliability
                      for introductory NGO partnerships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Start Button */}
          <div className={styles["start-button-container"]}>
            <button
              className={styles["start-button"]}
              onClick={handleStartVerification}
            >
              Start now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationSteps;
