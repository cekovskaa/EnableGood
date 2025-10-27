import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../VerificationSteps.module.css";
import "../../../styles/AccountStyles.css";

const VerificationSecondStep: React.FC = () => {
  const navigate = useNavigate();

  const documents = [
    {
      name: "Q1 Financial Report.pdf",
      uploaded: "2024-06-13",
      size: "2.5 MB",
      status: "Saved",
      lastModified: "2024-06-13",
      verification: "Pending",
    },
    {
      name: "Annual Compliance Summary.docx",
      uploaded: "2024-06-13",
      size: "2.5 MB",
      status: "Saved",
      lastModified: "2024-06-13",
      verification: "Success",
    },
    {
      name: "Market Research Analysis.pdf",
      uploaded: "2024-06-13",
      size: "2.5 MB",
      status: "Saved",
      lastModified: "2024-06-13",
      verification: "Success",
    },
    {
      name: "Product Roadmap 2025.pdf",
      uploaded: "2024-06-13",
      size: "2.5 MB",
      status: "Saved",
      lastModified: "2024-06-13",
      verification: "Pending",
    },
    {
      name: "User Journey 2023.fig",
      uploaded: "2024-06-13",
      size: "2.5 MB",
      status: "Saved",
      lastModified: "2024-06-13",
      verification: "Success",
    },
    {
      name: "Project Management Plans 2022.pdf",
      uploaded: "2024-06-13",
      size: "2.5 MB",
      status: "Saved",
      lastModified: "2024-06-13",
      verification: "Pending",
    },
  ];

  const handlePrevious = () => {
    navigate("/verification/first-step");
  };

  const handleNext = () => {
    navigate("/verification/third-step");
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
              style={{ width: "66.66%" }}
            ></div>
          </div>
          <div className={styles["progress-labels"]}>
            <p className={`${styles["progress-label"]} ${styles["active"]}`}>
              Upload Your Documentation
            </p>
            <p className={`${styles["progress-label"]} ${styles["active"]}`}>
              Expert Review
            </p>
            <p className={styles["progress-label"]}>
              Earn Your Badge & Unlock Benefits
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles["main-content-container"]} mt-5`}>
        {/* Main Content */}
        <div className="row mb-4">
          <div className="col-12">
            <p className={styles["step-description"]}>
              Once submitted, our dedicated verification team carefully examines
              each file for completeness and authenticity. This thorough
              human-led process ensures your disclosures meet our rigorous
              standards—typically wrapped up within 48 hours.
            </p>
          </div>
        </div>

        {/* Documents Table */}
        <div className="row mb-5">
          <div className="col-12">
            <div className={styles["documents-card"]}>
              <div className={styles["documents-header"]}>
                <h3 className={styles["documents-title"]}>
                  Your submitted documents
                </h3>
                <p className={styles["documents-subtitle"]}>
                  View, edit and publish your uploaded reports
                </p>
              </div>

              <div className={styles["documents-table-wrapper"]}>
                <table className={styles["documents-table"]}>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Uploaded</th>
                      <th>Size</th>
                      <th>Status</th>
                      <th>Last Modified</th>
                      <th>Verification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {documents.map((doc, index) => (
                      <tr key={index}>
                        <td>
                          <div className={styles["document-name"]}>
                            <i className="fa-regular fa-file"></i>
                            <span>{doc.name}</span>
                          </div>
                        </td>
                        <td>{doc.uploaded}</td>
                        <td>{doc.size}</td>
                        <td>
                          <span className={styles["status-badge"]}>
                            {doc.status}
                          </span>
                        </td>
                        <td>{doc.lastModified}</td>
                        <td>
                          <span
                            className={`${styles["verification-badge"]} ${
                              doc.verification === "Success"
                                ? styles["success"]
                                : styles["pending"]
                            }`}
                          >
                            {doc.verification}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="row">
          <div className="col-12">
            <div className={`${styles["step-buttons"]} mt-2 pt-2`}>
              <button
                className={styles["step-previous-button"]}
                onClick={handlePrevious}
              >
                <i className="fa-solid fa-arrow-left me-2"></i>
                Previous Step
              </button>
              <button
                className={styles["step-next-button"]}
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

export default VerificationSecondStep;
