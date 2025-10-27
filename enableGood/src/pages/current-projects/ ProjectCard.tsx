import React from "react";
import styles from "./CurrentProjects.module.css";
import type { NewProject } from "../../types/types"; // Adjust path as needed

// Omit 'id' since we don't need it for the component props
type ProjectCardProps = Omit<NewProject, "id">;

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  tagText,
  tagClass,
  title,
  description,
}) => {
  return (
    <div className={styles["project-card"]}>
      <div className={styles["project-image"]}>
        <img src={imageSrc} alt={title} />
      </div>
      <span className={`${styles["project-tag"]} ${styles[tagClass]}`}>
        <i className="fa-solid fa-star"></i> {tagText}
      </span>

      <div className={styles["project-info"]}>
        <h4 className={styles["project-title"]}>{title}</h4>
        <p className={styles["project-description"]}>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
