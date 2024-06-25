import React from "react";

const AppraisalsDataCardComponent = ({ text, time }) => {
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
          {time}
        </div>
      </div>
    </div>
  );
};

export default AppraisalsDataCardComponent;
