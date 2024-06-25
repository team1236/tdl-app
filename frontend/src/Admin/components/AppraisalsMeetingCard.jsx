import React from "react";
import {
  LineChart,
  CartesianGrid,
  Line,
  XAxis,
  Tooltip,
  Legend,
  YAxis,
} from "recharts";
import AdminTableComponent from "./AdminTableComponent";
const AppraisalsMeetingCard = ({ appraisalMeetingData }) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const data =
    appraisalMeetingData &&
    daysOfWeek.map((day, index) => ({
      name: day,
      cancelled:
        appraisalMeetingData?.meetingGraph &&
        appraisalMeetingData?.meetingGraph[0]?.data[index],
      scheduled:
        appraisalMeetingData?.meetingGraph &&
        appraisalMeetingData?.meetingGraph[1]?.data[index],
      completed:
        appraisalMeetingData?.meetingGraph &&
        appraisalMeetingData?.meetingGraph[2]?.data[index],
    }));

  const CustomLegend = (props) => {
    const { payload } = props;
    return (
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          margin: 0,
          fontSize: "12px",
        }}
      >
        {payload.map((entry, index) => (
          <li
            key={`item-${index}`}
            style={{ marginRight: 20, display: "flex", alignItems: "center" }}
          >
            <svg width="10" height="10" style={{ marginRight: 5 }}>
              <circle cx="5" cy="5" r="5" fill={entry.color} />
            </svg>
            <span>{entry.value}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="appraisals-meeting-card">
      <div style={{ color: "#1E293B", fontSize: "20px" }}>
        Appraisals Meeting
      </div>
      <div className="appraisals-meeting-card-container">
        <div className="appraisals-meeting-card-chart">
          <LineChart
            width={700}
            height={400}
            fontSize={12}
            data={data}
            margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis
              domain={[0, "dataMax"]}
              tickFormatter={(tick) => tick.toFixed(1)}
            />
            <Tooltip />
            <Legend content={<CustomLegend />} />
            <Line
              type="monotone"
              dataKey="cancelled"
              stroke="#109CF1"
              name="Meeting Cancelled"
            />
            <Line
              type="monotone"
              dataKey="scheduled"
              stroke="#F7695B"
              name="Meeting Scheduled"
            />
            <Line
              type="monotone"
              dataKey="completed"
              stroke="#FED873"
              name="Meeting Completed"
            />
          </LineChart>
        </div>
        <div className="appraisals-meeting-card-table">
          <AdminTableComponent data={appraisalMeetingData?.latestMeetings} />
        </div>
      </div>
    </div>
  );
};

export default AppraisalsMeetingCard;
