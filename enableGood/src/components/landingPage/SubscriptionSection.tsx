import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubscriptionCards from "../../components/ui/SubscriptionCards";
import { subscriptions } from "../../data/subscription";

import styles from "../../pages/landingPage/LandingPage.module.css";

export default function SubscriptionSection() {
  const [activePlan, setActivePlan] = useState<"companies" | "ngo">(
    "companies"
  );
  const navigate = useNavigate();

  const handlePlanSelect = () => {
    if (activePlan === "companies") {
      // Redirect to onboarding details page (as if company was already selected)
      navigate("/onboarding/details");
    } else {
      // NGO plans are disabled, show message or do nothing
      console.log("NGO plans are not available yet");
    }
  };

  return (
    <section className={styles["subscription-section"]}>
      <div className="container-80">
        <div className={styles["landing-headings"]}>
          <h2>Subscription plans for every need</h2>
          <p>
            Find the perfect subscription plan tailored to your NGO or company's
            specific requirements
          </p>
        </div>

        <div className="active-buttons d-flex justify-content-center gap-3">
          <button
            className={`active-btn ${
              activePlan === "companies"
                ? "btn-companies"
                : "btn-outline-companies"
            }`}
            onClick={() => setActivePlan("companies")}
          >
            Company plans
          </button>
          <button
            className={`active-btn ${
              activePlan === "ngo" ? "btn-ngo" : "btn-outline-ngo"
            }`}
            onClick={() => setActivePlan("ngo")}
          >
            NGO plans
          </button>
        </div>

        {/* Subscription cards */}
        <SubscriptionCards
          plans={subscriptions[activePlan]}
          theme={activePlan === "ngo" ? "teal" : "blue"}
          buttonText="Subscribe"
          onPlanSelect={handlePlanSelect}
          isOnboarding={false}
        />
      </div>
    </section>
  );
}
