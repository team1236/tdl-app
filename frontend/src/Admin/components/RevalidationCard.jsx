import React from "react";
import AppraisalChildCard from "./AppraisalChildCard";

const RevalidationCard = ({ data }) => {
  return (
    <div className="revalidation-card">
      <div style={{ fontSize: "24px" }}>Revalidations</div>
      <div className="revalidation-card-sub">
        <AppraisalChildCard
          imgUrl={
            "https://itdl.app/assets/icons/dashboard/Group_872_ro_revalidation.svg"
          }
          text={"Upcoming Revalidations"}
          count={data?.upcomingRevalidation}
        />
        <AppraisalChildCard
          imgUrl={
            "https://itdl.app/assets/icons/dashboard/Group_873_ro_yet_initiated.svg"
          }
          text={"Revalidations Initiated"}
          count={data?.revalidationInitiated}
        />
        <AppraisalChildCard
          imgUrl={
            "https://itdl.app/assets/icons/dashboard/Group_874_ro_on_going.svg"
          }
          text={"Revalidations Ongoing"}
          count={data?.revalidationOngoing}
        />
        <AppraisalChildCard
          imgUrl={
            "https://itdl.app/assets/icons/dashboard/Group_874_ro_on_going.svg"
          }
          text={"Revalidations Processed"}
          count={data?.revalidationProcessed}
        />
        <AppraisalChildCard
          imgUrl={
            "https://itdl.app/assets/icons/dashboard/Group_874_ro_on_going.svg"
          }
          text={"Revalidations Log"}
          count={data?.revalidationLog}
        />
        <AppraisalChildCard
          imgUrl={
            "https://itdl.app/assets/icons/dashboard/Group_874_ro_on_going.svg"
          }
          text={"Revalidations Overdue"}
          count={data?.revalidationOverdue}
        />
        <AppraisalChildCard
          imgUrl={
            "https://itdl.app/assets/icons/dashboard/Group_874_ro_on_going.svg"
          }
          text={"Revalidations Deferred"}
          count={data?.revalidationDeferred}
        />
      </div>
    </div>
  );
};

export default RevalidationCard;
