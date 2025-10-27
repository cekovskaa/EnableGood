import React from "react";
import styles from "../../pages/onboarding/Onboarding.module.css";

interface Step {
  name: string;
  completed: boolean;
}

interface ProgressBarProps {
  steps: Step[];
  progressWidth: number; 
  percentage: number; 
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  steps,
  progressWidth,
  percentage,
}) => {
  return (
    <div className="mb-5">
      {/* Step Labels */}
      <div
      className={`d-flex justify-content-center justify-content-md-around mb-3 ${styles["step-labels"]}`}
      >
        {steps.map((step, index) => (
          <p
            key={index}
            className={`${styles["step-label"]} ${
              step.completed ? styles["step-completed"] : styles["step-pending"]
            }`}
          >
            {step.name}
          </p>
        ))}
      </div>

      {/* Progress Bar */}
      <div className={styles.progress}>
        <div
          className={styles["progress-bar"]}
          role="progressbar"
          style={{ width: `${progressWidth}%` }}
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>

      {/* Badge Percentage */}
      <div className="text-start mt-3">
        <span className={styles["badge-procent"]}>{percentage}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
