import CallToAction from "../../components/ui/CallToAction";
import Firms from "../../components/ui/Firms";
import TextImageBlock from "../../components/ui/TextImageBlock";
import {
  founderCeo,
  ourSolution,
  problemSolveBlock,
} from "../../data/contentBlocksData";
import styles from "./AboutUsPage.module.css";

const AboutHero = () => (
  <section className={styles["about-section"]}>
    <div className={styles["about-container"]}>
      <div className="row d-flex justify-content-center align-items-center g-5">
        <div className="col-12 col-md-7">
          <h1 className={`${styles["about-heading"]} mb-4`}>
            At Enable Good, we started with a simple question: What if doing
            good didn't have to be so hard?
          </h1>
          <p className={`${styles["about-paragrapgh"]} mb-4`}>
            We saw a world full of companies eager to make a difference — not
            just in profits, but in people's lives and the planet's future. We
            saw NGOs doing the hard, important work on the ground, often with
            too few resources and too little visibility.
            <br /> But between them, there was a gap.
            <br /> Too much friction. Too many emails.
            <br />
            Too many mismatched goals and unclear expectations.
          </p>

          <h3 className={`${styles["about-smaller-heading"]} mb-3`}>
            We exist to close the gap.
          </h3>

          <p className={styles["about-paragrapgh"]}>
            Enable Good was built to be the bridge — a platform that makes
            meaningful partnerships not only possible, but effortless. We
            connect companies with NGOs who share their values, and we equip
            both sides with the tools to collaborate, track progress, and tell
            powerful stories of real-world impact. This isn't just about
            checkboxes or compliance.
            <br /> It's about doing ESG the way it was meant to be with heart,
            clarity, and purpose.
          </p>

          <p className={styles["about-paragrapgh"]}>
            We believe that doing good should feel good — energizing,
            empowering, and honest. That's why we're here: to make the good work
            easier, more visible, and more impactful for everyone involved.
            <br /> Together, we can build a future where purpose leads the way —
            one partnership at a time.
          </p>
        </div>

        <div className="col-12 col-md-5">
          <div className={styles["about-img-container"]}>
            <img
              src="/src/assets/images/about-us-hero.png"
              alt="About us image"
              className={styles["about-us-image"]}
            />
            <img
              src="/src/assets/images/testimonials-circles.png"
              alt="Design circles"
              className={styles["about-circle-design"]}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SecondSection = () => {
  const values = [
    {
      image: "/src/assets/images/about-circle1.png",
      label: "Kindness",
      alt: "Kindness image",
    },
    {
      image: "/src/assets/images/about-circle2.png",
      label: "Integrity",
      alt: "Integrity image",
    },
    {
      image: "/src/assets/images/about-circle3.png",
      label: "Respect",
      alt: "Respect image",
    },
    {
      image: "/src/assets/images/about-circle4.png",
      label: "Inclusivity",
      alt: "Inclusivity image",
    },
    {
      image: "/src/assets/images/about-circle5.png",
      label: "Transparency",
      alt: "Transparency image",
    },
  ];

  return (
    <section className={styles["second-about-section"]}>
      {/* Background decorative circles */}
      <div className={styles["background-circles"]}>
        {Array.from({ length: 8 }, (_, index) => (
          <div key={index} className={styles["background-circle"]}></div>
        ))}
      </div>

      <div className={styles["second-container"]}>
        <div className={`${styles["second-section-heading"]} text-center`}>
          <h2>Core Values at Enable Good</h2>
          <p>
            Together, these values define how we show up—for each other, our
            partners, and the world.
          </p>
        </div>
        <div className="row justify-content-around">
          {values.map((value, index) => (
            <div
              key={index}
              className="col-12 col-md-2 d-flex justify-content-center g-5 g-md-0"
            >
              <div className={styles["value-card"]}>
                <img
                  src={value.image}
                  alt={value.alt}
                  className={styles["about-circle-img"]}
                />
                <div className={styles["value-overlay"]}>
                  <span className={styles["value-label"]}>{value.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MainContent = () => (
  <section className={styles["main-section"]}>
    <div className={styles["about-container"]}>
      <TextImageBlock
        {...problemSolveBlock}
        className={styles["custom-padding"]}
        imageClassName={styles["about-us-image"]}
      />

      <TextImageBlock
        {...ourSolution}
        className={styles["custom-padding"]}
        imageClassName={styles["about-us-image"]}
      />

      <TextImageBlock
        {...founderCeo}
        className={`${styles["custom-padding"]} founder-row`}
        imageClassName={styles["founder-image"]}
      />
      <div className={styles["circle-design-wrapper"]}>
        <img
          src="/src/assets/images/circle-design2.png"
          alt="Circle design image"
          className={styles["circle2-design-img"]}
        />
        <img
          src="/src/assets/images/circle-design1.png"
          alt="Circle design image"
          className={styles["circle1-design-img"]}
        />
      </div>
    </div>
  </section>
);

const FourthSection = () => (
  <section className={styles["fourth-about-section"]}>
    <div className="container-80">
      <div className="text-center pb-md-5">
        <h2 className={styles["fourth-heading"]}>Impact So Far</h2>
        <p className={styles["fourth-p"]}>
          120+ partnerships formed between companies and NGOs
        </p>
      </div>
      <div className="about-container-firm">
        <Firms isBlackLogos={true} />
      </div>
    </div>
  </section>
);

const ActionAbout = () => (
  <section className={styles["action-section-about"]}>
    <CallToAction
      paragraph="Or just curious how you could team up for good? Let's explore what's possible together."
      primaryButton={{
        text: "Learn more",
        to: "/learn-more",
      }}
    />
  </section>
);

export default function AboutUsPage() {
  return (
    <>
      <AboutHero />
      <SecondSection />
      <MainContent />
      <FourthSection />
      <ActionAbout />
    </>
  );
}
