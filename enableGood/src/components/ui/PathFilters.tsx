import { useState } from "react";
import "../../styles/LearnMore.css";

const filters = {
  format: ["Guides Project Type", "Videos", "Tools", "Explainers"],
  for: ["Companies", "NGOs", "Just exploring"],
  esg: ["Environmental", "Social", "Governance"],
};

interface PathFiltersProps {
  containerClass?: string;
}

export default function PathFilters({
  containerClass = "container-80",
}: PathFiltersProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setSelected((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="path-filters">
      <div className={containerClass}>
        <h2>Pick Your Path to Impact</h2>

        <div className="filter-group">
          <button className="filter-label">
            Format <i className="fa-solid fa-chevron-right ms-2"></i>
          </button>
          {filters.format.map((item) => (
            <button
              key={item}
              className={`filter-btn ${
                selected.includes(item) ? "selected" : ""
              }`}
              onClick={() => toggleFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="filter-group">
          <button className="filter-label">
            For <i className="fa-solid fa-chevron-right ms-2"></i>
          </button>
          {filters.for.map((item) => (
            <button
              key={item}
              className={`filter-btn ${
                selected.includes(item) ? "selected" : ""
              }`}
              onClick={() => toggleFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="filter-group">
          <button className="filter-label">
            ESG Pillar <i className="fa-solid fa-chevron-right ms-2"></i>
          </button>
          {filters.esg.map((item) => (
            <button
              key={item}
              className={`filter-btn ${
                selected.includes(item) ? "selected" : ""
              }`}
              onClick={() => toggleFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
