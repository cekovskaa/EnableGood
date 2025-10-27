import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import styles from "../../styles/AuthSidebar.module.css";

export default function AuthSidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useAuthStore();
  const location = useLocation();

  // Mobile detection
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    {
      path: "/dashboard",
      icon: "fas fa-home",
      label: "Home",
    },
    {
      path: "/current-projects",
      icon: "fa-solid fa-briefcase",
      label: "Current projects",
    },
    {
      path: "/calendar",
      icon: "fas fa-calendar-alt",
      label: "Calendar",
    },
    {
      path: "/matchmaking",
      icon: "fas fa-users",
      label: "Matchmaking",
    },
    {
      path: "/explore",
      icon: "fas fa-compass",
      label: "Explore",
    },
    {
      path: "/learning-hub",
      icon: "fas fa-graduation-cap",
      label: "Learning Hub",
    },
    {
      path: "/impact-reports",
      icon: "fas fa-chart-line",
      label: "Impact reports",
    },
    {
      path: "/statistics",
      icon: "fas fa-chart-bar",
      label: "Statistics",
    },
  ];

  if (isMobile) {
    return (
      <div className={styles["mobile-navbar"]}>
        {/* Mobile Header */}
        <div className={styles["mobile-header"]}>
          <div className={styles["mobile-logo-container"]}>
            <img
              src="/src/assets/images-account/white-logo.png"
              alt="EnableGood Logo"
              className={styles["mobile-logo"]}
            />
            <div className={styles["mobile-logo-text"]}>
              <span className={styles["mobile-logo-title"]}>Enable Good</span>
              <span className={styles["mobile-logo-tagline"]}>
                connecting good
              </span>
            </div>
          </div>

          <button
            className={styles["hamburger-btn"]}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <i
              className={`fa-solid ${
                isMobileMenuOpen ? "fa-xmark" : "fa-bars"
              }`}
            ></i>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`${styles["mobile-menu"]} ${
            isMobileMenuOpen ? styles.open : ""
          }`}
        >
          <nav className={styles["mobile-nav"]}>
            <ul className={styles["mobile-nav-list"]}>
              {menuItems.map((item) => (
                <li key={item.path} className={styles["mobile-nav-item"]}>
                  <Link
                    to={item.path}
                    className={`${styles["mobile-nav-link"]} ${
                      location.pathname === item.path ? styles.active : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className={item.icon}></i>
                    <span className={styles["mobile-nav-text"]}>
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile User Profile */}
          <div className={styles["mobile-user-profile"]}>
            <Link
              to="/profile"
              className={`${styles["mobile-user-profile"]} text-decoration-none`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className={styles["mobile-user-info"]}>
                <div className={styles["mobile-user-avatar"]}>
                  <img
                    src="/src/assets/images-account/user-img.png"
                    alt="User logo"
                  />
                </div>
                <span className={styles["mobile-user-name"]}>{user?.name}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${styles.sidebar} ${isExpanded ? styles.expanded : ""}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Logo */}
      <div className={styles["sidebar-header"]}>
        <div className={styles["logo-container"]}>
          <img
            src="/src/assets/images-account/white-logo.png"
            alt="EnableGood Logo"
            className={styles["sidebar-logo"]}
          />
          {isExpanded && (
            <div
              className={`${styles["logo-text-container"]} d-flex justify-content-center align-items-center`}
            >
              <span className={styles["logo-text"]}>Enable Good</span>
              <span className={styles["logo-tagline"]}>connecting good</span>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className={styles["sidebar-nav"]}>
        <ul className={styles["nav-list"]}>
          {menuItems.map((item) => (
            <li key={item.path} className={styles["nav-item"]}>
              <Link
                to={item.path}
                className={`${styles["nav-link"]} ${
                  location.pathname === item.path ? styles.active : ""
                }`}
              >
                <i className={item.icon}></i>
                {isExpanded && (
                  <span className={styles["nav-text"]}>{item.label}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile Section */}
      <div className={styles["sidebar-footer"]}>
        <Link to="/profile" className={`${styles["user-profile"]} text-decoration-none`}>
          <div className={styles["user-avatar"]}>
            <img
              src="/src/assets/images-account/user-img.png"
              alt="User logo"
            />
          </div>
          {isExpanded && (
            <div className={styles["user-info"]}>
              <span className={styles["user-name"]}>{user?.name}</span>
            </div>
          )}
        </Link>
      </div>
    </div>
  );
}
