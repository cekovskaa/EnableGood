import styles from "./Onboarding.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

const WelcomeAboard = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuthStore();

  useEffect(() => {
    // Start fade out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // Complete onboarding and redirect after 3 seconds
    const redirectTimer = setTimeout(async () => {
      try {
        const onboardingData = JSON.parse(
          localStorage.getItem("onboarding-data") || "{}"
        );

        if (onboardingData.email && onboardingData.password) {
          const success = await login(
            onboardingData.email,
            onboardingData.password
          );

          localStorage.removeItem("onboarding-data");

          if (success) {
            navigate("/dashboard");
          } else {
            // Login failed after account creation - show error page
            navigate("/onboarding-error", {
              state: {
                message:
                  "Account created successfully, but there was an issue logging you in. Please try logging in manually.",
              },
            });
          }
        } else {
          navigate("/onboarding-error", {
            state: {
              message:
                "There was an issue completing your registration. Please try creating your account again.",
            },
          });
        }
      } catch (error) {
        console.error("Onboarding completion error:", error);

        // Something went wrong during the login process error message
        navigate("/onboarding-error", {
          state: {
            message:
              "There was an unexpected error. Please try logging in manually or contact support.",
          },
        });
      }
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(redirectTimer);
    };
  }, [navigate, login]);
  return (
    <div
      className={styles["welcome-section"]}
      style={{
        opacity: fadeOut ? 0.3 : 1,
        transition: "opacity 1s ease-in-out",
      }}
    >
      <div className={styles["left-circles"]} />

      <div className={styles["right-circles"]} />

      <div className={styles["content-wrapper"]}>
        <h1 className={styles["welcome-title"]}>Welcome aboard!</h1>
        <p className={styles["welcome-subtitle"]}>
          You're all set to start exploring, connecting, and making an impact.
        </p>
      </div>
    </div>
  );
};

export default WelcomeAboard;
