import { Link } from "react-router-dom";
import type { CallToActionProps } from "../../types/types";
import Firms from "./Firms";

export default function CallToAction({
  paragraph,
  primaryButton,
  showFirms = false,
}: CallToActionProps) {
  return (
    <div className="action-container">
      <div className="action-body">
        <h2 className="action-heading">Ready to make a Difference?</h2>
        <div className="wrapper-70">
          <p className="action-paragraph">{paragraph}</p>
        </div>
      </div>

      <div className="action-buttons">
        <Link className="btn-style" to={primaryButton.to}>
          {primaryButton.text}
        </Link>

        <Link className="btn-join" to="/onboarding/role">
          Join Now
        </Link>
      </div>

      {/* Conditionally render Firms component */}
      {showFirms && (
        <div className="firms-section">
          <Firms />
        </div>
      )}
    </div>
  );
}
