import React from "react";
import AppraisalsDataCardComponent from "./AppraisalsDataCardComponent ";
import { formatDate } from "../utils/helper";

const ActivityFeed = ({ activityFeed }) => {
  return (
    <section className="admin-activity">
      <div className="admin-common-font">Activity Feed</div>
      <div className="admin-activity-feed-main">
        {activityFeed?.map((ele, index) => {
          return (
            index < 4 && (
              <AppraisalsDataCardComponent
                text={ele?.message}
                time={formatDate(ele?.dateTime)}
              />
            )
          );
        })}
        <AppraisalsDataCardComponent
          text={"Admin updated Reyansh profile"}
          time={"5/06/2024 5:11 am"}
        />
      </div>
      <div className="admin-activity-feed-b2">See Entire Activity Feed</div>
    </section>
  );
};

export default ActivityFeed;
