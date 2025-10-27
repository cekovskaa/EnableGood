import { useEffect, useRef, useState, type JSX } from "react";
import "./Impact-alternate.css";
import styles from "../../pages/landingPage/LandingPage.module.css";

interface CircleData {
  size: number;
  left: number;
  top: number;
  class: string;
  animationDelay: number;
}

export default function Impact(): JSX.Element {
  const circlesOverlayRef = useRef<HTMLDivElement>(null);
  const [circlesGenerated, setCirclesGenerated] = useState<boolean>(false);

  useEffect(() => {
    const generateCircles = (): void => {
      const container = circlesOverlayRef.current;
      if (!container || circlesGenerated) return;

      const circleClasses: string[] = ["pink-1", "pink-2", "pink-3"];
      const circleCount: number = 29;
      const minSize: number = 30;
      const maxSize: number = 80;

      // Clear existing circles first
      container.innerHTML = "";

      // Check if we have saved circles in localStorage
      const savedCircles = localStorage.getItem("impact-circles");
      let circlesData: CircleData[];

      if (savedCircles) {
        // Use saved circles
        circlesData = JSON.parse(savedCircles);
      } else {
        // Generate new circles
        const randomBetween = (min: number, max: number): number =>
          Math.random() * (max - min) + min;

        circlesData = [];
        for (let i = 0; i < circleCount; i++) {
          circlesData.push({
            size: randomBetween(minSize, maxSize),
            left: randomBetween(5, 85),
            top: randomBetween(10, 80),
            class:
              circleClasses[Math.floor(Math.random() * circleClasses.length)],
            animationDelay: randomBetween(0, 5),
          });
        }

        // Save to localStorage
        localStorage.setItem("impact-circles", JSON.stringify(circlesData));
      }

      // Create DOM elements from circlesData
      circlesData.forEach((circleData) => {
        const circle: HTMLDivElement = document.createElement("div");
        circle.className = `decorative-circle ${circleData.class}`;
        circle.style.width = `${circleData.size}px`;
        circle.style.height = `${circleData.size}px`;
        circle.style.left = `${circleData.left}%`;
        circle.style.top = `${circleData.top}%`;
        circle.style.animationDelay = `${circleData.animationDelay}s`;

        container.appendChild(circle);
      });

      setCirclesGenerated(true);
    };

    generateCircles();
  }, [circlesGenerated]);

  return (
    <section className="impact-section">
      <div className={styles["landing-container"]}>
        <div className={styles["landing-headings"]}>
          <h2>Regional Impact Distribution</h2>
          <p>
            Explore the geographic breakdown of our initiatives and their
            outcomes.
          </p>
        </div>

        <div className="content-area">
          <div className="d-flex justify-content-center">
            <div className="row d-flex justify-content-center align-items-center g-5">
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
          </div>
        </div>
        <div className="circles-overlay" ref={circlesOverlayRef}>
          {/* Circles generated by JavaScript */}
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
    </section>
  );
}
