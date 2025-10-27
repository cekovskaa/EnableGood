import "./Impact.css";
import styles from "../../pages/landingPage/LandingPage.module.css";

export default function Impact() {
  return (
    <section className="impact-section">
      <div className={styles["landing-container"]}>
        <div className="impact-container">
          <div className={styles["landing-headings"]}>
            <h2>Regional Impact Distribution</h2>
            <p>
              Explore the geographic breakdown of our initiatives and their
              outcomes.
            </p>
          </div>

          {/* Overlay container */}
          <div className="impact-overlay">
            <img
              src="/src/assets/images/impact-overlay.png"
              alt="Overlay Logo"
              className="overlay-image"
            />
          </div>

          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-3 ">
              <div className="impact-circle-smaller">
                <img
                  src="/src/assets/images/image1-circle.png"
                  alt="Africa image"
                />
                <div className="impact-overlay">
                  <img
                    src="/src/assets/images/vector1.png"
                    alt="overlay"
                    className="overlay-shape"
                  />
                  <div className="overlay-text">
                    <h3>42%</h3>
                    <p>Africa</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 ">
              <div className="impact-circle-bigger">
                <img
                  src="/src/assets/images/image2-circle.png"
                  alt="Asia image"
                />
                <div className="impact-overlay">
                  <img
                    src="/src/assets/images/vector2.png"
                    alt="overlay"
                    className="overlay-shape"
                  />
                  <div className="overlay-text">
                    <h3>67%</h3>
                    <p>Asia</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 ">
              <div className="impact-circle-bigger">
                <img
                  src="/src/assets/images/image3-circle.png"
                  alt="South America image"
                />
                <div className="impact-overlay">
                  <img
                    src="/src/assets/images/vector3.png"
                    alt="overlay"
                    className="overlay-shape"
                  />
                  <div className="overlay-text">
                    <h3>58%</h3>
                    <p>South America</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 ">
              <div className="impact-circle-smaller">
                <img
                  src="/src/assets/images/image4-circle.png"
                  alt="Other Regions image"
                />
                <div className="impact-overlay">
                  <img
                    src="/src/assets/images/vector4.png"
                    alt="overlay"
                    className="overlay-shape"
                  />
                  <div className="overlay-text">
                    <h3>52%</h3>
                    <p>Other Regions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cards-impact">
            <div className={styles["landing-headings"]}>
              <h2>Our impact in numbers</h2>
              <p>
                Measure the difference we make together through transformative
                partnerships
              </p>
            </div>
            <div className="row g-3">
              <div className="col-12 col-md-4">
                <div className="card card-impact bg-yellow">
                  <div className="card-body">
                    <h3 className="card-title">500 +</h3>
                    <p className="card-text">Organizations</p>
                    <span className="card-span">
                      NGOs and companies actively collaborating on our platform.
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card card-impact bg-orange">
                  <div className="card-body">
                    <h3 className="card-title">$ 10.2M</h3>
                    <p className="card-text">NGOs</p>
                    <span className="card-span">
                      NGOs and companies actively collaborating on our platform.
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card card-impact bg-green">
                  <div className="card-body">
                    <h3 className="card-title">1.5M +</h3>
                    <p className="card-text">Organizations</p>
                    <span className="card-span">
                      NGOs and companies actively collaborating on our platform.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Alternate approach for the circled images frame

{
  /* <div className="row d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-3 ">
            <div className="impact-circle-smaller">
              <img src="/src/assets/images/image1-circle.png" alt="Africa image" />
              <div className="impact-overlay">
                <img src="/src/assets/images/vector1.png" alt="overlay" className="overlay-shape" />
                <div className="overlay-text">
                  <h3>42%</h3>
                  <p>Africa</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 ">
            <div className="impact-circle-bigger">
              <img src="/src/assets/images/image2-circle.png" alt="Asia image" />
              <div className="impact-overlay">
                <img src="/src/assets/images/vector2.png" alt="overlay" className="overlay-shape" />
                <div className="overlay-text">
                  <h3>67%</h3>
                  <p>Asia</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 ">
            <div className="impact-circle-bigger">
              <img src="/src/assets/images/image3-circle.png" alt="South America image" />
              <div className="impact-overlay">
                <img src="/src/assets/images/vector3.png" alt="overlay" className="overlay-shape" />
                <div className="overlay-text">
                  <h3>58%</h3>
                  <p>South America</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 ">
            <div className="impact-circle-smaller">
              <img src="/src/assets/images/image4-circle.png" alt="Other Regions image" />
              <div className="impact-overlay">
                <img src="/src/assets/images/vector4.png" alt="overlay" className="overlay-shape" />
                <div className="overlay-text">
                  <h3>52%</h3>
                  <p>Other Regions</p>
                </div>
              </div>
            </div>
          </div>
        </div> */
}

{
  /* <img
src="/src/assets/images/circled-images-frame.png"
alt="Frame-image"
className="frame-image"
/> */
}
