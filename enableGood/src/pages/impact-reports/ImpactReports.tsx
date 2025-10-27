import { Link } from "react-router-dom";
import "../../styles/AccountStyles.css";
import { useState } from "react";
import ReportCards from "../../components/ui/ReportCards";
import ReportMap from "../../components/ui/ReportMap";
import styles from "./ImpactReports.module.css";

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

export default function ImpactReports() {
  const [activeRange, setActiveRange] = useState("Today");
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const ranges = [
    "Today",
    "Yesterday",
    "Last 7 days",
    "Last 30 days",
    "Last 60 days",
  ];

  const handleRangeClick = (range: string) => {
    setActiveRange(range);
    setIsExpanded(false);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="general-section">
      {/* Heading Row */}
      <div className="row">
        <div className="col-12">
          <div className="general-heading">
            <h1 className="general-title">
              <i className="fa-regular fa-newspaper me-2"></i> Impact Reports
            </h1>
            <div className="general-icons">
              <i className="fa-solid fa-bell"></i>
              <Link className="text-decoration-none ms-3" to="/messages">
                <i className="fa-regular fa-message message-icon"></i>
              </Link>
            </div>
          </div>
          <h2 className={styles["impact-heading"]}>
            Take a look at all the <span className="fw-bold">Good</span> we are
            doing together
          </h2>
        </div>
      </div>

      <div className={styles["reports-container"]}>
        {/* Search Bar */}
        <div className={styles["search-container"]}>
          <div className={styles["search-wrapper"]}>
            <input
              type="text"
              className={styles["search-input"]}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder=""
            />
            <button className={styles["search-button"]}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <p className={styles["search-label"]}>
            Search by keyword, company, or NGO
          </p>
        </div>

        {/* Path filter with expansion */}
        <div className={styles["filter-section"]}>
          <div className={styles["range-filter-container"]}>
            {!isExpanded ? (
              <button
                className={styles["range-button-collapsed"]}
                onClick={toggleExpanded}
              >
                <span>{activeRange}</span>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            ) : (
              <div className={styles["range-buttons-expanded"]}>
                <button
                  className={styles["collapse-button"]}
                  onClick={toggleExpanded}
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                {ranges.map((range, idx) => (
                  <button
                    key={idx}
                    className={`${styles["range-button"]} ${
                      activeRange === range ? styles["range-button-active"] : ""
                    }`}
                    onClick={() => handleRangeClick(range)}
                  >
                    {range}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Action buttons */}
          <div className={styles["action-buttons"]}>
            <button className={styles["clear-button"]}>Clear</button>
            <button className={styles["apply-button"]}>Apply</button>
          </div>
        </div>

        {/* Filter dropdowns */}
        <div className={styles["dropdown-filters"]}>
          <div className={styles["filter-dropdown"]}>
            <button
              className={styles["dropdown-button"]}
              type="button"
              data-bs-toggle="dropdown"
            >
              <span>
                <strong>ESG</strong> goals
              </span>
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <ul className="dropdown-menu">
              {esgOptions.map((opt, i) => (
                <li key={i}>
                  <a className="dropdown-item" href="#">
                    {opt}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles["filter-dropdown"]}>
            <button
              className={styles["dropdown-button"]}
              type="button"
              data-bs-toggle="dropdown"
            >
              <span>
                <strong>SDG</strong> goals
              </span>
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <ul className="dropdown-menu">
              {sdgOptions.map((opt, i) => (
                <li key={i}>
                  <a className="dropdown-item" href="#">
                    {opt}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles["filter-dropdown"]}>
            <button
              className={styles["dropdown-button"]}
              type="button"
              data-bs-toggle="dropdown"
            >
              <span>
                Filter <strong>Industries</strong>
              </span>
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <ul className="dropdown-menu">
              {industries.map((opt, i) => (
                <li key={i}>
                  <a className="dropdown-item" href="#">
                    {opt}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles["filter-dropdown"]}>
            <button
              className={styles["dropdown-button"]}
              type="button"
              data-bs-toggle="dropdown"
            >
              <span>
                Filter <strong>Projects</strong>
              </span>
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <ul className="dropdown-menu">
              {projectTypes.map((opt, i) => (
                <li key={i}>
                  <a className="dropdown-item" href="#">
                    {opt}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles["filter-dropdown"]}>
            <button
              className={styles["dropdown-button"]}
              type="button"
              data-bs-toggle="dropdown"
            >
              <span>
                Filter <strong>Partners</strong>
              </span>
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <ul className="dropdown-menu">
              {partnerOptions.map((opt, i) => (
                <li key={i}>
                  <a className="dropdown-item" href="#">
                    {opt}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <ReportCards />
      <ReportMap />
    </div>
  );
}
