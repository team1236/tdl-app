import React from "react";

const AppraisalChildCard = ({ imgUrl, text, count }) => {
  return (
    <div className="appraisal-child-card">
      <div>
        <img className="appraisal-child-card-icon" src={imgUrl} alt="" />
      </div>
      <div className="appraisal-child-card-text">
        <div style={{ fontSize: "12px", color: "#64748b" }}>{text}</div>
        <div style={{ fontSize: "24px", fontWeight: "bold", color: "#1e293b" }}>
          {count}
        </div>
        <div style={{ fontSize: "12px", color: "#1e293b" }}>List</div>
      </div>
    </div>
  );
};

export default AppraisalChildCard;
