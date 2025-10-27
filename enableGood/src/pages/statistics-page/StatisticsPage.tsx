import { Link } from "react-router-dom";
import "../../styles/AccountStyles.css";
import styles from "./StatisticsPage.module.css";

import DonutChart from "../../components/statistics/DonutChart";
import BarChart from "../../components/ui/BarChart";

export default function StatisticsPage() {
  // Project data
  const projects = [
    {
      name: "Youtube",
      kpi1: 60,
      kpi2: 20,
      kpi3: 80,
      color1: "green",
      color2: "green",
      color3: "green",
    },
    {
      name: "Youtube",
      kpi1: 60,
      kpi2: 0,
      kpi3: 0,
      color1: "blue",
      color2: "gray",
      color3: "gray",
    },
    {
      name: "Youtube",
      kpi1: 40,
      kpi2: 0,
      kpi3: 60,
      color1: "green",
      color2: "gray",
      color3: "green",
    },
    {
      name: "Youtube",
      kpi1: 100,
      kpi2: 20,
      kpi3: 20,
      color1: "red",
      color2: "red",
      color3: "red",
    },
    {
      name: "Youtube",
      kpi1: 20,
      kpi2: 40,
      kpi3: 20,
      color1: "green",
      color2: "green",
      color3: "green",
    },
    {
      name: "Youtube",
      kpi1: 40,
      kpi2: 80,
      kpi3: 20,
      color1: "blue",
      color2: "blue",
      color3: "blue",
    },
    {
      name: "Youtube",
      kpi1: 20,
      kpi2: 40,
      kpi3: 60,
      color1: "green",
      color2: "green",
      color3: "green",
    },
  ];

  return (
    <div className="general-section">
      {/* Heading Row */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="general-heading">
            <h1 className="general-title">
              <i className="fa-solid fa-chart-simple me-2"></i> Statistics
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

      {/* Statistics Grid - Bootstrap Layout */}
      <div className="row g-3">
        {/* Left Column */}
        <div className="col-12 col-xl-6">
          <div className="row g-3">
            {/* Monthly Investment Statistics */}
            <div className="col-12">
              <div className={styles["stat-card"]}>
                <div className={styles["card-header"]}>
                  <span className={styles["card-label"]}>Statistics</span>
                  <h3 className={styles["card-title"]}>
                    Monthly investment statistics
                  </h3>
                </div>

                {/* Highcharts Chart */}
                <div className="bar-chart-wrapper">
                  <BarChart />
                </div>
              </div>
            </div>

            {/* Projects Table */}
            <div className="col-12">
              <div className={styles["stat-card"]}>
                <div className={styles["projects-table"]}>
                  <div className={styles["table-header"]}>
                    <div className={styles["table-header-cell"]}>
                      Company <i className="fa-solid fa-chevron-down ms-1"></i>
                    </div>
                    <div className={styles["table-header-cell"]}>
                      KPI 1 <i className="fa-solid fa-chevron-down ms-1"></i>
                    </div>
                    <div className={styles["table-header-cell"]}>
                      KPI 2 <i className="fa-solid fa-chevron-down ms-1"></i>
                    </div>
                    <div className={styles["table-header-cell"]}>
                      KPI 3 <i className="fa-solid fa-chevron-down ms-1"></i>
                    </div>
                  </div>
                  {projects.map((project, index) => (
                    <div key={index} className={styles["table-row"]}>
                      <div className={styles["table-cell"]}>
                        <i className="fa-brands fa-youtube me-2"></i>
                        <div>
                          <div className={styles["project-name"]}>
                            {project.name}
                          </div>
                          <div className={styles["project-desc"]}>
                            Project description
                          </div>
                        </div>
                      </div>
                      <div className={styles["table-cell"]}>
                        <span className={styles["kpi-value"]}>
                          {project.kpi1}%
                        </span>
                        <div className={styles["progress-bar"]}>
                          <div
                            className={`${styles["progress-fill"]} ${
                              styles[`progress-${project.color1}`]
                            }`}
                            style={{ width: `${project.kpi1}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className={styles["table-cell"]}>
                        <span className={styles["kpi-value"]}>
                          {project.kpi2}%
                        </span>
                        <div className={styles["progress-bar"]}>
                          <div
                            className={`${styles["progress-fill"]} ${
                              styles[`progress-${project.color2}`]
                            }`}
                            style={{ width: `${project.kpi2}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className={styles["table-cell"]}>
                        <span className={styles["kpi-value"]}>
                          {project.kpi3}%
                        </span>
                        <div className={styles["progress-bar"]}>
                          <div
                            className={`${styles["progress-fill"]} ${
                              styles[`progress-${project.color3}`]
                            }`}
                            style={{ width: `${project.kpi3}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <a href="#" className={styles["see-all-link"]}>
                  See all projects{" "}
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-12 col-xl-6">
          <div className="row g-3">
            {/* Monthly Activity */}
            <div className="col-12">
              <DonutChart className="d-flex flex-column flex-md-row align-items-center" />
            </div>

            {/* Reviews Qualification */}
            <div className="col-12">
              <div className={styles["stat-card"]}>
                <div className={styles["card-header"]}>
                  <span className={styles["card-label"]}>Community</span>
                  <h3 className={styles["card-title"]}>
                    Reviews qualification
                  </h3>
                </div>
                <div className={styles["reviews-bars"]}>
                  <div
                    className={`${styles["review-bar"]} ${styles["bar-red"]}`}
                  ></div>
                  <div
                    className={`${styles["review-bar"]} ${styles["bar-yellow"]}`}
                  ></div>
                  <div
                    className={`${styles["review-bar"]} ${styles["bar-green"]}`}
                  ></div>
                </div>
                <div className={styles["reviews-legend"]}>
                  <div className={styles["review-item"]}>
                    <span className={styles["review-label"]}>Negative</span>
                    <span className={styles["review-value"]}>
                      <span
                        className={`${styles["review-dot"]} ${styles["dot-red"]}`}
                      ></span>{" "}
                      16
                    </span>
                  </div>
                  <div className={styles["review-item"]}>
                    <span className={styles["review-label"]}>Neutral</span>
                    <span className={styles["review-value"]}>
                      <span
                        className={`${styles["review-dot"]} ${styles["dot-yellow"]}`}
                      ></span>{" "}
                      45
                    </span>
                  </div>
                  <div className={styles["review-item"]}>
                    <span className={styles["review-label"]}>Positive</span>
                    <span className={styles["review-value"]}>
                      <span
                        className={`${styles["review-dot"]} ${styles["dot-green"]}`}
                      ></span>{" "}
                      2,113
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ESG Goals Investment */}
            <div className="col-12">
              <div className={styles["stat-card"]}>
                <div className={styles["card-header"]}>
                  <h3 className={styles["card-title"]}>ESG goals investment</h3>
                </div>
                <div className={styles["bubble-chart"]}>
                  <div
                    className={`${styles["bubble"]} ${styles["bubble-blue"]}`}
                  >
                    <span className={styles["bubble-value"]}>70%</span>
                  </div>
                  <div
                    className={`${styles["bubble"]} ${styles["bubble-green"]}`}
                  >
                    <span className={styles["bubble-value"]}>20%</span>
                  </div>
                  <div
                    className={`${styles["bubble"]} ${styles["bubble-red"]}`}
                  >
                    <span className={styles["bubble-value"]}>10%</span>
                  </div>
                </div>
                <div className={styles["esg-legend"]}>
                  <div className={styles["esg-item"]}>
                    <span
                      className={`${styles["esg-dot"]} ${styles["dot-blue"]}`}
                    ></span>
                    <span>Social</span>
                  </div>
                  <div className={styles["esg-item"]}>
                    <span
                      className={`${styles["esg-dot"]} ${styles["dot-green"]}`}
                    ></span>
                    <span>Environmental</span>
                  </div>
                  <div className={styles["esg-item"]}>
                    <span
                      className={`${styles["esg-dot"]} ${styles["dot-red"]}`}
                    ></span>
                    <span>Governance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* See Full Report */}
            <div className="col-12">
              <div className={styles["stat-card"]}>
                <div className={styles["card-header"]}>
                  <h3 className={styles["card-title"]}>See full report</h3>
                </div>
                <p className={styles["report-text"]}>
                  Download a full report of all statistics from the previous
                  year in any format that suits your needs
                </p>
                <button className={`btn ${styles["download-btn"]}`}>
                  <i className="fa-solid fa-download me-2"></i> Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
