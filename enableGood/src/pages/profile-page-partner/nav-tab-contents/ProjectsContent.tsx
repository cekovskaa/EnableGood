import PhotoShowcase from "../../../components/ui/PhotoShowcase";
import styles from "./NavContent.module.css";

const projects = [
  {
    title: "Safe Waters",
    partner: "PepsiCo Foundation",
    category: "Water",
    description:
      "Building clean water systems in drought-affected communities.",
    progress: 80,
    logo: "/src/assets/images-account/shell-logo.png",
    link: "#",
  },
  {
    title: "Stronger Shelters",
    partner: "UPS",
    category: "Relief",
    description:
      "Rapid deployment of emergency shelters after natural disasters.",
    progress: 80,
    logo: "/src/assets/images-account/social-org-logo.png",
    link: "#",
  },
  {
    title: "Her Health First",
    partner: "Pfizer",
    category: "Health",
    description:
      "Expanding access to reproductive and maternal healthcare services.",
    progress: 80,
    logo: "/src/assets/images-account/company-random-logo.png",
    link: "#",
  },
  {
    title: "Voices Rising",
    partner: "Mastercard Center",
    category: "Finance",
    description:
      "Financial literacy programs and mobile banking solutions for women entrepreneurs.",
    progress: 80,
    logo: "/src/assets/images-account/lego-logo.png",
    link: "#",
  },
  {
    title: "Harvest Futures",
    partner: "Cargill",
    category: "Agriculture",
    description: "Sustainable farming techniques and climate-resilient crops.",
    progress: 80,
    logo: "/src/assets/images-account/business-tagline-logo.png",
    link: "#",
  },
  {
    title: "Code for Her",
    partner: "Microsoft",
    category: "Education",
    description: "Digital skills training and technology access for girls.",
    progress: 80,
    logo: "/src/assets/images-account/microsoft-logo.png",
    link: "#",
  },
];

export default function ProjectsContent() {
  return (
    <>
      <div className={styles["projects-container"]}>
        <div className={styles["projects-grid"]}>
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className={styles["project-card"]}
            >
              <div className={styles["project-header"]}>
                <div className={styles["project-info"]}>
                  <h3 className={styles["project-title"]}>{project.title}</h3>
                  <p className={styles["project-partner"]}>
                    with {project.partner}
                  </p>
                  <p className={styles["project-category"]}>
                    {project.category}
                  </p>
                </div>
                <div className={styles["project-logo"]}>
                  <img src={project.logo} alt={project.partner} />
                </div>
              </div>

              <div className={styles["project-progress-section"]}>
                <div className={styles["project-progress-bar"]}>
                  <div
                    className={styles["project-progress-fill"]}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <span className={styles["project-progress-text"]}>
                  {project.progress}%
                </span>
              </div>

              <div className={styles["project-footer"]}>
                <p className={styles["project-description"]}>
                  {project.description}
                </p>
                <div className={styles["project-arrow"]}>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <PhotoShowcase />
    </>
  );
}
