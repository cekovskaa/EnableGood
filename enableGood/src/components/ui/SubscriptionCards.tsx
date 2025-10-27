import type { Plan } from "../../data/subscription";

interface SubscriptionCardsProps {
  plans: Plan[];
  theme?: "blue" | "teal"; // Default to blue
  buttonText?: string; // Default to "Subscribe"
  isOnboarding?: boolean; // Default to false
  onPlanSelect?: (planName: string) => void; // Callback for plan selection
}

export default function SubscriptionCards({
  plans,
  theme = "blue",
  buttonText = "Subscribe",

  onPlanSelect,
}: SubscriptionCardsProps) {
  const highlightClass = theme === "teal" ? "teal-bg" : "bg-blue";

  return (
    <div className="row g-4 d-flex justify-content-center align-items-end">
      {plans.map((plan) => (
        <div key={plan.id} className="col-12 col-md-4">
          <div
            className={`card sub-card ${
              plan.highlight
                ? `${highlightClass} text-white`
                : `bg-white ${theme === "teal" ? "teal-theme" : ""}`
            }`}
          >
            {plan.highlight && (
              <div className="card-header card-text">Most popular</div>
            )}
            <div className="card-body">
              <h5 className="card-title">{plan.title}</h5>

              <div className="d-flex justify-content-center align-items-center">
                <p className="card-price text-center py-3">{plan.price} $</p>
                <span
                  className={`card-span ${plan.highlight ? "text-white" : ""}`}
                >
                  {plan.unit}
                </span>
              </div>
              <div className="container">
                <ul className="list-unstyled">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="feature">
                      <i className="fa-solid fa-check check-logo"></i> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="subscribe-buttons">
                <button
                  className={`subscribe-btn ${
                    theme === "teal"
                      ? "subscribe-btn-teal"
                      : "subscribe-btn-blue"
                  }`}
                  onClick={() => onPlanSelect?.(plan.title)}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
