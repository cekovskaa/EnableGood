import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../VerificationSteps.module.css";
import "../../../styles/AccountStyles.css";
import goldenBadge from "../../../assets/images/golden-badge.png";

const VerificationThirdStep: React.FC = () => {
  const navigate = useNavigate();

  const handleToDashboard = () => {
    navigate("/dashboard");
  };

  const handleShareBadge = () => {
    // Handle share badge functionality
    console.log("Share badge clicked");
  };

  const benefits = [
    "Fast-track NGO introductions",
    "Dashboard analytics and insights",
    "Co-branding opportunities",
    "Exclusive CSR newsletters",
    "Early access to flagship programs",
    "Priority customer support",
  ];

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

      {/* Progress Bar Section */}
      <div className={styles["progress-section"]}>
        <div className={styles["progress-bar-container"]}>
          <div className={styles["progress-bar"]}>
            <div
              className={styles["progress-fill"]}
              style={{ width: "100%" }}
            ></div>
          </div>
          <div className={styles["progress-labels"]}>
            <p className={`${styles["progress-label"]} ${styles["active"]}`}>
              Upload Your Documentation
            </p>
            <p className={`${styles["progress-label"]} ${styles["active"]}`}>
              Expert Review
            </p>
            <p className={`${styles["progress-label"]} ${styles["active"]}`}>
              Earn Your Badge & Unlock Benefits
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles["main-content-container"]} mt-5 pt-3`}>
        {/* Main Content */}
        <div className="row mb-2">
          <div className="col-12">
            <div className={styles["congratulations-section"]}>
              <h2 className={styles["congratulations-title"]}>
                Congratulations—You've Earned Your Gold Badge!
              </h2>
              <p className={styles["congratulations-subtitle"]}>
                Your commitment to transparency is now recognized.
              </p>
            </div>
          </div>
        </div>

        {/* Badge and Description */}
        <div className="row mb-3">
          <div className="col-12 col-md-2 d-flex justify-content-center align-items-start mb-4 mb-md-0">
            <img
              src={goldenBadge}
              alt="Gold Badge"
              className={styles["gold-badge-image"]}
            />
          </div>
          <div className="col-12 col-md-10">
            <p className={styles["badge-description"]}>
              Having earned the Gold badge, your company is now recognized as an
              industry leader in transparency and ethical practice, instantly
              building trust with NGOs and corporate peers. You'll receive
              priority access to flagship projects, exclusive co-branding
              opportunities, and tailored CSR insights to amplify your impact.
              Your badge will remain on your profile as long as your disclosures
              are up to date.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="row mb-3">
          <div className="col-12">
            <h3 className={styles["benefits-title"]}>Your Benefits</h3>
          </div>
        </div>

        <div className="row mb-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="col-12 col-md-2 mb-3">
              <div className={styles["benefit-card"]}>{benefit}</div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="row">
          <div className="col-12">
            <div className={styles["final-buttons"]}>
              <button
                className={styles["dashboard-button"]}
                onClick={handleToDashboard}
              >
                Back to Dashboard
              </button>
              <button
                className={styles["share-button"]}
                onClick={handleShareBadge}
              >
                Share your Badge
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationThirdStep;
