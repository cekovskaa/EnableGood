import React from "react";
import Chart from "../ui/Chart";
import styles from "./DonutChart.module.css";

interface StatisticsCardProps {
  className?: string;
}

const DonutChart: React.FC<StatisticsCardProps> = ({ className }) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["stats-header"]}>
        <span className={styles["stats-label"]}>Statistics</span>
      </div>

      <h3 className={styles["monthly-title"]}>Monthly activity</h3>

      <div className={className}>
        <div>
          <div className={styles["chart-container"]}>
            <Chart />
          </div>
        </div>

        <div className={styles["legend"]}>
          <div className={styles["legend-item"]}>
            <div
              className={styles["legend-color"]}
              data-color="completed"
            ></div>
            <span>Completed</span>
            <span className={styles["legend-value"]}>410</span>
          </div>
          <div className={styles["legend-item"]}>
            <div
              className={styles["legend-color"]}
              data-color="in-progress"
            ></div>
            <span>In progress</span>
            <span className={styles["legend-value"]}>560</span>
          </div>
          <div className={styles["legend-item"]}>
            <div className={styles["legend-color"]} data-color="planning"></div>
            <span>Planning</span>
            <span className={styles["legend-value"]}>600</span>
          </div>
          <div className={styles["legend-item"]}>
            <div className={styles["legend-color"]} data-color="stalled"></div>
            <span>Stalled</span>
            <span className={styles["legend-value"]}>820</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
