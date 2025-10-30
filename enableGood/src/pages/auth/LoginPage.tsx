import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<{
    email?: string;
    password?: string;
  }>({});
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const errors: { email?: string; password?: string } = {};
    let isValid = true;

    // Email validation
    if (!email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Password validation
    if (!password.trim()) {
      errors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setFieldErrors(errors);
    return isValid;
  };

  const handleLogin = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    console.log("Login button clicked");

    // Clear previous errors
    setError("");
    setFieldErrors({});

    // Validate form first
    if (!validateForm()) {
      console.log("Form validation failed");
      return;
    }

    setIsLoading(true);

    // Use .then() instead of async/await to avoid any potential issues
    login(email, password)
      .then((success) => {
        console.log("Login result:", success);
        if (success) {
          navigate("/dashboard");
        } else {
          setError("Invalid username or password");
        }
      })
      .catch((err) => {
        console.error("Login error:", err);
        setError("An error occurred. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className={styles["login-container"]}>
      {/* Left side - Form */}
      <div className={styles["form-section"]}>
        <div className={styles["form-content"]}>
          <div className={styles["form-header"]}>
            <h1 className={styles["welcome-title"]}>Welcome to Enable Good</h1>
            <p className={styles["subtitle"]}>
              Sign In to continue your impact
            </p>
          </div>

          {error && (
            <div className={styles["error-alert"]} role="alert">
              {error}
            </div>
          )}

          <form className={styles["login-form"]}>
            <div className={styles["form-group"]}>
              <input
                type="email"
                className={`${styles["form-input"]} ${
                  fieldErrors.email ? styles["input-error"] : ""
                }`}
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (fieldErrors.email) {
                    setFieldErrors((prev) => ({
                      ...prev,
                      email: undefined,
                    }));
                  }
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleLogin();
                  }
                }}
                placeholder="Email"
                required
                disabled={isLoading}
              />
              {fieldErrors.email && (
                <div className={styles["error-message"]}>
                  {fieldErrors.email}
                </div>
              )}
            </div>

            <div className={styles["form-group"]}>
              <input
                type="password"
                className={`${styles["form-input"]} ${
                  fieldErrors.password ? styles["input-error"] : ""
                }`}
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (fieldErrors.password) {
                    setFieldErrors((prev) => ({
                      ...prev,
                      password: undefined,
                    }));
                  }
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleLogin();
                  }
                }}
                placeholder="Password"
                required
                disabled={isLoading}
              />
              {fieldErrors.password && (
                <div className={styles["error-message"]}>
                  {fieldErrors.password}
                </div>
              )}
            </div>

            <div className="d-flex justify-content-center align-items-center mb-4">
              <button
                type="button"
                className={styles["sign-in-button"]}
                onClick={handleLogin}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span
                      className={styles["loading-spinner"]}
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </div>
          </form>

          <div className={styles["form-footer"]}>
            <a href="#" className={`${styles["forgot-password"]} mb-3`}>
              Forgot your password?
            </a>
            <p className={styles["signup-text"]}>
              Don't have an account?{" "}
              <Link
                className={`${styles["signup-link"]}`}
                to="/onboarding/role"
              >
                Join now
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Branding */}
      <div className={styles["brand-section"]}>
        <div className="container-80">
          <div className={styles["brand-content"]}>
            <div className={styles["logo-section"]}>
              <h2 className={styles["brand-title"]}>Enable Good</h2>
              <p className={styles["brand-subtitle"]}>CONNECTING GOOD</p>
              <img
                src="/images/hero-image.png"
                alt="Circle design logo"
                className={styles["login-logo"]}
              />
            </div>
          </div>
        </div>
        <div className={styles["background-circles"]}>
          {Array.from({ length: 5 }, (_, index) => (
            <div key={index} className={styles["background-circle"]}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
