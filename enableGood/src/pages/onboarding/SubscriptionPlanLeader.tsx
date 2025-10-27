import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { subscriptions } from "../../data/subscription";
import { authService } from "../../services/authService";
import { useOnboarding } from "../../context/OnboardingContext";
import styles from "./Onboarding.module.css";
import ProgressBar from "../../components/ui/ProgressBar";

const SubscriptionPlanLeader = () => {
  const { planName } = useParams<{ planName: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { data: onboardingData, updateData } = useOnboarding();

  // Find the selected plan
  const selectedPlan = subscriptions.companies.find(
    (plan) => plan.title.toLowerCase().replace(/\s+/g, "-") === planName
  );

  if (!selectedPlan) {
    return (
      <div
        className={`${styles["onboarding-section"]} min-vh-100 d-flex justify-content-center align-items-center`}
      >
        <div className="container-90 py-5">
          <div className="text-center">
            <h1 className="mb-5">Plan not found</h1>
            <button
              className={styles["btn-back"]}
              onClick={() => navigate("/onboarding/subscription")}
            >
              Back to Plans
            </button>
          </div>
        </div>
      </div>
    );
  }

  const steps = [
    { name: "Role Selection", completed: true },
    { name: "Details", completed: true },
    { name: "Preferences", completed: true },
    { name: "Documents", completed: true },
    { name: "Subscription", completed: true },
  ];

  const handleCompleteRegistration = async () => {
    if (!selectedPlan) {
      setError("Please select a valid plan");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Update subscription plan in context
      updateData({ subscriptionPlan: selectedPlan.title });

      // Register the user
      const registrationData = {
        organizationName: onboardingData.organizationName,
        country: onboardingData.country,
        sector: onboardingData.sector,
        website: onboardingData.website,
        email: onboardingData.email,
        password: onboardingData.password,
        mission: onboardingData.mission,
        partnershipGoals: onboardingData.partnershipGoals,
        selectedSDGs: onboardingData.selectedSDGs,
        partnerTypes: onboardingData.partnerTypes,
        esgPillars: onboardingData.esgPillars,
        subscriptionPlan: selectedPlan.title,
      };

      const response = await authService.register(registrationData);

      if (response.success && response.user) {
        // Store user credentials in localStorage for login after welcome page
        localStorage.setItem(
          "onboarding-data",
          JSON.stringify({
            email: registrationData.email,
            password: registrationData.password,
          })
        );

        // Redirect to welcome page
        navigate("/onboarding/welcome");
      } else {
        setError(response.message || "Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError("An error occurred during registration");
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

            <ProgressBar steps={steps} progressWidth={100} percentage={100} />

            {/* Plan Details */}
            <div className="container-80">
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              <div className="row">
                <div
                  className={`${styles["leader-plan-heading"]} mt-3 mt-md-0`}
                >
                  <h1>You're In! Welcome to the {selectedPlan.title} Plan</h1>
                  <p>
                    You've joined the companies leading the way in purpose,
                    performance, and real ESG impact.
                  </p>
                </div>

                <div className="col-md-12">
                  <p className={`${styles["plan-info"]} mb-3`}>
                    Plan: {selectedPlan.title}
                  </p>

                  <p className={`${styles["plan-info"]} mb-3`}>
                    Billing: {selectedPlan.price}$ {selectedPlan.unit}
                  </p>

                  <p className={`${styles["plan-info"]} mb-3`}>
                    Next billing date: [e.g., June 24, 2025]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["plan-features"]}>
        <div className="container-90">
          <div className="container-80">
            <div className="col-md-12">
              <h2 className="fw-bold mb-5">What You Can Do Now</h2>
              <ul className={styles["features-list"]}>
                <li>
                  Explore & Match with NGOs
                  <br />
                  Access curated NGO suggestions tailored to your ESG focus.
                </li>
                <li>
                  Collaborate on Projects
                  <br />
                  Use your workspace to co-manage initiatives with tasks, files,
                  and timelines.
                </li>
                <li>
                  Activate the ESG Toolkit
                  <br />
                  Set and track ESG goals with our advanced alignment tools.
                </li>
                <li>
                  Access Executive Analytics
                  <br />
                  View strategic impact data and get quarterly insights.
                </li>
                <li>
                  Meet Your Account Manager
                  <br />A dedicated partner will contact you shortly to help
                  align your goals and strategy.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container-90">
        <div className="container-80">
          <div className="py-5">
            <div className="row py-5">
              <div className="col-md-7">
                <p>Need Help?</p>
                <p>
                  We're here to support you as you build purpose-driven
                  partnerships. Contact your support team →
                  support@enablegood.org
                </p>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between mt-5">
            <button
              type="button"
              className={`${styles["btn-back"]} me-4 me-md-0`}
              onClick={() => navigate("/onboarding/subscription")}
            >
              Previous Step
            </button>

            <button
              type="button"
              className={styles["btn-next"]}
              onClick={handleCompleteRegistration}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Creating Account...
                </>
              ) : (
                <>Continue </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlanLeader;
