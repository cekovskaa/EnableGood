import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Onboarding.module.css";
import ProgressBar from "../../components/ui/ProgressBar";

const Documents = () => {
  const [uploadedFiles, setUploadedFiles] = useState<{
    logo: File | null;
    coverPhoto: File | null;
    financialStatement: File | null;
    registrationCertificate: File | null;
    esgReport: File | null;
    partnershipCaseStudy: File | null;
  }>({
    logo: null,
    coverPhoto: null,
    financialStatement: null,
    registrationCertificate: null,
    esgReport: null,
    partnershipCaseStudy: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const steps = [
    { name: "Role Selection", completed: true },
    { name: "Details", completed: true },
    { name: "Preferences", completed: true },
    { name: "Documents", completed: true },
    { name: "Subscription", completed: false },
  ];

  const handleFileUpload = (
    type:
      | "logo"
      | "coverPhoto"
      | "financialStatement"
      | "registrationCertificate"
      | "esgReport"
      | "partnershipCaseStudy",
    file: File
  ) => {
    setUploadedFiles((prev) => ({
      ...prev,
      [type]: file,
    }));
  };

  const handleFileInputChange = (
    type:
      | "logo"
      | "coverPhoto"
      | "financialStatement"
      | "registrationCertificate"
      | "esgReport"
      | "partnershipCaseStudy",
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(type, file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      // Here we would normally upload files to the backend
      // For now, we'll just simulate a delay and move to next step
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // TODO: Upload files to backend
      console.log("Uploaded files:", uploadedFiles);

      // Navigate to next step (subscription)
      navigate("/onboarding/subscription");
    } catch (error) {
      console.error("Error uploading files:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles["onboarding-section"]}>
      <div className="container-90 py-5">
        <div className="row ">
          <div className="col-md-12">
            <div className="text-center mb-5">
              <h1 className="h2 mb-3">Onboarding Steps</h1>
            </div>

            <ProgressBar steps={steps} progressWidth={83} percentage={80} />

            {/* Documents Upload Form */}
            <div className="pt-2 pt-md-5">
              <form onSubmit={handleSubmit}>
                <div className="row g-4">
                  {/* Logo Upload Column */}
                  <div className="col-md-4">
                    <div className="text-start mb-3">
                      <h4 className={`${styles["document-heading"]} mb-4`}>
                        Give your profile credibility and a visual identity.
                      </h4>
                      <p className={`${styles["document-text-bold"]} mb-3`}>
                        Upload organization logo
                      </p>
                      <p className={`${styles["document-text-small"]}`}>
                        Your logo helps others recognize and remember you
                      </p>
                    </div>

                    <div
                      className={`${styles["custom-border"]} text-center py-4 mt-5`}
                    >
                      <i
                        className={`fa-solid fa-file-arrow-down  mb-3 ${styles["upload-logo"]}`}
                      ></i>
                      <h3 className={`${styles["upload-heading"]} mb-3`}>
                        Drag & drop or click to upload
                      </h3>
                      <p className={`${styles["upload-p"]} text-muted mb-4`}>
                        Accepted: PNG, JPG, SVG
                      </p>

                      <input
                        type="file"
                        id="logo-upload"
                        accept=".png,.jpg,.jpeg,.svg"
                        onChange={(e) => handleFileInputChange("logo", e)}
                        className="d-none"
                      />

                      <button
                        type="button"
                        className={styles["browse-btn"]}
                        onClick={() =>
                          document.getElementById("logo-upload")?.click()
                        }
                      >
                        Browse your files
                      </button>

                      {uploadedFiles.logo && (
                        <div className="mt-2">
                          <small className="text-success">
                            <i className="fas fa-check-circle me-1"></i>
                            {uploadedFiles.logo.name}
                          </small>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Cover Photo Upload Column */}
                  <div className="col-md-4 pt-5 pt-md-0">
                    <div className="text-start mb-3">
                      <h4 className={`${styles["document-heading"]} mb-4`}>
                        Upload a cover photo / team photo / project image
                      </h4>
                      <p className={`${styles["document-text-bold"]} mb-3`}>
                        Upload a Cover or Highlight Image
                      </p>
                      <p className={`${styles["document-text-small"]}`}>
                        Make your profile feel real with a human touch.
                      </p>
                    </div>

                    <div
                      className={`${styles["custom-border"]} text-center py-4 mt-5`}
                    >
                      <i
                        className={`fa-solid fa-file-arrow-down  mb-3 ${styles["upload-logo"]}`}
                      ></i>
                      <h3 className={`${styles["upload-heading"]} mb-3`}>
                        Drag & drop or click to upload
                      </h3>
                      <p className={`${styles["upload-p"]} text-muted mb-4`}>
                        Accepted: PNG, JPG, SVG
                      </p>

                      <input
                        type="file"
                        id="cover-photo-upload"
                        accept=".png,.jpg,.jpeg,.svg"
                        onChange={(e) => handleFileInputChange("coverPhoto", e)}
                        className="d-none"
                      />

                      <button
                        type="button"
                        className={styles["browse-btn"]}
                        onClick={() =>
                          document.getElementById("cover-photo-upload")?.click()
                        }
                      >
                        Browse your files
                      </button>

                      {uploadedFiles.coverPhoto && (
                        <div className="mt-2">
                          <small className="text-success">
                            <i className="fas fa-check-circle me-1"></i>
                            {uploadedFiles.coverPhoto.name}
                          </small>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Financial Statement Upload Column */}
                  <div className="col-md-4 pt-5 pt-md-0 pb-3 pb-md-0">
                    <div className="text-start mb-3">
                      <h4 className={`${styles["document-heading"]} mb-4`}>
                        Upload docs/ Financial statement
                      </h4>
                      <p className={`${styles["document-text-bold"]} mb-3`}>
                        Financial statement
                      </p>
                      <p className="pt-3"></p>
                    </div>

                    <div
                      className={`${styles["custom-border"]} text-center py-4 mt-md-5`}
                    >
                      <i
                        className={`fa-solid fa-file-arrow-down  mb-3 ${styles["upload-logo"]}`}
                      ></i>
                      <h3 className={`${styles["upload-heading"]} mb-3`}>
                        Drag & drop or click to upload
                      </h3>
                      <p className={`${styles["upload-p"]} text-muted mb-4`}>
                        Financial statement
                      </p>

                      <input
                        type="file"
                        id="financial-statement-upload"
                        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                        onChange={(e) =>
                          handleFileInputChange("financialStatement", e)
                        }
                        className="d-none"
                      />

                      <button
                        type="button"
                        className={styles["browse-btn"]}
                        onClick={() =>
                          document
                            .getElementById("financial-statement-upload")
                            ?.click()
                        }
                      >
                        Browse your files
                      </button>

                      {uploadedFiles.financialStatement && (
                        <div className="mt-2">
                          <small className="text-success">
                            <i className="fas fa-check-circle me-1"></i>
                            {uploadedFiles.financialStatement.name}
                          </small>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Optional Documents Section */}
                <div className="mt-5">
                  <div className="text-start mb-4">
                    <h4 className={`${styles["document-heading"]} mb-4`}>
                      Upload optional docs
                    </h4>
                    <p className={`${styles["document-text-small"]} mb-5`}>
                      Documents give you credibility and help us verify your
                      profile.
                    </p>
                  </div>

                  <div className="row g-4">
                    {/* Registration Certificate Column */}
                    <div className="col-md-4">
                      <div className="text-start mb-3">
                        <p className={`${styles["document-text-bold"]} mb-3`}>
                          Registration certificate
                        </p>
                      </div>

                      <div
                        className={`${styles["custom-border"]} text-center py-4 mt-3`}
                      >
                        <i
                          className={`fa-solid fa-file-arrow-down  mb-3 ${styles["upload-logo"]}`}
                        ></i>
                        <h3 className={`${styles["upload-heading"]} mb-3`}>
                          Drag & drop or click to upload
                        </h3>
                        <p
                          className={`${styles["document-text-medium"]} text-muted mb-3`}
                        >
                          Registration Certificate/ Legal proof of entity status
                        </p>

                        <input
                          type="file"
                          id="registration-certificate-upload"
                          accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                          onChange={(e) =>
                            handleFileInputChange("registrationCertificate", e)
                          }
                          className="d-none"
                        />

                        <button
                          type="button"
                          className={styles["browse-btn"]}
                          onClick={() =>
                            document
                              .getElementById("registration-certificate-upload")
                              ?.click()
                          }
                        >
                          Browse your files
                        </button>

                        {uploadedFiles.registrationCertificate && (
                          <div className="mt-2">
                            <small className="text-success">
                              <i className="fas fa-check-circle me-1"></i>
                              {uploadedFiles.registrationCertificate.name}
                            </small>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* ESG Report Column */}
                    <div className="col-md-4 pt-4 pt-md-0">
                      <div className="text-start mb-3">
                        <p className={`${styles["document-text-bold"]} mb-3`}>
                          ESG report
                        </p>
                      </div>

                      <div
                        className={`${styles["custom-border"]} text-center py-4 mt-3`}
                      >
                        <i
                          className={`fa-solid fa-file-arrow-down  mb-3 ${styles["upload-logo"]}`}
                        ></i>
                        <h3 className={`${styles["upload-heading"]} mb-3`}>
                          Drag & drop or click to upload
                        </h3>
                        <p
                          className={`${styles["document-text-medium"]} text-muted mb-3`}
                        >
                          Your environmental/social/governance data or goals
                        </p>

                        <input
                          type="file"
                          id="esg-report-upload"
                          accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                          onChange={(e) =>
                            handleFileInputChange("esgReport", e)
                          }
                          className="d-none"
                        />

                        <button
                          type="button"
                          className={styles["browse-btn"]}
                          onClick={() =>
                            document
                              .getElementById("esg-report-upload")
                              ?.click()
                          }
                        >
                          Browse your files
                        </button>

                        {uploadedFiles.esgReport && (
                          <div className="mt-2">
                            <small className="text-success">
                              <i className="fas fa-check-circle me-1"></i>
                              {uploadedFiles.esgReport.name}
                            </small>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Partnership Case Study Column */}
                    <div className="col-md-4 pt-4 pt-md-0">
                      <div className="text-start mb-3">
                        <p className={`${styles["document-text-bold"]} mb-3`}>
                          Partnership case study (optional but useful for
                          credibility)
                        </p>
                      </div>

                      <div
                        className={`${styles["custom-border"]} text-center py-4 mt-3`}
                      >
                        <i
                          className={`fa-solid fa-file-arrow-down  mb-3 ${styles["upload-logo"]}`}
                        ></i>
                        <h3 className={`${styles["upload-heading"]} mb-3`}>
                          Drag & drop or click to upload
                        </h3>
                        <p
                          className={`${styles["document-text-medium"]} text-muted mb-3`}
                        >
                          Example of real collaboration in action
                        </p>

                        <input
                          type="file"
                          id="partnership-case-study-upload"
                          accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                          onChange={(e) =>
                            handleFileInputChange("partnershipCaseStudy", e)
                          }
                          className="d-none"
                        />

                        <button
                          type="button"
                          className={styles["browse-btn"]}
                          onClick={() =>
                            document
                              .getElementById("partnership-case-study-upload")
                              ?.click()
                          }
                        >
                          Browse your files
                        </button>

                        {uploadedFiles.partnershipCaseStudy && (
                          <div className="mt-2">
                            <small className="text-success">
                              <i className="fas fa-check-circle me-1"></i>
                              {uploadedFiles.partnershipCaseStudy.name}
                            </small>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 mb-4">
                  <p className={`${styles["document-text-small"]} my-5`}>
                    These documents remain private unless you choose to make
                    them public.
                  </p>
                </div>

                <div
                  className={`${styles["mobile-btns"]} d-flex justify-content-between`}
                >
                  <button
                    type="button"
                    className={styles["btn-next"]}
                    onClick={() => navigate("/onboarding/preferences")}
                    disabled={isLoading}
                  >
                    Previous Step
                  </button>

                  <div className="d-flex justify-content-center gap-2 mt-5 mt-md-0">
                    <button
                      type="button"
                      className={styles["btn-later"]}
                      onClick={() => navigate("/onboarding/subscription")}
                      disabled={isLoading}
                    >
                      Upload Later
                    </button>
                    <button
                      type="submit"
                      className={styles["btn-sub-plan"]}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Uploading...
                        </>
                      ) : (
                        <>Choose Subscription Plan </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
