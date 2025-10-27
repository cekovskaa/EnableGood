import { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "../../styles/Chart.css";

export default function PieChart() {
  const [selectedIndex] = useState<number | null>(null);

  const chartData = [
    { name: "24%", y: 170000.0, color: "#F3E391" },
    { name: "26%", y: 210000.0, color: "#6B8EAE" },
    { name: "39%", y: 220000.0, color: "#F47D6A" },
    { name: "", y: 160000.0, color: "#238B23", sliced: true },
  ];

  const chartOptions: Highcharts.Options = {
    chart: {
      type: "pie",
      plotShadow: false,
    },
    credits: {
      enabled: false,
    },
    accessibility: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        size: "100%",
        innerSize: "60%",
        borderWidth: 2,
        borderRadius: 8,
        slicedOffset: 20,
        dataLabels: {
          enabled: true,
          distance: -28,
          format: "{point.name}",
          style: {
            color: "#012960b9",
            textOutline: "none",
            fontSize: "16px",
            fontWeight: "bold",
          },
        },
      },
    },
    tooltip: {
      enabled: false,
    },
    title: {
      verticalAlign: "middle",
      floating: true,
      text: "1.05",
      style: {
        fontSize: "28px",
        fontWeight: "bold",
      },
    },
    subtitle: {
      verticalAlign: "middle",
      floating: true,
      text: "Average range",
      style: {
        fontSize: "12px",
        color: "#666",
      },
      y: 33,
    },
    series: [
      {
        type: "pie",
        name: "Data",
        data: selectedIndex !== null ? [chartData[selectedIndex]] : chartData,
      },
    ],
  };

  return (
    <div className="">
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
}
