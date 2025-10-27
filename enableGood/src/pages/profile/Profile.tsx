import { useState, useEffect } from "react";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/authService";
import styles from "./Profile.module.css";

interface FormData {
  name: string;
  organizationName: string;
  country: string;
  sector: string;
  website: string;
  email: string;
  password: string;
  mission: string;
}

const Profile = () => {
  const { user, logout, updateUser } = useAuthStore();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("userInfo");
  const [isLoading, setIsLoading] = useState(false);
  const [saveMessage, setSaveMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [showNotification, setShowNotification] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});

  const [formData, setFormData] = useState<FormData>({
    name: "",
    organizationName: "",
    country: "",
    sector: "",
    website: "",
    email: "",
    password: "",
    mission: "",
  });

  // Initialize form data when user data is available
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        organizationName: user.organizationName || "",
        country: user.country || "",
        sector: user.sector || "",
        website: user.website || "",
        email: user.email || "",
        password: "",
        mission: user.mission || "",
      });
    }
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Handle input changes
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear field error when user starts typing
    if (fieldErrors[field]) {
      setFieldErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }

    // Clear any existing messages when user starts typing
    if (saveMessage) {
      setSaveMessage(null);
    }
  };

  // Validate required fields
  const validateFields = () => {
    const errors: { [key: string]: string } = {};
    const requiredFields: (keyof FormData)[] = [
      "name",
      "organizationName",
      "country",
      "sector",
      "email",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        errors[field] = "This information is required";
      }
    });

    // Validate email format
    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      errors.email = "Please enter a valid email address";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Check if form has changes and is valid
  const hasChanges = () => {
    if (!user) return false;

    return (
      formData.name !== (user.name || "") ||
      formData.organizationName !== (user.organizationName || "") ||
      formData.country !== (user.country || "") ||
      formData.sector !== (user.sector || "") ||
      formData.website !== (user.website || "") ||
      formData.email !== (user.email || "") ||
      formData.mission !== (user.mission || "") ||
      formData.password.trim() !== ""
    );
  };

  const isFormValid = () => {
    const requiredFields: (keyof FormData)[] = [
      "name",
      "organizationName",
      "country",
      "sector",
      "email",
    ];
    return requiredFields.every((field) => formData[field].trim() !== "");
  };

  // Save user changes
  const handleSaveChanges = async () => {
    if (!user) return;

    // Validate fields before saving
    if (!validateFields()) {
      setSaveMessage({
        type: "error",
        text: "Please fill in all required fields.",
      });
      return;
    }

    setIsLoading(true);
    setSaveMessage(null);

    try {
      // Prepare updated user data
      const updatedUserData = {
        name: formData.name.trim(),
        organizationName: formData.organizationName.trim(),
        country: formData.country.trim(),
        sector: formData.sector.trim(),
        website: formData.website.trim(), // Keep as empty string if cleared
        email: formData.email.trim(),
        mission: formData.mission.trim(), // Keep as empty string if cleared
        // Only update password if provided
        ...(formData.password.trim() && { password: formData.password.trim() }),
      };

      // Make API call to update user
      console.log("Updating user with data:", updatedUserData);
      const result = await authService.updateUser(user.id, updatedUserData);
      console.log("Update result:", result);

      if (result.success) {
        // Update user in Zustand store with the new data, maintaining proper field order
        const updatedUser = {
          ...user,
          name: updatedUserData.name,
          organizationName: updatedUserData.organizationName,
          country: updatedUserData.country,
          sector: updatedUserData.sector,
          website: updatedUserData.website,
          mission: updatedUserData.mission,
          email: updatedUserData.email,
          // Only update password if provided
          ...(formData.password.trim() && {
            password: formData.password.trim(),
          }),
        };
        updateUser(updatedUser);

        setSaveMessage({
          type: "success",
          text: "Profile updated successfully!",
        });

        // Show slide-in notification
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 3000); // Hide after 3 seconds

        // Clear password field after successful save
        setFormData((prev) => ({ ...prev, password: "" }));
      } else {
        setSaveMessage({
          type: "error",
          text: result.message || "Failed to update profile. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setSaveMessage({
        type: "error",
        text: "Failed to update profile. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles["profile-container"]}>
      {/* Slide-in Success Notification */}
      {showNotification && (
        <div className={styles["success-notification"]}>
          <div className={styles["notification-content"]}>
            <i className="fa-solid fa-check-circle"></i>
            <span>Profile updated successfully!</span>
          </div>
        </div>
      )}

      <div className={styles["profile-content"]}>
        {/* Left Sidebar */}
        <div className={styles["profile-sidebar"]}>
          {/* Profile Header with Photo */}
          <div className={styles["profile-header"]}>
            <div className={styles["profile-photo-wrapper"]}>
              <div className={styles["profile-photo"]}>
                <img
                  src="/src/assets/images-account/user-img.png"
                  alt="User profile"
                />
              </div>
            </div>
            <div className="container-80 mb-5">
              <div className={styles["profile-actions"]}>
                <button className={styles["upload-btn"]}>
                  <i className="fas fa-upload"></i>
                  Upload photo
                </button>
                <button className={styles["delete-btn"]}>
                  <i className="fas fa-trash"></i>
                  Delete photo
                </button>
              </div>
            </div>
            <hr />

            <button
              className={styles["verify-btn"]}
              onClick={() => navigate("/verification")}
            >
              Verify Now
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className={styles["profile-tabs"]}>
            <button
              className={`${styles["tab-btn"]} ${
                activeTab === "userInfo" ? styles["active"] : ""
              }`}
              onClick={() => setActiveTab("userInfo")}
            >
              User info
            </button>
            <button
              className={`${styles["tab-btn"]} ${
                activeTab === "payment" ? styles["active"] : ""
              }`}
              onClick={() => setActiveTab("payment")}
            >
              Payment
            </button>
          </div>

          {/* Logout Button */}
          <button className={styles["logout-btn"]} onClick={handleLogout}>
            Log out
          </button>
        </div>

        {/* Right Content Area */}
        <div className={styles["profile-main"]}>
          {activeTab === "userInfo" && (
            <div className={styles["content-section"]}>
              <h2 className={styles["section-title"]}>Personal Information</h2>

              {/* Error Message Only (Success now shows as slide-in notification) */}
              {saveMessage && saveMessage.type === "error" && (
                <div
                  className={`${styles["save-message"]} ${
                    styles[saveMessage.type]
                  }`}
                >
                  <i className="fa-solid fa-exclamation-circle"></i>
                  {saveMessage.text}
                </div>
              )}

              <div className={styles["form-group"]}>
                <label className={styles["form-label"]}>Full Name *</label>
                <input
                  type="text"
                  className={`${styles["form-input"]} ${
                    fieldErrors.name ? styles["error"] : ""
                  }`}
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Your full name"
                  required
                />
                {fieldErrors.name && (
                  <span className={styles["field-error"]}>
                    {fieldErrors.name}
                  </span>
                )}
              </div>

              <div className={styles["form-group"]}>
                <label className={styles["form-label"]}>
                  Organization Name *
                </label>
                <input
                  type="text"
                  className={`${styles["form-input"]} ${
                    fieldErrors.organizationName ? styles["error"] : ""
                  }`}
                  value={formData.organizationName}
                  onChange={(e) =>
                    handleInputChange("organizationName", e.target.value)
                  }
                  placeholder="Organization Name"
                  required
                />
                {fieldErrors.organizationName && (
                  <span className={styles["field-error"]}>
                    {fieldErrors.organizationName}
                  </span>
                )}
              </div>

              <div className={styles["form-group"]}>
                <label className={styles["form-label"]}>
                  Country / Region *
                </label>
                <input
                  type="text"
                  className={`${styles["form-input"]} ${
                    fieldErrors.country ? styles["error"] : ""
                  }`}
                  value={formData.country}
                  onChange={(e) => handleInputChange("country", e.target.value)}
                  placeholder="Country / Region"
                  required
                />
                {fieldErrors.country && (
                  <span className={styles["field-error"]}>
                    {fieldErrors.country}
                  </span>
                )}
              </div>

              <div className={styles["form-group"]}>
                <label className={styles["form-label"]}>
                  Sector / Industry *
                </label>
                <input
                  type="text"
                  className={`${styles["form-input"]} ${
                    fieldErrors.sector ? styles["error"] : ""
                  }`}
                  value={formData.sector}
                  onChange={(e) => handleInputChange("sector", e.target.value)}
                  placeholder="Sector / Industry"
                  required
                />
                {fieldErrors.sector && (
                  <span className={styles["field-error"]}>
                    {fieldErrors.sector}
                  </span>
                )}
              </div>

              <div className={styles["form-group"]}>
                <label className={styles["form-label"]}>
                  Website (optional)
                </label>
                <input
                  type="url"
                  className={styles["form-input"]}
                  value={formData.website}
                  onChange={(e) => handleInputChange("website", e.target.value)}
                  placeholder="https://example.com"
                />
              </div>

              <div className={styles["form-group"]}>
                <label className={styles["form-label"]}>Email address *</label>
                <input
                  type="email"
                  className={`${styles["form-input"]} ${
                    fieldErrors.email ? styles["error"] : ""
                  }`}
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Email address"
                  required
                />
                {fieldErrors.email && (
                  <span className={styles["field-error"]}>
                    {fieldErrors.email}
                  </span>
                )}
              </div>

              <div className={styles["form-group"]}>
                <label className={styles["form-label"]}>Change password</label>
                <input
                  type="password"
                  className={styles["form-input"]}
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  placeholder="Enter new password"
                />
              </div>

              <div className={styles["form-group"]}>
                <label className={styles["form-label"]}>
                  About/ short bio (optional)
                </label>
                <textarea
                  className={styles["form-textarea"]}
                  value={formData.mission}
                  onChange={(e) => handleInputChange("mission", e.target.value)}
                  placeholder="Tell us about your organization..."
                  rows={3}
                ></textarea>
              </div>

              {/* File Upload Area */}
              <div className={styles["file-upload-area"]}>
                <div className={styles["upload-icon"]}>
                  <i className="fa-solid fa-file-arrow-down"></i>
                </div>
                <p className={styles["upload-text"]}>
                  Drag & drop or click to upload
                </p>
                <p className={styles["upload-subtext"]}>
                  Accepted: PNG, JPG, SVG
                </p>
                <button className={styles["browse-btn"]}>
                  Browse your files
                </button>
              </div>

              {/* Action Buttons */}
              <div className={styles["form-actions"]}>
                <button className={styles["delete-account-btn"]}>
                  Delete account
                </button>
                <button
                  className={styles["save-btn"]}
                  onClick={handleSaveChanges}
                  disabled={!hasChanges() || !isFormValid() || isLoading}
                >
                  {isLoading ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin me-2"></i>
                      Saving...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-save me-2"></i>
                      Save changes
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {activeTab === "payment" && (
            <div className={styles["content-section"]}>
              <h2 className={styles["section-title"]}>Payment</h2>

              <div className={styles["payment-item"]}>
                <label className={styles["form-label"]}>
                  Subscription plan
                </label>
                <div className={styles["payment-box"]}>
                  {user?.subscriptionPlan || "No subscription"}
                </div>
              </div>

              <div className={styles["payment-item"]}>
                <label className={styles["form-label"]}>Billing history</label>
                <div className={styles["payment-box"]}>Billing history</div>
              </div>

              <div className={styles["payment-item"]}>
                <label className={styles["form-label"]}>Payment method</label>
                <div className={styles["payment-box"]}>Payment method</div>
              </div>

              {/* Action Buttons */}
              <div className={styles["form-actions"]}>
                <button className={styles["cancel-subscription-btn"]}>
                  Cancel subscription
                </button>
                <button className={styles["save-btn"]}>Save changes</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
