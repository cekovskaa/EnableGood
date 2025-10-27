import styles from "./NavContent.module.css";

const focusAreas = [
  {
    title: "HUMAN RIGHTS",
    description:
      "We advocate for social justice and inclusive policies that uphold human dignity, protect vulnerable populations, and ensure equitable access to resources.",
    bgColor: "#086A75",
  },
  {
    title: "ENVIRONMENT",
    description:
      "We support communities in building resilience for climate change, conserving ecosystems, and promoting sustainable practices through local innovation.",
    bgColor: "#F6DED4",
    textColor: "#000",
  },
  {
    title: "CLIMATE JUSTICE",
    description:
      "Climate change affects the most vulnerable first. We work to ensure that marginalized communities have a voice in climate decisions and access to resources.",
    bgColor: "#CEEFC2",
    textColor: "#000",
  },
  {
    title: "EDUCATION",
    description:
      "From early childhood learning to adult literacy, we create access to quality education that empowers people to change their future.",
    bgColor: "#F3E391",
    textColor: "#000",
  },
  {
    title: "FOOD SECURITY",
    description:
      "We tackle hunger by promoting sustainable agriculture, improving nutrition, and strengthening food systems in crisis-affected regions.",
    bgColor: "#F47D6A",
  },
  {
    title: "HEALTH & WELLBEING",
    description:
      "We provide essential health services, reproductive care, and hygiene education, focusing on the unique needs of women and girls.",
    bgColor: "#012960",
  },
];

export default function OurWorkContent() {
  return (
    <>
      {/* Content Area */}
      <div className={styles["focus-content"]}>
        <h2 className={styles["focus-title"]}>Our Key Focus Areas</h2>
        <p className={styles["focus-subtitle"]}>
          We work across diverse sectors to address the root causes of poverty
          and create lasting change.
        </p>

        {/* Focus Area Cards */}
        <div className="row g-4 mt-4">
          {focusAreas.map((area, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div
                className={styles["focus-card"]}
                style={{
                  backgroundColor: area.bgColor,
                  color: area.textColor || "#fff",
                }}
              >
                <h3 className={styles["focus-card-title"]}>{area.title}</h3>
                <p className={styles["focus-card-desc"]}>{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Performance Indicators Card */}
      <div className="row mt-md-5">
        <div className="col-12">
          <div className="container-90">
            <div className={styles["kpi-card"]}>
              <h2 className={styles["kpi-title"]}>
                Key Performance Indicators
              </h2>

              <div className={styles["kpi-item"]}>
                <div className={styles["kpi-icon"]}>
                  <i className="fa-solid fa-check"></i>
                </div>
                <div className={styles["kpi-content"]}>
                  <h3 className={styles["kpi-heading"]}>
                    Women-led initiatives supported
                  </h3>
                  <p className={styles["kpi-text"]}>
                    78% of our development programs are led or co-designed by
                    women in local communities.
                  </p>
                </div>
              </div>

              <div className={styles["kpi-item"]}>
                <div className={styles["kpi-icon"]}>
                  <i className="fa-solid fa-check"></i>
                </div>
                <div className={styles["kpi-content"]}>
                  <h3 className={styles["kpi-heading"]}>
                    Access to essential services
                  </h3>
                  <p className={styles["kpi-text"]}>
                    Over 12 million people gained access to clean water,
                    healthcare, or education in the past year.
                  </p>
                </div>
              </div>

              <div className={styles["kpi-item"]}>
                <div className={styles["kpi-icon"]}>
                  <i className="fa-solid fa-check"></i>
                </div>
                <div className={styles["kpi-content"]}>
                  <h3 className={styles["kpi-heading"]}>
                    Local partnerships established
                  </h3>
                  <p className={styles["kpi-text"]}>
                    CARE collaborates with 1250+ local organizations to ensure
                    sustainable community-driven impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Voices from the Field Section */}
      <section className={styles["ourwork-voices-section"]}>
        <div className={styles["ourwork-voices-header"]}>
          <h1 className={styles["ourwork-voices-title"]}>
            Voices from the Field
          </h1>
          <p className={styles["ourwork-voices-subtitle"]}>
            Stories and testimonials from the people and communities at the
            heart of our mission.
          </p>
        </div>

        <div className={styles["ourwork-voices-container"]}>
          {/* First Testimonial */}
          <div className={styles["ourwork-voices-item"]}>
            <div className={styles["ourwork-voices-image-wrapper"]}>
              <img
                src="/src/assets/images-account/photo-showcase4.png"
                alt="Fatima, CARE beneficiary in Mozambique"
                className={styles["ourwork-voices-image"]}
              />
            </div>
            <div className={styles["ourwork-voices-content"]}>
              <p className={styles["ourwork-voices-quote"]}>
                "CARE helped me start my own small farm and feed my family after
                the floods. I never thought I could become a provider again."
              </p>
              <p className={styles["ourwork-voices-author"]}>
                – Fatima, CARE beneficiary in Mozambique
              </p>
            </div>
          </div>

          {/* Second Testimonial */}
          <div className={styles["ourwork-voices-item"]}>
            <div className={styles["ourwork-voices-image-wrapper"]}>
              <img
                src="/src/assets/images-account/photo-showcase3.png"
                alt="Samuel, community member in northern India"
                className={styles["ourwork-voices-image"]}
              />
            </div>
            <div className={styles["ourwork-voices-content"]}>
              <p className={styles["ourwork-voices-quote"]}>
                "Before CARE arrived, we had no access to clean water. Now, not
                only do we have a well in our village, but we also know how to
                maintain it. It changed our daily life."
              </p>
              <p className={styles["ourwork-voices-author"]}>
                – Samuel, community member in northern India
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
