import React from "react";
import styles from "./Dashboard.module.css";

interface SharePostPopupProps {
  isOpen: boolean;
  onClose: () => void;
  userName?: string;
}

const SharePostPopup: React.FC<SharePostPopupProps> = ({
  isOpen,
  onClose,
  userName,
}) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles["popup-overlay"]} onClick={handleOverlayClick}>
      <div className={styles["popup-content"]}>
        {/* Header */}
        <div className={styles["popup-header"]}>
          <h2 className={styles["popup-title"]}>Hi, {userName}!</h2>
          <button
            className={styles["popup-close-btn"]}
            onClick={onClose}
            aria-label="Close popup"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Text Area */}
        <div className={styles["popup-textarea-container"]}>
          <textarea
            className={styles["popup-textarea"]}
            placeholder="Share the good you've been doing!"
            rows={6}
          />
        </div>

        {/* Bottom Section */}
        <div className={styles["popup-bottom"]}>
          <div className={styles["popup-icons"]}>
            <button className={styles["popup-icon-btn"]}>
              <i className="fa-solid fa-file-export"></i>
            </button>
            <button className={styles["popup-icon-btn"]}>
              <i className="fa-solid fa-file-video"></i>
            </button>
            <button className={styles["popup-icon-btn"]}>
              <i className="fa-regular fa-images"></i>
            </button>
          </div>
          <button className={styles["popup-post-btn"]}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default SharePostPopup;
