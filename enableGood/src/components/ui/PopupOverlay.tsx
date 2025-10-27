import React from "react";
import { Link } from "react-router-dom";
import type { PopupOverlayProps } from "../../types/types";
import "../../styles/PopupOverlay.css";

const PopupOverlay: React.FC<PopupOverlayProps> = ({
  show,
  onClose,
  heading = "Sign up to access this content",
  message = "You need to create an account or sign in to see more.",
}) => {
  if (!show) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content " onClick={(e) => e.stopPropagation()}>
        <h2 className="popup-heading mb-4">{heading}</h2>
        <p className="popup-message mb-4">{message}</p>
        <div className="d-flex justify-content-center gap-3 mt-3 mt-md-5">
          <Link to="/login" className="popup-sign text-decoration-none">
            Sign In
          </Link>
          <Link
            to="/onboarding/role"
            className="popup-join text-decoration-none"
          >
            Join Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopupOverlay;
