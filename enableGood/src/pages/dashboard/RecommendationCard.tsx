import styles from "./Dashboard.module.css";
import type { Recommendation } from "../../types/types";
import { Link } from "react-router-dom";

const RecommendationCard = ({ image, badgeClass }: Recommendation) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="card">
        <img src={image} className="card-img-top" alt="Recommendation" />
        <div className="card-body">
          <div className={`${styles["badge"]} ${styles[badgeClass]}`}>
            <i className="fa-solid fa-star me-2"></i>
            <span className={styles["badge-span"]}>Badge</span>
          </div>
          <h5 className="card-title">Title</h5>
          <p className="card-text">
            Keep your messages short, but make sure they cover everything you
            need to say.
          </p>
          <div className={styles["card-buttons"]}>
            <Link
              className={`${styles["btn-contact"]} ${styles["custom-card-btns"]} text-decoration-none text-center`}
              to="/partnership-page"
            >
              Connect
            </Link>
            <button
              className={`${styles["btn-skip"]} ${styles["custom-card-btns"]}`}
            >
              Not for me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;
