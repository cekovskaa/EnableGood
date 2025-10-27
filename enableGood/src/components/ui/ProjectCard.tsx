import type { Project, ProjectCardVariant } from "../../types/types";
import "../../styles/ProjectsFilter.css";

interface ProjectCardProps extends ProjectCardVariant {
  project: Project;
}

export default function ProjectCard({
  project,
  variant,
  isClickable = false,
  onClick,
}: ProjectCardProps) {
  const cardClassName =
    variant === "authorized" ? "project-card-account" : "project-card";

  const handleClick = () => {
    if (isClickable && onClick) {
      onClick(project);
    }
  };

  return (
    <div
      className={cardClassName}
      onClick={handleClick}
      style={{ cursor: isClickable ? "pointer" : "default" }}
    >
      <div className="project-header">
        {project.esgGoals.map((g) => (
          <span key={g} className="badges me-2">
            {g}
          </span>
        ))}
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <div className="partners">
        <p className="mb-0">Partners: </p>
        {project.partners.map((partner) => (
          <img
            key={partner}
            src={`/src/assets/images/${partner}`}
            alt={`${partner.replace("-logo.png", "")} logo`}
            className="partner-logo"
          />
        ))}
      </div>

      <p className="project-impact">
        <strong>Impact:</strong> {project.impact.join(" | ")}
      </p>

      <div className="d-flex justify-content-end align-items-center view-link-wrapper">
        <a
          href={isClickable ? "#" : undefined}
          className="view-link"
          onClick={(e) => {
            if (isClickable) {
              e.preventDefault();
              handleClick();
            }
          }}
        >
          View Project <i className="fa-solid fa-arrow-right ms-2"></i>
        </a>
      </div>
    </div>
  );
}
