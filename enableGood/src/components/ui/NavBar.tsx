import { Link } from "react-router-dom";
import { useState } from "react";
import PopupOverlay from "./PopupOverlay";

export default function NavBar() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container d-flex align-items-center px-3 px-md-0 py-md-3">
        <Link className="navbar-brand" to="/">
          <img
            src="/src/assets/images/Logo.png"
            alt="EnableGood Logo"
            className="logo-image"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars hamburger-icon"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/learn-more">
                Learning hub
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/impact-reporting">
                Impact Reporting
              </Link>
            </li>
            <li className="nav-item">
              <p className="nav-link mb-0" onClick={() => setShowPopup(true)}>
                Matchmaking Hub
              </p>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/explore">
                Explore
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About us
              </Link>
            </li>
          </ul>

          <PopupOverlay show={showPopup} onClose={() => setShowPopup(false)} />

          <div className="navbar-buttons d-flex flex-lg-row flex-column">
            <Link
              to="/login"
              className="btn-custom btn-sign-in me-lg-2 mb-2 mb-lg-0 text-decoration-none"
            >
              Sign In
            </Link>
            <Link
              to="/onboarding/role"
              className="btn-custom btn-join-now text-decoration-none"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
