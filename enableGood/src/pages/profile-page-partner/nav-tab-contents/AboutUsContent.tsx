import styles from "./NavContent.module.css";

const whoWeArePoints = [
  "Responding to humanitarian emergencies with speed and compassion",
  "Supporting community-led development projects",
  "Empowering women and girls as agents of change",
  "Promoting resilience, education, and sustainable livelihoods",
];

const coreValues = [
  {
    title: "Commitment",
    description: "We are dedicated to making a lasting difference",
  },
  {
    title: "Integrity",
    description: "We act with honesty, responsibility, and accountability",
  },
  {
    title: "Empowerment",
    description: "We invest in people to lead their own futures",
  },
];

export default function AboutUsContent() {
  return (
    <div className={styles["about-container"]}>
      {/* Who We Are & Our Vision Section */}
      <div className={styles["about-intro-section"]}>
        <div className={styles["about-intro-content"]}>
          <div className={styles["about-intro-column"]}>
            <h2 className={styles["about-section-heading"]}>Who We Are</h2>
            <p className={styles["about-text"]}>
              CARE is a global humanitarian organization working in and
              alongside communities to overcome poverty, and social injustice.
              For over 75 years, we've been delivering aid, leading social
              justice, and championing dignity for all. Today, CARE works in
              more than 100 countries, in the lives of the world's most
              vulnerable communities. For over 75 years, we've been delivering
              aid, leading social justice, and championing dignity for all,
              reaching more than 100+ countries.
            </p>
          </div>
          <div className={styles["about-intro-column"]}>
            <h2 className={styles["about-section-heading"]}>Our Vision</h2>
            <p className={styles["about-text"]}>
              At CARE, we believe that when the most vulnerable are empowered,
              everyone benefits. That's why we seek a world where women and
              girls at the center—because a more just world begins with them and
              can't wait until justice is fully realized.
            </p>
          </div>
        </div>
        <div className={styles["about-intro-image"]}>
          <img
            src="/src/assets/images-account/photo-showcase1.png"
            alt="CARE Impact"
          />
        </div>
      </div>

      {/* Our Mission & Core Values */}
      <div className={styles["about-values-section"]}>
        <div className={styles["about-mission-card"]}>
          <h2 className={styles["about-card-heading"]}>Our Mission</h2>
          <p className={styles["about-card-text"]}>
            To serve individuals and families in the poorest communities,
            working together to achieve social justice
          </p>
          <ul className={styles["about-mission-list"]}>
            {whoWeArePoints.map((point, index) => (
              <li key={index} className={styles["about-mission-item"]}>
                <i className="fa-solid fa-check-circle"></i>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles["about-values-card"]}>
          <h2 className={styles["about-card-heading"]}>Our Core Values</h2>
          <p className={styles["about-card-text"]}>
            We strive to uphold respect, dignity and worth of every individual.
          </p>
          {coreValues.map((value, index) => (
            <div key={index} className={styles["about-value-item"]}>
              <h4 className={styles["about-value-title"]}>{value.title}</h4>
              <p className={styles["about-value-desc"]}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our History */}
      <div className={styles["about-history-section"]}>
        <h2 className={styles["about-section-heading"]}>Our History</h2>
        <p className={styles["about-history-text"]}>
          In 1945, CARE was founded to provide crucial aid to survivors of World
          War II when 22 American organizations came together to send lifesaving
          food relief—called "CARE Packages"—to war survivors in Europe. What
          started as a compassionate emergency response quickly grew into a
          global mission.
        </p>
        <p className={styles["about-history-text"]}>
          By the 1950s, CARE expanded its efforts worldwide—delivering food,
          water, shelter, and medical care to those most affected by poverty,
          conflict, and disaster. From crisis response to conflict zones to
          sustainable agriculture and girls' education, our work adapts to meet
          the world's most pressing challenges.
        </p>
        <p className={styles["about-history-text"]}>
          Today, CARE remains a global leader in the fight for equality—working
          hand in hand with communities to build a future where all people can
          thrive.
        </p>
        <div className={styles["about-history-image"]}>
          <img
            src="/src/assets/images-account/photo-showcase2.png"
            alt="CARE History"
          />
        </div>
      </div>
    </div>
  );
}
