import { Link } from "react-router-dom";
import styles from "./PartnershipRequest.module.css";

const RequestSuccess = () => {
  return (
    <div className={styles["page-container"]}>
      <img
        src="/src/assets/images-account/enableGood-logo.png"
        alt="Enable Good Logo"
        className={styles["logo"]}
      />

      <img
        src="/src/assets/images/welcome-design1.png"
        alt=""
        className={styles["design-left"]}
      />

      <img
        src="/src/assets/images/welcome-design2.png"
        alt=""
        className={styles["design-right"]}
      />

      <div className={styles["content"]}>
        <h1 className={styles["title"]}>Request successfully sent!</h1>
        <p className={styles["subtitle"]}>
          Let's build something great — they'll be in touch with you shortly!
        </p>

        <Link
          className={`${styles["request-btn"]} ${styles["custom-btn"]} text-decoration-none px-5 mt-5`}
          to="/dashboard"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default RequestSuccess;
