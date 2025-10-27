import { Link } from "react-router-dom";
import SecondCards from "../../components/landingPage/SecondCards";
import SubscriptionSection from "../../components/landingPage/SubscriptionSection";
import CallToAction from "../../components/ui/CallToAction";
import Testimonials from "../../components/ui/Testimonials";
import { testimonialsData } from "../../data/testimonials-data";

import styles from "./LandingPage.module.css";
import Impact from "../../components/landingPage/Impact-alternate";

const Hero = () => (
  <section className={styles["hero-section"]}>
    <div className={styles["hero-container"]}>
      <div className="row align-items-center">
        <div className="col-12 col-md-6">
          <h1 className={`${styles["hero-heading"]} mb-4 mb-md-3 mt-md-4`}>
            Creating Pathways for Impact
          </h1>
          <div className={styles["p-wrapper"]}>
            <p>
              Connecting Organizations with impactful projects. Build
              partnerships that create lasting change in communities worldwide.
            </p>
          </div>
          <div
            className={`${styles["hero-buttons"]} d-flex align-items-center gap-2 justify-content-start `}
          >
            <Link
              className={`${styles["primary-button"]} ${styles["hero-button-custom"]} text-decoration-none`}
              to="/onboarding/role"
            >
              Find your next partner
            </Link>

            <Link
              className={`${styles["secondary-button"]} ${styles["hero-button-custom"]} text-decoration-none`}
              to="/learn-more"
            >
              Learn More
            </Link>
          </div>
          <p className={styles["hero-span"]}>
            Join 500+ organizations already making an impact
          </p>
        </div>

        <div
          className={`${styles["hero-image-mobile"]} col-12 col-md-6 mt-5 mt-md-0 `}
        >
          <img
            src="/images/hero-image.png"
            alt="Hero image"
            className={styles["hero-image"]}
          />
        </div>
      </div>
    </div>
  </section>
);

const Third = () => (
  <section className={styles["third-section"]}>
    <div className={styles["landing-container"]}>
      <div className={styles["landing-headings"]}>
        <h2>Powerful Solutions for NGOs and Companies</h2>
        <p>
          We provide tailored platforms for both non-profits seeking support and
          companies looking to make a difference.
        </p>
      </div>
      <div className="row g-4">
        <div className="col-12 col-md-6">
          <div className={`card ${styles["card-teal-bg"]}`}>
            <div className="card-body">
              <h5 className="card-title">FOR NGOs & NON PROFITS</h5>
              <div className="card-text mb-4 mb-md-0">
                <ul className="list-unstyled mb-0">
                  <li>
                    {" "}
                    <i className="fa-regular fa-circle-check"></i> Project
                    Showcase
                  </li>
                  <li>
                    <i className="fa-regular fa-circle-check"></i> Resource
                    Access
                  </li>
                  <li>
                    <i className="fa-regular fa-circle-check"></i> Impact
                    Measurement
                  </li>
                  <li>
                    <i className="fa-regular fa-circle-check"></i> Partner
                    Matching
                  </li>
                </ul>
              </div>
              <div className="d-flex justify-content-end">
                <Link
                  className={`${styles["learn-more-button-yellow"]} text-decoration-none`}
                  to="/learn-more"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className={`card ${styles["card-blue-bg"]}`}>
            <div className="card-body">
              <h5 className="card-title ">FOR COMPANIES</h5>
              <div className="card-text mb-4 mb-md-0">
                <ul className="list-unstyled mb-0">
                  <li>
                    {" "}
                    <i className="fa-regular fa-circle-check"></i> Project
                    Showcase
                  </li>
                  <li>
                    <i className="fa-regular fa-circle-check"></i> Resource
                    Access
                  </li>
                  <li>
                    <i className="fa-regular fa-circle-check"></i> Impact
                    Measurement
                  </li>
                  <li>
                    <i className="fa-regular fa-circle-check"></i> Partner
                    Matching
                  </li>
                </ul>
              </div>
              <div className="d-flex justify-content-end">
                <Link
                  className={`${styles["learn-more-button-yellow"]} text-decoration-none`}
                  to="/learn-more"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Fourth = () => (
  <section className={styles["fourth-section"]}>
    <div className={styles["landing-container"]}>
      <div className={styles["landing-headings"]}>
        <h2>How Enable Good works</h2>
        <div className="wrapper-60">
          <p>
            Our stremlined process makes it easy for companies to find, connect
            and collaborate with NGOs that align with their ESG goals
          </p>
        </div>
      </div>
    </div>
    <div className={styles["fourth-section-container"]}>
      <div className={styles["horizontal-scroll-container"]}>
        <div className={styles["horizontal-cards-wrapper"]}>
          {/* <!-- Card 1 --> */}
          <div className={styles["scroll-card"]}>
            <img src="/images/Image1.png" alt="Define ESG Goals" />
            <div className={styles["scroll-card-body"]}>
              <h3>Define your ESG goals</h3>
              <p>
                Identify your sustainability priorities and ESG KPIs within the
                platform
              </p>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div className={styles["scroll-card"]}>
            <img src="/images/Image2.png" alt="Discover NGOs" />
            <div className={styles["scroll-card-body"]}>
              <h3>Discover compatible NGOs</h3>
              <p>
                Browse through verified NGO profiles that match your values and
                objectives
              </p>
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div className={styles["scroll-card"]}>
            <img
              src="/images/image3.jpg"
              alt="Connect and Collaborate"
            />
            <div className={styles["scroll-card-body"]}>
              <h3>Connect and Collaborate</h3>
              <p>
                Establish partnerships and begin working together on meaningful
                ESG initiatives
              </p>
            </div>
          </div>

          {/* <!-- Card 4 --> */}
          <div className={styles["scroll-card"]}>
            <img src="/images/image4.jpg" alt="Track Impact" />
            <div className={styles["scroll-card-body"]}>
              <h3>Track and Report Impact</h3>
              <p>
                Monitor progress and generate comprehensive reports on your ESG
                achievements
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Action = () => (
  <section className="action-section">
    <CallToAction
      paragraph="Join Enable Good and be part of a growing community creating meaningful change through strategic partnerships. "
      primaryButton={{
        text: "Explore Projects",
        to: "/explore",
      }}
      showFirms={true}
    />
  </section>
);

export default function LandingPage() {
  return (
    <>
      <Hero />
      <SecondCards />
      <Third />
      <Fourth />
      <Impact />
      <Action />
      <SubscriptionSection />
      <Testimonials testimonials={testimonialsData} />
    </>
  );
}
