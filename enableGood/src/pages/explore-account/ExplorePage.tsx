import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import "../../styles/AccountStyles.css";
import ProjectsFilter from "../../components/ui/ProjectsFilter";
import type { Project, UserFilters } from "../../types/types";
import Firms from "../../components/ui/Firms";

export default function ExplorePage() {
  const { user, updateUser } = useAuthStore();
  const navigate = useNavigate();
  const [userFilters, setUserFilters] = useState<UserFilters>(
    user?.filters || {
      esg: "",
      sdg: "",
      industry: "",
      projectType: "",
      partner: "",
    }
  );

  const handleProjectClick = (project: Project) => {
    // Navigate to project overview page
    navigate(`/project-overview/${project.id}`, {
      state: { project },
    });
  };

  const handleFiltersChange = (filters: UserFilters) => {
    setUserFilters(filters);
    // Update user in store with new filters
    if (user) {
      updateUser({ ...user, filters });
    }
  };

  return (
    <div className="general-section">
      {/* Heading Row */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="general-heading">
            <h1 className="general-title">
              <i className="fa-solid fa-compass me-2"></i>Explore projects
            </h1>
            <div className="general-icons">
              <i className="fa-solid fa-bell"></i>
              <Link className="text-decoration-none ms-3" to="/messages">
                <i className="fa-regular fa-message message-icon"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <ProjectsFilter
        variant="authorized"
        onProjectClick={handleProjectClick}
        userFilters={userFilters}
        onFiltersChange={handleFiltersChange}
      />

      <div className="pt-md-2">
        <p className="small-text">
          Changemakers Around the Globe
        </p>
        <div className="mt-md-5">
          <Firms isBlackLogos={true} />
        </div>
      </div>
    </div>
  );
}
