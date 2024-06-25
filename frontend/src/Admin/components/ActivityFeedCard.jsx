import React from "react";
import AppraisalsDataCardComponent from "./AppraisalsDataCardComponent";

const ActivityFeedCard = ({ activityFeedData }) => {
  return (
    <div className="activity-feed-card">
      <div style={{ color: "#1E293B", fontSize: "20px" }}>Activity Feed</div>
      <div className="activity-feed-card-sub">
        {activityFeedData &&
          activityFeedData.map(
            (data, index) =>
              index < 5 && (
                <AppraisalsDataCardComponent
                  text={data?.message}
                  dateTime={data?.dateTime}
                />
              )
          )}
      </div>
      <div className="appaisals-completed-component-link">
        See entire Activity Feed
      </div>
    </div>
  );
};

export default ActivityFeedCard;
