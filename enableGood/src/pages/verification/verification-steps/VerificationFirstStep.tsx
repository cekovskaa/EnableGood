import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../VerificationSteps.module.css";
import "../../../styles/AccountStyles.css";

const VerificationFirstStep: React.FC = () => {
  const navigate = useNavigate();

  const handlePrevious = () => {
    navigate("/verification");
  };

  const handleNext = () => {
    navigate("/verification/second-step");
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

      {/* Progress Bar Section */}
      <div className={styles["progress-section"]}>
        <div className={styles["progress-bar-container"]}>
          <div className={styles["progress-bar"]}>
            <div
              className={styles["progress-fill"]}
              style={{ width: "33.33%" }}
            ></div>
          </div>
          <div className={styles["progress-labels"]}>
            <p className={`${styles["progress-label"]} ${styles["active"]}`}>
              Upload Your Documentation
            </p>
            <p className={styles["progress-label"]}>Expert Review</p>
            <p className={styles["progress-label"]}>
              Earn Your Badge & Unlock Benefits
            </p>
          </div>
        </div>
      </div>

      <div className={styles["main-content-container"]}>
        {/* Main Content */}
        <div className="row">
          {/* Left Column - Instructions */}
          <div className="col-12 col-md-7">
            <div className={styles["instructions-section"]}>
              <p className={styles["instruction-text"]}>
                <strong>
                  Gather and submit key compliance files <br />
                </strong>
                - ESG reports, audited financial statements, impact reports, and
                any legal or environmental certifications you hold.
              </p>
              <p className={styles["instruction-text"]}>
                <strong>
                  Consider also uploading <br />
                </strong>
                - sustainability roadmaps, code of conduct, board diversity
                statements, environmental impact assessments, and
                anti-corruption policies to bolster your submission.
              </p>
            </div>
          </div>

          {/* Right Column - Upload Section */}
          <div className="col-12 col-md-5">
            <div className={styles["upload-area"]}>
              <div className={styles["upload-content"]}>
                <i className="fa-solid fa-file-arrow-down"></i>
                <h3 className={styles["upload-heading"]}>
                  Upload your documents
                </h3>
                <p className={styles["upload-text"]}>
                  Drag and drop your report file or click to browse
                </p>
                <button className={styles["browse-button"]}>
                  Browse your files
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="row">
          <div className="col-12">
            <div className={styles["step-buttons"]}>
              <button
                className={styles["step-previous-button"]}
                onClick={handlePrevious}
              >
                <i className="fa-solid fa-arrow-left me-2"></i>
                Previous
              </button>
              <button
                className={`${styles["step-next-button"]} ${styles["primary"]}`}
                onClick={handleNext}
              >
                Next Step
                <i className="fa-solid fa-arrow-right ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationFirstStep;
