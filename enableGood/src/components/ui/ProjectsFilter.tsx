import { useState, useEffect } from "react";
import { projects } from "../../data/projects";
import type { Project, UserFilters } from "../../types/types";
import "../../styles/ProjectsFilter.css";
import ProjectCarousel from "./ProjectCarousel";
import { Link } from "react-router-dom";

const esgOptions = ["Environmental", "Social", "Governence"];
const sdgOptions = [
  "Good Health and Well-Being",
  "Quality Education",
  "Clean Water and Sanitation",
  "Affordable and Clean Energy",
  "Climate Action",
  "Industry, Innovation and Infrastructure",
  "Responsible Consumption and Production",
  "Decent Work and Economic Growth",
  "Life on Land",
];
const industries = [
  "Agriculture",
  "Energy",
  "Infrastructure",
  "Manufacturing",
  "Education",
];
const projectTypes = [
  "Reforestation",
  "Renewable",
  "Water",
  "Innovation",
  "Community",
];
const partnerOptions = ["Companies", "Ngo", "Just exploring"];

const STORAGE_KEY = "projectFilters";

interface ProjectsFilterProps {
  variant?: "unauthorized" | "authorized";
  onProjectClick?: (project: Project) => void;
  userFilters?: UserFilters;
  onFiltersChange?: (filters: UserFilters) => void;
}

export default function ProjectsFilter({
  variant = "unauthorized",
  onProjectClick,
  userFilters,
  onFiltersChange,
}: ProjectsFilterProps) {
  const [showVideo, setShowVideo] = useState(false);

  const [filters, setFilters] = useState<UserFilters>({
    esg: "",
    sdg: "",
    industry: "",
    projectType: "",
    partner: "",
  });
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
    if (variant === "authorized" && userFilters) {
      // Use user's saved filters for authorized users
      setFilters(userFilters);
      applyFilters(userFilters);
    } else {
      // Use localStorage for unauthorized users
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setFilters(parsed);
        applyFilters(parsed);
      }
    }
  }, [variant, userFilters]);

  const applyFilters = (appliedFilters = filters) => {
    let result = projects;

    if (appliedFilters.esg && appliedFilters.esg !== "all")
      result = result.filter((p) => p.esgGoals.includes(appliedFilters.esg));

    if (appliedFilters.sdg && appliedFilters.sdg !== "all")
      result = result.filter((p) => p.sdgGoals.includes(appliedFilters.sdg));

    if (appliedFilters.industry && appliedFilters.industry !== "all")
      result = result.filter((p) => p.industry === appliedFilters.industry);

    if (appliedFilters.projectType && appliedFilters.projectType !== "all")
      result = result.filter(
        (p) => p.projectType === appliedFilters.projectType
      );

    if (appliedFilters.partner && appliedFilters.partner !== "all")
      result = result.filter((p) => p.partnerType === appliedFilters.partner);

    setFilteredProjects(result);

    if (variant === "authorized" && onFiltersChange) {
      // Save to user's profile for authorized users
      onFiltersChange(appliedFilters);
    } else {
      // Save to localStorage for unauthorized users
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appliedFilters));
    }
  };

  const clearFilters = () => {
    const reset = {
      esg: "",
      sdg: "",
      industry: "",
      projectType: "",
      partner: "",
    };
    setFilters(reset);
    setFilteredProjects(projects);
    
    if (variant === "authorized" && onFiltersChange) {
      // Clear user's saved filters for authorized users
      onFiltersChange(reset);
    } else {
      // Clear localStorage for unauthorized users
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const renderDropdown = (
    label: React.ReactNode,
    options: string[],
    key: keyof typeof filters,
    allLabel: string
  ) => (
    <div className="btn-group filter-dropdown">
      <button
        type="button"
        className="btn btn-outline-secondary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span>
          {filters[key] && filters[key] !== "all" ? filters[key] : label}
        </span>

        <i className="fa-solid fa-chevron-down ps-2"></i>
      </button>
      <ul className="dropdown-menu">
        {options.map((o) => (
          <li key={o}>
            <button
              className="dropdown-item"
              onClick={() => setFilters({ ...filters, [key]: o })}
            >
              {o}
            </button>
          </li>
        ))}
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={() => setFilters({ ...filters, [key]: "all" })}
          >
            {allLabel}
          </button>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="projects-filter-container">
      <div className="d-flex justify-content-between align-items-end mb-3">
        <div className="project-filters-headings">
          <h3>Customize Your View</h3>
          <p className="mt-md-2 mb-0">
            Use filters to explore relevant ESG collaborations.
          </p>
        </div>
        <div className="filter-buttons">
          <button className="btn btn-apply me-2 me-md-3" onClick={() => applyFilters()}>
            Apply
          </button>
          <button className="btn btn-clear" onClick={clearFilters}>
            Clear
          </button>
        </div>
      </div>

      <div className="filter-row">
        {renderDropdown(
          <>
            <strong>ESG</strong> goals
          </>,
          esgOptions,
          "esg",
          "All ESG Goals"
        )}
        {renderDropdown(
          <>
            <strong>SDG</strong> goals
          </>,
          sdgOptions,
          "sdg",
          "All SDG Goals"
        )}
        {renderDropdown(
          <>
            Filter <strong>Industries</strong>
          </>,
          industries,
          "industry",
          "All Industries"
        )}
        {renderDropdown(
          <>
            Filter <strong>Projects</strong>
          </>,
          projectTypes,
          "projectType",
          "All Projects"
        )}
        {renderDropdown(
          <>
            Filter <strong>Partners</strong>
          </>,
          partnerOptions,
          "partner",
          "All Partners"
        )}
      </div>

      <div className="project-overview">
        <div className="green-badges">
          <span className="badge-first">Environmental</span>
          <span className="badge-second">Climate action</span>
          <span className="badge-third">Completed</span>
        </div>
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <h2 className="w-75 mb-4">
              Reforesting Kenya: A Model for Scalable Impact
            </h2>
            <p className="mb-5">
              Impact:
              <span className="me-3 ms-3">500K trees</span>
              <span className="me-3">300 jobs</span>
              <span>Clean water</span>
            </p>

            <span className="small-span">
              Over 500K trees planted with 3 cross-sector partners
            </span>
            <div className="partners-logos d-flex justify-content-start align-items-center g-3">
              <img
                src="/images/cocacola-logo.png"
                alt="Cocacola logo"
              />
              <img src="/images/msf-logo.png" alt="Msf logo" />
              <img
                src="/images/stc-logo.png"
                alt="Save the children logo"
                className="stc-img"
              />
              <img
                src="/images/patagonia-logo.png"
                alt="Patagonia logo"
              />
            </div>
            <div className="view-partner-wrapper">
              <Link to="/profile-page" className="view-partner-link">
                View Partner
              </Link>
            </div>
          </div>

          <div className="col-12 col-md-6 mt-4 mt-md-0">
            <div className="video-container">
              {!showVideo ? (
                <>
                  <img
                    src="/images/explore-page-image.png"
                    alt="Video image"
                    className="project-image"
                  />
                  <i
                    className="fa-regular fa-circle-play play-icon"
                    onClick={() => setShowVideo(true)}
                  ></i>
                </>
              ) : (
                <div className="video-wrapper">
                  <button
                    className="close-video"
                    onClick={() => setShowVideo(false)}
                  >
                    ✕
                  </button>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/MLpWrANjFbI?si=_IGCNeVwUFms8rWm&autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <ProjectCarousel
        items={filteredProjects}
        variant={variant}
        onProjectClick={onProjectClick}
      />
    </div>
  );
}
