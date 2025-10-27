import styles from "./Dashboard.module.css";

export default function PostCards() {
  return (
    <>
      <div className={styles["post-card"]}>
        <div className={styles["post-header"]}>
          <div className={styles["user-info"]}>
            <div className={styles["user-avatar"]}>
              <img
                src="/src/assets/images-account/user-img1.png"
                alt="User image"
              />
            </div>
            <div className={styles["user-details"]}>
              <h4 className={styles["user-name"]}>User name</h4>
              <p className={styles["company-name"]}>Company name</p>
            </div>
          </div>
          <span className={styles["post-date"]}>
            {new Date().toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>

        <div className={styles["post-content"]}>
          <div className={styles["post-image"]}>
            <img
              src="/src/assets/images-account/post-img1.png"
              alt="Post image"
            />
          </div>

          <div className={styles["post-text-container"]}>
            <p className={styles["post-text"]}>
              Keep your messages short, but make sure they cover everything you
              need to say
            </p>
          </div>
        </div>

        <div className={styles["post-interactions"]}>
          <button className={styles["interaction-btn"]}>
            <i className="fa-regular fa-heart"></i>
            Like
          </button>
          <button className={styles["interaction-btn"]}>
            <i className="fa-regular fa-comment"></i>
            Comment
          </button>
          <button className={styles["interaction-btn"]}>
            <i className="fa-solid fa-retweet"></i>
            Repost
          </button>
        </div>
      </div>

      {/* Sample Post 2 */}
      <div className={styles["post-card"]}>
        <div className={styles["post-header"]}>
          <div className={styles["user-info"]}>
            <div className={styles["user-avatar"]}>
              <img
                src="/src/assets/images-account/user-img2.png"
                alt="User image"
              />
            </div>
            <div className={styles["user-details"]}>
              <h4 className={styles["user-name"]}>User name</h4>
              <p className={styles["company-name"]}>Company name</p>
            </div>
          </div>
          <span className={styles["post-date"]}>
            {new Date().toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>

        <div className={styles["post-content"]}>
          <div className={styles["post-text-container"]}>
            <p className={styles["post-text"]}>
              Keep your messages short, but make sure they cover everything you
              need to say
            </p>
          </div>
        </div>

        <div className={styles["post-interactions"]}>
          <button className={styles["interaction-btn"]}>
            <i className="fa-regular fa-heart"></i>
            Like
          </button>
          <button className={styles["interaction-btn"]}>
            <i className="fa-regular fa-comment"></i>
            Comment
          </button>
          <button className={styles["interaction-btn"]}>
            <i className="fa-solid fa-retweet"></i>
            Repost
          </button>
        </div>
      </div>

      {/* Sample Post 3 */}
      <div className={styles["post-card"]}>
        <div className={styles["post-custom-header"]}>
          <p className={styles["post-text"]}>
            A brand new collaboration was established!
          </p>
        </div>

        <div className={styles["post-content"]}>
          <div className={styles["post-text-container"]}>
            <div className="row justify-content-center align-items-center">
              <div className="col-4">
                <div className="d-flex flex-column align-items-center gap-4">
                  <div className={styles["user-avatar-custom"]}>
                    <img
                      src="/src/assets/images-account/user-img2.png"
                      alt="User image"
                    />
                  </div>
                  <div className={`${styles["collab-text"]} text-center`}>
                    <p className={`${styles["collab-p"]} mb-0`}>Company name</p>
                    <span className={styles["collab-span"]}>E-commerce</span>
                  </div>
                </div>
              </div>
              <div className="col-1">
                <div className="d-flex flex-column align-items-center gap-4">
                  <i
                    className={`fa-solid fa-arrow-right ${styles["custom-arrow"]}`}
                  ></i>
                  <i
                    className={`fa-solid fa-arrow-left ${styles["custom-arrow"]}`}
                  ></i>
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex flex-column align-items-center gap-4">
                  <div className={styles["user-avatar-custom"]}>
                    <img
                      src="/src/assets/images-account/user-img3.png"
                      alt="User image"
                    />
                  </div>
                  <div className={`${styles["collab-text"]} text-center`}>
                    <p className={`${styles["collab-p"]} mb-0`}>NGO name</p>
                    <span className={styles["collab-span"]}>SDG goal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["post-interactions"]}>
          <button className={styles["interaction-btn"]}>
            <i className="fa-regular fa-heart"></i>
            Like
          </button>
          <button className={styles["interaction-btn"]}>
            <i className="fa-regular fa-comment"></i>
            Comment
          </button>
          <button className={styles["interaction-btn"]}>
            <i className="fa-solid fa-retweet"></i>
            Repost
          </button>
        </div>
      </div>
    </>
  );
}
