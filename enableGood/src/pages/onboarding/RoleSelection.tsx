import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Onboarding.module.css";
import ProgressBar from "../../components/ui/ProgressBar";

const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
  };

  const handleContinue = () => {
    if (selectedRole === "company") {
      navigate("/onboarding/details");
    }
  };

  const steps = [
    { name: "Role Selection", completed: !!selectedRole },
    { name: "Details", completed: false },
    { name: "Preferences", completed: false },
    { name: "Documents", completed: false },
    { name: "Subscription", completed: false },
  ];

  return (
    <div className={styles["onboarding-section"]}>
      <div className="container-90 py-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center mb-5">
              <h1 className="h2 mb-3">Onboarding Steps</h1>
            </div>

            {/* Progress Bar */}

            <ProgressBar
              steps={steps}
              progressWidth={selectedRole ? 22 : 0}
              percentage={selectedRole ? 10 : 0}
            />

            <div className="container-90">
              <h3 className="ms-md-5 mb-4 mt-4 text-center text-md-start">
                Choose Your Role
              </h3>

              <div className="row g-4">
                {/* NGO Card */}
                <div className="col-md-6">
                  <div
                    className={`${styles["card-ngo"]} ${
                      selectedRole === "ngo" ? "border-primary" : "border-light"
                    }`}
                  >
                    <div className="card-body text-start p-4">
                      <h5 className="card-title h3">NGO</h5>
                      <p className="card-text mt-5">
                        Register as a Non - Govermental Organization to connect
                        with companies and receive support.
                      </p>
                      <div className={styles["arrow-logo"]}>
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Company Card */}
                <div className="col-md-6">
                  <div
                    className={`card border-2 ${styles["card-company"]} ${
                      selectedRole === "company"
                        ? styles["card-company-selected"]
                        : ""
                    }`}
                    onClick={() => handleRoleSelect("company")}
                  >
                    <div className="card-body text-start p-4">
                      <h5 className="card-title h3">Company</h5>
                      <p className="card-text mt-5">
                        Register as a company to support NGOs and make a
                        positive impact.
                      </p>
                      <div className={styles["arrow-logo"]}>
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {selectedRole === "company" && (
                <div className="text-end mt-5">
                  <button
                    className={styles["btn-continue"]}
                    onClick={handleContinue}
                  >
                    Continue as Company{" "}
                    <i className="fas fa-arrow-right ms-2"></i>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
