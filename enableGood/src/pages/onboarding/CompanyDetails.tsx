import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useOnboarding } from "../../context/OnboardingContext";
import ProgressBar from "../../components/ui/ProgressBar";
import styles from "./Onboarding.module.css";

const CompanyDetails = () => {
  const { data: onboardingData, updateData } = useOnboarding();
  const [formData, setFormData] = useState({
    organizationName: onboardingData.organizationName || "",
    country: onboardingData.country || "",
    sector: onboardingData.sector || "",
    website: onboardingData.website || "",
    email: onboardingData.email || "",
    password: onboardingData.password || "",
    confirmPassword: "",
    mission: onboardingData.mission || "",
  });
  const [selectedGoals, setSelectedGoals] = useState<string[]>(
    onboardingData.partnershipGoals || []
  );
  const [selectedSDGs, setSelectedSDGs] = useState<string[]>(
    onboardingData.selectedSDGs || []
  );
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const steps = [
    { name: "Role Selection", completed: true },
    { name: "Details", completed: true },
    { name: "Preferences", completed: false },
    { name: "Documents", completed: false },
    { name: "Subscription", completed: false },
  ];

  // Update context when form data changes
  useEffect(() => {
    updateData({
      organizationName: formData.organizationName,
      country: formData.country,
      sector: formData.sector,
      website: formData.website,
      email: formData.email,
      password: formData.password,
      mission: formData.mission,
      partnershipGoals: selectedGoals,
      selectedSDGs: selectedSDGs,
    });
  }, [formData, selectedGoals, selectedSDGs]); // Only depend on the actual values, not updateData

  const updateContextData = () => {
    updateData({
      organizationName: formData.organizationName,
      country: formData.country,
      sector: formData.sector,
      website: formData.website,
      email: formData.email,
      password: formData.password,
      mission: formData.mission,
      partnershipGoals: selectedGoals,
      selectedSDGs: selectedSDGs,
    });
  };

  const sdgOptions = [
    "No Poverty",
    "Zero Hunger",
    "Good Health and Well-Being",
    "Quality Education",
    "Gender Equality",
    "Clean Water and Sanitation",
    "Affordable and Clean Energy",
    "Decent Work and Economic Growth",
    "Industry, Innovation and Infrastructure",
    "Responsible Consumption and Production",
    "Climate Action",
    "Life Below Water",
    "Life on Land",
    "Peace, Justice and Strong Institutions",
    "Partnerships for the Goals",
    "Reduced Inequalities",
    "Sustainable Cities and Communities",
  ];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.organizationName.trim()) {
      newErrors.organizationName = "Organization name is required";
    }

    if (!formData.country) {
      newErrors.country = "Country is required";
    }

    if (!formData.sector) {
      newErrors.sector = "Sector is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (selectedGoals.length === 0) {
      newErrors.goals = "Please select at least one partnership goal";
    }

    if (selectedSDGs.length === 0) {
      newErrors.sdgs = "Please select at least one SDG";
    } else if (selectedSDGs.length > 3) {
      newErrors.sdgs = "Please select no more than 3 SDGs";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleGoalToggle = (goal: string) => {
    setSelectedGoals((prev) => {
      if (prev.includes(goal)) {
        return prev.filter((g) => g !== goal);
      } else {
        return [...prev, goal];
      }
    });

    // Clear goals error when user selects a goal
    if (errors.goals) {
      setErrors((prev) => ({ ...prev, goals: "" }));
    }
  };

  const handleSDGToggle = (sdg: string) => {
    setSelectedSDGs((prev) => {
      if (prev.includes(sdg)) {
        return prev.filter((s) => s !== sdg);
      } else if (prev.length < 3) {
        return [...prev, sdg];
      } else {
        return prev; // Don't add if already at limit
      }
    });

    // Clear SDGs error when user selects an SDG
    if (errors.sdgs) {
      setErrors((prev) => ({ ...prev, sdgs: "" }));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      updateContextData();

      // Here we would normally save to the backend
      // For now, we'll just simulate a delay and move to next step
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // TODO: Save company details to backend
      console.log("Company details:", formData);

      // Navigate to next step (preferences)
      navigate("/onboarding/preferences");
    } catch (error) {
      console.error("Error saving company details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles["onboarding-section"]}>
      <div className="container-90 py-5">
        <div className="row ">
          <div className="col-md-12">
            <div className="text-center mb-5">
              <h1 className="h2 mb-3">Onboarding Steps</h1>
            </div>

            <ProgressBar steps={steps} progressWidth={43} percentage={40} />

            {/* Company Details Form */}
            <div className="container-90">
              <form onSubmit={handleSubmit}>
                <div className="row flex-column">
                  <div className="col-md-9 mb-3">
                    <label htmlFor="organizationName" className="form-label">
                      Organization Name *
                    </label>
                    <input
                      type="text"
                      className={`form-control ${styles["custom-input"]} ${
                        errors.organizationName ? "is-invalid" : ""
                      }`}
                      id="organizationName"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleInputChange}
                      placeholder="Enter your organization name"
                      disabled={isLoading}
                    />
                    {errors.organizationName && (
                      <div className="invalid-feedback">
                        {errors.organizationName}
                      </div>
                    )}
                  </div>

                  <div className="col-md-9 mb-3">
                    <label htmlFor="country" className="form-label">
                      Country/Region *
                    </label>
                    <input
                      type="text"
                      className={`form-control ${styles["custom-input"]}  ${
                        errors.country ? "is-invalid" : ""
                      }`}
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="Enter your country or region"
                      disabled={isLoading}
                    />
                    {errors.country && (
                      <div className="invalid-feedback">{errors.country}</div>
                    )}
                  </div>

                  <div className="col-md-9 mb-3">
                    <label htmlFor="sector" className="form-label">
                      Sector *
                    </label>
                    <input
                      type="text"
                      className={`form-control ${styles["custom-input"]}  ${
                        errors.sector ? "is-invalid" : ""
                      }`}
                      id="sector"
                      name="sector"
                      value={formData.sector}
                      onChange={handleInputChange}
                      placeholder="Enter your business sector"
                      disabled={isLoading}
                    />
                    {errors.sector && (
                      <div className="invalid-feedback">{errors.sector}</div>
                    )}
                  </div>

                  <div className="col-md-9 mb-3">
                    <label htmlFor="website" className="form-label">
                      Website (Optional)
                    </label>
                    <input
                      type="url"
                      className={`${styles["custom-input"]} form-control`}
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="https://yourcompany.com"
                      disabled={isLoading}
                    />
                  </div>

                  <div className="col-md-9 mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className={`form-control ${styles["custom-input"]}  ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      disabled={isLoading}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  <div className="col-md-9 mb-3">
                    <label htmlFor="password" className="form-label">
                      Password *
                    </label>
                    <div className="position-relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        className={`form-control ${styles["custom-input"]} ${
                          errors.password ? "is-invalid" : ""
                        }`}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Create a password"
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        className="btn btn-link position-absolute end-0 top-50 translate-middle-y pe-3"
                        onClick={togglePasswordVisibility}
                        disabled={isLoading}
                        style={{
                          border: "none",
                          background: "none",
                          zIndex: 10,
                        }}
                      >
                        <i
                          className={`fa-solid ${
                            showPassword ? "fa-eye" : "fa-eye-slash"
                          } text-black`}
                        ></i>
                      </button>
                    </div>
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>

                  <div className="col-md-9 mb-4">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password *
                    </label>
                    <div className="position-relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        className={`form-control ${styles["custom-input"]}  ${
                          errors.confirmPassword ? "is-invalid" : ""
                        }`}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirm your password"
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        className="btn btn-link position-absolute end-0 top-50 translate-middle-y pe-3"
                        onClick={toggleConfirmPasswordVisibility}
                        disabled={isLoading}
                        style={{
                          border: "none",
                          background: "none",
                          zIndex: 10,
                        }}
                      >
                        <i
                          className={`fa-solid ${
                            showConfirmPassword ? "fa-eye" : "fa-eye-slash"
                          } text-black`}
                        ></i>
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <div className="invalid-feedback">
                        {errors.confirmPassword}
                      </div>
                    )}
                  </div>
                </div>

                {/* Partnership Goals Section */}
                <hr className="my-5" />

                <div className="mb-4">
                  <h4 className={`${styles["custom-headings"]} mb-2`}>
                    Partnership Goals
                  </h4>
                  <p className={`${styles["custom-text"]} mb-4`}>
                    What are you looking for?
                  </p>

                  <div className="row mb-4">
                    <div className="col-md-8">
                      <button
                        type="button"
                        className={`filter-btn me-4 ${
                          selectedGoals.includes("find-partners")
                            ? "selected"
                            : ""
                        }`}
                        onClick={() => handleGoalToggle("find-partners")}
                        disabled={isLoading}
                      >
                        Find Partners
                      </button>
                      <button
                        type="button"
                        className={`filter-btn me-4 ${
                          selectedGoals.includes("join-projects")
                            ? "selected"
                            : ""
                        }`}
                        onClick={() => handleGoalToggle("join-projects")}
                        disabled={isLoading}
                      >
                        Join Projects
                      </button>

                      <button
                        type="button"
                        className={`filter-btn mt-4 mt-md-0 ${
                          selectedGoals.includes("share-knowledge")
                            ? "selected"
                            : ""
                        }`}
                        onClick={() => handleGoalToggle("share-knowledge")}
                        disabled={isLoading}
                      >
                        Share Knowledge
                      </button>

                      {errors.goals && (
                        <div className="text-danger small mt-3 ">
                          {errors.goals}
                        </div>
                      )}

                      <div className="mb-4">
                        <label
                          htmlFor="mission"
                          className="form-label mt-5 mb-3"
                        >
                          Short Description or Mission (Optional)
                        </label>
                        <textarea
                          className={`${styles["textarea-custom"]} form-control`}
                          id="mission"
                          name="mission"
                          value={formData.mission}
                          onChange={handleInputChange}
                          placeholder="Tell us about your organization's mission or what you hope to achieve..."
                          rows={4}
                          disabled={isLoading}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* SDGs Selection Section */}
                <hr className="my-5" />

                <div className="mb-4">
                  <h4 className={`${styles["custom-headings"]} mb-2`}>
                    Choose Relevant SDGs
                  </h4>
                  <p className={`${styles["custom-text"]} mb-4`}>
                    Select up to 3 UN Sustainable Development Goals your org is
                    working on
                  </p>

                  <div className="row g-4 mb-4">
                    {sdgOptions.map((sdg, index) => (
                      <div key={index} className="col-6 col-md-4">
                        <button
                          type="button"
                          className={`${styles["sdg-btn"]} 
                        ${selectedSDGs.includes(sdg) ? styles["selected"] : ""} 
                         ${
                           selectedSDGs.length >= 3 &&
                           !selectedSDGs.includes(sdg)
                             ? styles["disabled"]
                             : ""
                         }`}
                          onClick={() => handleSDGToggle(sdg)}
                          disabled={
                            isLoading ||
                            (selectedSDGs.length >= 3 &&
                              !selectedSDGs.includes(sdg))
                          }
                        >
                          {sdg}
                        </button>
                      </div>
                    ))}
                  </div>

                  {errors.sdgs && (
                    <div className="text-danger small mb-3">{errors.sdgs}</div>
                  )}

                  <div className="text-muted small">
                    Selected: {selectedSDGs.length}/3 SDGs
                  </div>
                </div>

                <div className="d-flex justify-content-between mt-5">
                  <button
                    type="button"
                    className={`${styles["btn-back"]} me-4 me-md-0`}
                    onClick={() => navigate("/onboarding/role")}
                    disabled={isLoading}
                  >
                    Previous Step
                  </button>

                  <button
                    type="submit"
                    className={styles["btn-next"]}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Saving...
                      </>
                    ) : (
                      <>Next Step</>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
