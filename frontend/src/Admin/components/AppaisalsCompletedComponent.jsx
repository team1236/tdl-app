import React from "react";
import AppraisalsDataCardComponent from "./AppraisalsDataCardComponent";

const AppaisalsCompletedComponent = ({ data }) => {
  console.log("data", data);
  return (
    <div className="appaisals-completed-component">
      <div style={{ color: "#1E293B", fontSize: "20px" }}>
        Appraisals Completed
      </div>

      <div className="appaisals-completed-component-sub">
        {data &&
          data
            .slice(-5)
            .map((data, index) => (
              <AppraisalsDataCardComponent
                key={index}
                text={`Dr ${data?.doctorName}`}
                dateTime={data?.completedDate}
              />
            ))}
      </div>
      <div className="appaisals-completed-component-link">
        {" "}
        See entire Appraisals Completed
      </div>
    </div>
  );
};

export default AppaisalsCompletedComponent;
