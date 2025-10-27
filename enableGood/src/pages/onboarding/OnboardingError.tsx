import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Onboarding.module.css";

const OnboardingError = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const message =
    location.state?.message ||
    "Something went wrong during the registration process.";

  const handleTryAgain = () => {
    navigate("/login");
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className={styles["welcome-section"]}>
      <div className={styles["content-wrapper"]}>
        <h1 className={styles["welcome-title"]}>Error!</h1>
        <p className={`${styles["welcome-subtitle"]} mb-5`}>{message}</p>
        <div className="d-flex gap-2 justify-content-center"
         
        >
          <button
            onClick={handleTryAgain}
            className={styles["btn-loggin-in"]}
          >
            Try Logging In
          </button>
          <button
            onClick={handleGoHome}
           className={styles["btn-go-home"]}
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingError;
