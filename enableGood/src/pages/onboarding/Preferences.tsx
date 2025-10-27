import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useOnboarding } from "../../context/OnboardingContext";
import styles from "./Onboarding.module.css";
import ProgressBar from "../../components/ui/ProgressBar";

const Preferences = () => {
  const [selectedPartnerTypes, setSelectedPartnerTypes] = useState<string[]>(
    []
  );
  const [selectedESGPillars, setSelectedESGPillars] = useState<string[]>([]);
  const navigate = useNavigate();
  const { data: onboardingData, updateData } = useOnboarding();

  const steps = [
    { name: "Role Selection", completed: true },
    { name: "Details", completed: true },
    { name: "Preferences", completed: true },
    { name: "Documents", completed: false },
    { name: "Subscription", completed: false },
  ];

  const partnerTypes = ["Companies", "NGOs", "Just exploring"];
  const esgPillars = ["Environmental", "Social", "Governance"];

  const handlePartnerTypeToggle = (type: string) => {
    setSelectedPartnerTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleESGPillarToggle = (pillar: string) => {
    setSelectedESGPillars((prev) =>
      prev.includes(pillar)
        ? prev.filter((p) => p !== pillar)
        : [...prev, pillar]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Update context with current selections
    updateData({
      ...onboardingData,
      partnerTypes: selectedPartnerTypes,
      esgPillars: selectedESGPillars,
    });

    navigate("/onboarding/documents");
  };

  // Sync context with local state
  useEffect(() => {
    updateData({
      ...onboardingData,
      partnerTypes: selectedPartnerTypes,
      esgPillars: selectedESGPillars,
    });
  }, [selectedPartnerTypes, selectedESGPillars]);

  return (
    <div className={styles["onboarding-section"]}>
      <div className="container-90 py-5">
        <div className="row ">
          <div className="col-md-12">
            <div className="text-center mb-5">
              <h1 className="h2 mb-3">Onboarding Steps</h1>
            </div>

            <ProgressBar steps={steps} progressWidth={63} percentage={70} />

            {/* Preferences Form */}
            <div className="container-90">
              <div className="pt-2 pt-md-5">
                <form onSubmit={handleSubmit}>
                  <div className="mb-5">
                    <h4 className={`${styles["custom-headings"]} mb-2`}>
                      Partnership Preferences (Optional)
                    </h4>
                    <p className={`${styles["custom-text"]} mb-4`}>
                      Helps match users with ideal partners down the line.
                    </p>
                  </div>

                  {/* Partner Type Selection */}
                  <div className="mb-5 d-flex flex-wrap gap-4">
                    <button className="filter-label ">
                      Partner <i className="fa-solid fa-chevron-right ms-2"></i>
                    </button>
                    <div className="d-flex justify-content-center flex-md-wrap gap-2 gap-md-4">
                      {partnerTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          className={`filter-btn ${
                            selectedPartnerTypes.includes(type)
                              ? "selected"
                              : ""
                          }`}
                          onClick={() => handlePartnerTypeToggle(type)}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* ESG Pillars Selection */}
                  <div className="mb-5 d-flex flex-wrap gap-4">
                    <button className="filter-label">
                      ESG pillars{" "}
                      <i className="fa-solid fa-chevron-right ms-2"></i>
                    </button>
                    <div className="d-flex justify-content-center flex-md-wrap gap-2 gap-md-4">
                      {esgPillars.map((pillar) => (
                        <button
                          key={pillar}
                          type="button"
                          className={`filter-btn ${
                            selectedESGPillars.includes(pillar)
                              ? "selected"
                              : ""
                          }`}
                          onClick={() => handleESGPillarToggle(pillar)}
                        >
                          {pillar}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div
                    className={`${styles["custom-padding"]} d-flex justify-content-between`}
                  >
                    <button
                      type="button"
                      className={`${styles["btn-back"]} me-4 me-md-0`}
                      onClick={() => navigate("/onboarding/details")}
                    >
                      Previous Step
                    </button>

                    <button type="submit" className={styles["btn-next"]}>
                      Next Step
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
