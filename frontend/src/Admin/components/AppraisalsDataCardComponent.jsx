import React from "react";
import { formatDate } from "../../utils/helper";

const AppraisalsDataCardComponent = ({ text, dateTime }) => {
  return (
    <div className="appaisals-completed-component-card">
      <div>
        <img
          style={{ width: "40px", height: "40px" }}
          src="https://itdl.app/assets/images/avatars/feed.jpg"
          alt=""
        />
      </div>
      <div className="appraisal-data-card-text">
        <div style={{ color: "#1E293B", fontSize: "14px" }}>{text}</div>
        <div style={{ color: "#64748B", fontSize: "13px" }}>
          {formatDate(dateTime)}
        </div>
      </div>
    </div>
  );
};

export default AppraisalsDataCardComponent;
