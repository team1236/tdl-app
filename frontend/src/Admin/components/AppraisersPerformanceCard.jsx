import React, { useState } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
const AppraisersPerformanceCard = ({ rawData }) => {
  const transformData = (data) => {
    if (data) {
      return Object.keys(data).map((key) => ({
        name: data[key]?.appraiserName,
        count: data[key]?.count,
      }));
    }
  };

  const lastWeekData = transformData(rawData?.lastWeekCount);
  const thisWeekData = transformData(rawData?.thisWeekCount);

  const [activeButton, setActiveButton] = useState("thisWeek");
  return (
    <div className="appraisers-performance-card">
      <div style={{ fontSize: "20px", color: "#1e293b" }}>
        Appraisers Performance
      </div>
      <div className="toggle-button-group">
        <button
          className={`toggle-button ${
            activeButton === "lastWeek" ? "active" : ""
          }`}
          onClick={() => setActiveButton("lastWeek")}
        >
          Last Week
        </button>
        <button
          className={`toggle-button ${
            activeButton === "thisWeek" ? "active" : ""
          }`}
          onClick={() => setActiveButton("thisWeek")}
        >
          This Week
        </button>
      </div>
      <div className="appraiaers-performance-bar-chart">
        <BarChart
          width={730}
          height={300}
          data={activeButton === "thisWeek" ? thisWeekData : lastWeekData}
          layout="vertical"
          margin={{ top: 20 }}
        >
          <XAxis
            type="number"
            dataKey="count"
            width={150}
            tick={{ fontSize: 10, fontFamily: "sans-serif" }}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={150}
            tick={{ fontSize: 10, fontFamily: "sans-serif" }}
          />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default AppraisersPerformanceCard;
