import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "../../styles/CustomBar.css";

type GoalType = "all" | "environmental" | "social" | "governance";

const ChartComponent: React.FC = () => {
  const [selectedGoal, setSelectedGoal] = useState<GoalType>("all");

  const getSeries = (): Highcharts.SeriesOptionsType[] => {
    const environmental: Highcharts.SeriesColumnOptions = {
      type: "column",
      name: "Environmental",
      data: [100000, 450000, 490000, 490000, 50000, 1200000, 1400000],
      color: "#238B23",
    };
    const social: Highcharts.SeriesColumnOptions = {
      type: "column",
      name: "Social",
      data: [450000, 150000, 1200000, 300000, 100000, 800000, 970000],
      color: "#698EAE",
    };
    const governance: Highcharts.SeriesColumnOptions = {
      type: "column",
      name: "Governance",
      data: [1280000, 100000, 780000, 650000, 300000, 500000, 590000],
      color: "#E2725C",
    };

    switch (selectedGoal) {
      case "environmental":
        return [environmental];
      case "social":
        return [social];
      case "governance":
        return [governance];
      default:
        return [environmental, social, governance];
    }
  };

  const options: Highcharts.Options = {
    chart: { type: "column" },
    title: { text: "" },
    xAxis: { categories: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"] },
    yAxis: {
      min: 0,
      title: { text: "" },
      tickPositions: [0, 100000, 200000, 300000, 500000, 1000000, 1500000],
      gridLineWidth: 1,
      gridLineDashStyle: "Dash", // This makes the lines dashed
      gridLineColor: "#E5E5EF",
      labels: {
        formatter: function () {
          const value = this.value as number;
          if (value >= 1000000) return (value / 1000000).toString() + "M";
          if (value >= 1000) return (value / 1000).toString() + "k";
          return value.toString();
        },
      },
      plotLines: [
        {
          value: 0,
          color: "#E5E5EF",
          width: 1,
          zIndex: 4,
        },
      ],
    },
    legend: { enabled: false },
    tooltip: {
      valueSuffix: "",
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
        pointWidth: 10,
        borderRadius: 5,
      },
    },
    series: getSeries(),
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />

      {/* Custom Legend with Radio Buttons */}
      <div className="custom-legend">
        <label className="legend-item all">
          <input
            type="radio"
            name="goal"
            checked={selectedGoal === "all"}
            onChange={() => setSelectedGoal("all")}
          />
          <span className="radio-custom"></span>
          All goals
        </label>
        <label className="legend-item environmental">
          <input
            type="radio"
            name="goal"
            checked={selectedGoal === "environmental"}
            onChange={() => setSelectedGoal("environmental")}
          />
          <span className="radio-custom"></span>
          Environmental goals
        </label>
        <label className="legend-item social">
          <input
            type="radio"
            name="goal"
            checked={selectedGoal === "social"}
            onChange={() => setSelectedGoal("social")}
          />
          <span className="radio-custom"></span>
          Social goals
        </label>
        <label className="legend-item governance">
          <input
            type="radio"
            name="goal"
            checked={selectedGoal === "governance"}
            onChange={() => setSelectedGoal("governance")}
          />
          <span className="radio-custom"></span>
          Governance goals
        </label>
      </div>
    </div>
  );
};

export default ChartComponent;
