import { useState } from "react";
import { recommendations } from "../../data/recommendations";
import { useAuthStore } from "../../store/authStore";
import styles from "./Dashboard.module.css";
import "../../styles/AccountStyles.css";
import PostCards from "./PostCards";
import RecommendationCard from "./RecommendationCard";
import SharePostPopup from "./SharePostPopup";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuthStore();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSharePostClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="general-section">
      {/* Heading Row */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="general-heading">
            <h1 className="general-title">Welcome, {user?.name}!</h1>
            <div className="general-icons">
              <i className="fa-solid fa-bell"></i>
              <Link className="text-decoration-none ms-3" to="/messages">
                <i className="fa-regular fa-message message-icon"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className={styles["dashboard-layout"]}>
        {/* Left Content */}
        <div className={styles["left-content"]}>
          <div className={styles["share-post"]} onClick={handleSharePostClick}>
            <h3 className={styles["share-title"]}>
              Share the good you've been doing!
            </h3>
            <div className={styles["share-buttons"]}>
              <div className="d-flex justify-content-center gap-2 gap-md-3">
                <button className={styles["share-btn"]}>
                  <i className="fa-solid fa-file-import"></i>
                  <p className="mb-0"> Share report</p>
                </button>
                <button className={styles["impact-btn"]}>
                  <i className="fa-regular fa-clipboard"></i>
                  <p className="mb-0"> Submit impact update</p>
                </button>
              </div>

              <button className={styles["arrow-btn"]}>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>

          {/* Sort Header */}
          <div className={styles["sort-header"]}>
            <hr className={styles["sort-line"]} />
            <span className={styles["sort-text"]}>sort</span>
          </div>

          {/* Posts Feed */}
          <div className={styles["posts-feed"]}>
            <PostCards />
            <PostCards />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className={styles["right-sidebar"]}>
          <div className={`${styles["additional-images"]} mt-5 mt-md-0`}>
            <img
              src="/src/assets/images-account/add-img1.png"
              alt="Add image"
            />
            <img
              src="/src/assets/images-account/add-img2.png"
              alt="Add image"
            />
            <img
              src="/src/assets/images-account/add-img3.png"
              alt="Add image"
            />
          </div>

          {/* Recommendation Cards */}

          <div className={styles["recommendations"]}>
            <h3 className={`${styles["sidebar-title"]} my-3`}>
              Recommended matches for you
            </h3>
            {recommendations.map((rec) => (
              <RecommendationCard key={rec.id} {...rec} />
            ))}
          </div>
        </div>
      </div>

      {/* Share Post Popup */}
      <SharePostPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        userName={user?.name}
      />
    </div>
  );
};

export default Dashboard;
