import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { useMatchmakingStore } from "../../store/matchmakingStore";
import { partnersData } from "../../data/partners-data";
import type { Partner } from "../../types/types";
import styles from "./MatchmakingPage.module.css";
import "../../styles/AccountStyles.css";

export const MatchmakingPage = () => {
  const { user } = useAuthStore();
  const { savePartner, loadSavedPartners, isPartnerSaved } =
    useMatchmakingStore();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSaving, setIsSaving] = useState(false);

  const [showSaveNotification, setShowSaveNotification] = useState(false);
  const [saveNotificationMessage, setSaveNotificationMessage] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (user?.id) {
      loadSavedPartners(user.id);
    }
  }, [user?.id, loadSavedPartners]);

  const currentPartner: Partner = partnersData[currentIndex];
  const isCurrentPartnerSaved = isPartnerSaved(currentPartner?.id);

  const handleSaveForLater = async () => {
    if (!user?.id || !currentPartner) return;

    if (isCurrentPartnerSaved) {
      setSaveNotificationMessage("Already saved!");
      setShowSaveNotification(true);
      setTimeout(() => setShowSaveNotification(false), 2000);
      return;
    }

    setIsSaving(true);
    const success = await savePartner(user.id, currentPartner.id);

    if (success) {
      // Success case
      setSaveNotificationMessage("Partner saved successfully!");
      setShowSaveNotification(true);
      setTimeout(() => setShowSaveNotification(false), 2000);
    }

    setIsSaving(false);
  };

  const handleSwipeLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSwipeRight = () => {
    if (currentIndex < partnersData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (!currentPartner) {
    return <div>Loading...</div>;
  }

  return (
    <div className="general-section">
      {/* Heading Row */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="general-heading">
            <h1 className="general-title">
              <i className="fa-solid fa-users me-2"></i> Matchmaking Hub
            </h1>
            <div className="general-icons">
              <i className="fa-solid fa-bell"></i>
              <Link className="text-decoration-none ms-3" to="/messages">
                <i className="fa-regular fa-message message-icon"></i>
              </Link>
            </div>
          </div>
          <p className={styles["matchmaking-subtitle"]}>
            Our intelligent system matches you with aligned partners based on
            shared values, goals and capacity.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className={styles["content"]}>
        {/* Top row */}
        <div className={styles["top-row"]}>
          <Link className={styles["see-saved-btn"]} to="/saved-profiles">
            See Saved Profiles
          </Link>

          <button
            className={`${styles["save-btn"]} ${
              isCurrentPartnerSaved ? styles["saved"] : ""
            }`}
            onClick={handleSaveForLater}
            disabled={isSaving}
          >
            <span className={styles["heart-icon"]}>
              {isCurrentPartnerSaved ? (
                <i className="fa-solid fa-heart fa-3x"></i>
              ) : (
                <i className="fa-regular fa-heart fa-3x"></i>
              )}
            </span>
            {isCurrentPartnerSaved ? "Saved for Later" : "Save for Later"}
          </button>
        </div>

        {/* Notification */}
        {showSaveNotification && (
          <div className={styles["notification"]}>
            {saveNotificationMessage}
          </div>
        )}

        {/* Carousel (swipe) */}
        <div className={styles["carousel-container"]}>
          <button
            className={`${styles["swipe-btn"]} ${styles["swipe-left"]}`}
            onClick={handleSwipeLeft}
            disabled={currentIndex === 0}
          >
            <i className="fa-solid fa-chevron-left"></i>
            <span className={styles["swipe-text"]}>Swipe Left</span>
          </button>

          <div className={styles["partner-card"]}>
            {/* Circle background behind everything */}
            <img
              src="/src/assets/images-account/circle-design-matching.png"
              alt="Circle background"
              className={styles["circle-background"]}
            />

            <div className={styles["logo-container"]}>
              <img
                src={currentPartner.logo}
                alt={currentPartner.name}
                className={styles["partner-logo"]}
              />

              {/* Vector image */}
              <img
                src="/src/assets/images-account/vector-partners.png"
                alt="Vector decoration"
                className={styles["vector-image"]}
              />

              {/* Percentage */}
              <div className={styles["matching-percentage"]}>
                {currentPartner.matchingRate}%
                <span className={styles["matching-span"]}>Matching Rate</span>
              </div>
            </div>
          </div>

          <button
            className={`${styles["swipe-btn"]} ${styles["swipe-right"]}`}
            onClick={handleSwipeRight}
            disabled={currentIndex === partnersData.length - 1}
          >
            <i className="fa-solid fa-chevron-right"></i>
            <span className={styles["swipe-text"]}>Swipe Right</span>
          </button>
        </div>

        <div className="d-flex justify-content-center">
          <div className={styles["action-buttons"]}>
            <Link
              className={`${styles["primary-btn"]} text-decoration-none text-center`}
              to="/profile-page"
            >
              See Profile
            </Link>

            <Link
              className={`${styles["secondary-btn"]} text-decoration-none text-center`}
              to="/partnership-page"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Help floating button */}
      <div className={styles["help-widget"]}>
        {!isOpen ? (
          <button
            className={styles["help-btn"]}
            onClick={() => setIsOpen(true)}
          >
            <span className={styles["help-text"]}>Need help?</span>
            <i className="fa-solid fa-wand-magic-sparkles"></i>
          </button>
        ) : (
          <div className={styles["help-box"]}>
            <p className={styles["help-title"]}>What are you looking for?</p>
            <div className={styles["help-options"]}>
              <div className={styles["icons-group"]}>
                <i className="fa-solid fa-square-plus"></i>
                <i className="fa-solid fa-file-import"></i>
                <i className="fa-solid fa-clipboard"></i>
                <i className="fa-regular fa-folder"></i>
              </div>
              <i
                className={`fa-solid fa-arrow-right ${styles["arrow-icon"]}`}
                onClick={() => setIsOpen(false)}
              ></i>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
