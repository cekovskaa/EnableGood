import { useNavigate } from "react-router-dom";
import { useOnboarding } from "../../context/OnboardingContext";
import SubscriptionCards from "../../components/ui/SubscriptionCards";
import { subscriptions } from "../../data/subscription";
import ProgressBar from "../../components/ui/ProgressBar";
import styles from "./Onboarding.module.css";

const Subscription = () => {
  const navigate = useNavigate();
  const { updateData } = useOnboarding();

  const steps = [
    { name: "Role Selection", completed: true },
    { name: "Details", completed: true },
    { name: "Preferences", completed: true },
    { name: "Documents", completed: true },
    { name: "Subscription", completed: true },
  ];

  const handlePlanSelect = (planTitle: string) => {
    // Update context with selected plan
    updateData({ subscriptionPlan: planTitle });

    // Navigate to subscription plan details page
    const formattedPlanName = planTitle.toLowerCase().replace(/\s+/g, "-");
    navigate(`/onboarding/subscription-plan/${formattedPlanName}`);
  };

  return (
    <div className={styles["onboarding-section"]}>
      <div className="container-90 py-5">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center mb-5">
              <h1 className="h2 mb-3">Onboarding Steps</h1>
            </div>

            <ProgressBar steps={steps} progressWidth={96} percentage={90} />

            {/* Subscription Cards */}
            <div className="container-90 pt-3 pt-md-5">
              <div className="text-center pb-5">
                <button className="active-btn btn-companies">
                  Company plans
                </button>
              </div>
              <SubscriptionCards
                plans={subscriptions.companies}
                buttonText="Choose"
                onPlanSelect={handlePlanSelect}
                isOnboarding={true}
              />

              <div
                className={`${styles["custom-padding"]} d-flex justify-content-between`}
              >
                <button
                  type="button"
                  className={`${styles["btn-back"]} me-4 me-md-0`}
                  onClick={() => navigate("/onboarding/documents")}
                >
                  Previous Step
                </button>

                <button className={styles["btn-next"]}>
                  <>Save & Continue</>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
