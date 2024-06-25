import React from "react";
import AppraisalChildCard from "./AppraisalChildCard";
import { PieChart, Pie, Cell } from "recharts";
import { Tooltip } from "@mui/material";
const AppraisalCard = ({
  data,
  appraisalTotalReceived,
  appraisalCompleted,
}) => {
  const data01 = [
    {
      name: "Total Received",
      value: appraisalTotalReceived,
    },
    {
      name: "Completed",
      value: appraisalCompleted,
    },
  ];

  const COLORS = ["#3183cf", "#63b3ee"];
  return (
    <div className="appraisal-card">
      <div style={{ fontSize: "24px" }}>Appraisals</div>
      <div className="appraisal-card-content-main">
        <div className="appraisal-child-card-main">
          <AppraisalChildCard
            imgUrl={
              "https://itdl.app/assets/icons/dashboard/Group_872_ro_revalidation.svg"
            }
            text={"Stage 1 (Initiated)"}
            count={data?.appraisalsInitiated}
          />
          <AppraisalChildCard
            imgUrl={
              "https://itdl.app/assets/icons/dashboard/Group_873_ro_yet_initiated.svg"
            }
            text={"Stage 2 (In Preparation)"}
            count={data?.appraisalsInPreparation}
          />
          <AppraisalChildCard
            imgUrl={
              "https://itdl.app/assets/icons/dashboard/Group_874_ro_on_going.svg"
            }
            text={"Stage 3 (Received)"}
            count={data?.appraisalsReceived}
          />
          <AppraisalChildCard
            imgUrl={
              "https://itdl.app/assets/icons/dashboard/Group_872_ro_revalidation.svg"
            }
            text={"Stage 4 (Under Process)"}
            count={data?.appraisalsUnderProcess}
          />
          <AppraisalChildCard
            imgUrl={
              "https://itdl.app/assets/icons/dashboard/Group_873_ro_yet_initiated.svg"
            }
            text={"Stage 5 (Doctor Quick Review)"}
            count={data?.appraisalsInDoctorQuickReview}
          />
          <AppraisalChildCard
            imgUrl={
              "https://itdl.app/assets/icons/dashboard/Group_874_ro_on_going.svg"
            }
            text={"Stage 6 (For lock)"}
            count={data?.appraisalsForLock}
          />
          <AppraisalChildCard
            imgUrl={
              "https://itdl.app/assets/icons/dashboard/Group_872_ro_revalidation.svg"
            }
            text={"Stage 7 (Completed)"}
            count={33}
          />
          <AppraisalChildCard
            imgUrl={
              "https://itdl.app/assets/icons/dashboard/Group_873_ro_yet_initiated.svg"
            }
            text={"Appraisals Due"}
            count={data?.appraisalsCompleted}
          />
          <AppraisalChildCard
            imgUrl={
              "https://itdl.app/assets/icons/dashboard/Group_874_ro_on_going.svg"
            }
            text={"Appraisals Overdue"}
            count={data?.appraisalsOverdue}
          />
          <AppraisalChildCard
            imgUrl={
              "https://itdl.app/assets/icons/dashboard/Group_872_ro_revalidation.svg"
            }
            text={"Appraisals Log"}
            count={data?.appraisalsLog}
          />
          <AppraisalChildCard
            imgUrl={
              "https://itdl.app/assets/icons/dashboard/Group_873_ro_yet_initiated.svg"
            }
            text={"Appraisals Defferal History"}
            count={data?.appraisalsDeferral}
          />
          <AppraisalChildCard
            imgUrl={
              "https://itdl.app/assets/icons/dashboard/Group_874_ro_on_going.svg"
            }
            text={"Admin Support Request"}
            count={data?.appraisalsSupportRequest}
          />
          <AppraisalChildCard
            imgUrl={
              "https://itdl.app/assets/icons/dashboard/Group_872_ro_revalidation.svg"
            }
            text={"Escalated and De-Escalation"}
            count={data?.appraisalsEscalationLog}
          />
          <AppraisalChildCard
            imgUrl={
              "https://itdl.app/assets/icons/dashboard/Group_873_ro_yet_initiated.svg"
            }
            text={"Escalation Received"}
            count={data?.appraisalsEscalationReceived}
          />
          <AppraisalChildCard
            imgUrl={
              "https://itdl.app/assets/icons/dashboard/Group_874_ro_on_going.svg"
            }
            text={"Escalation Responded"}
            count={data?.appraisalsEscalationResponded}
          />
        </div>
        <div className="appraisal-card-pie">
          <div style={{ fontSize: "16px", color: "#1E293B" }}>
            Received vs Completed
          </div>
          <div style={{ textAlign: "center" }}>
            <PieChart width={300} height={300}>
              <Pie
                data={data01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#3b82f680"
                label={false}
              >
                {data01.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ textAlign: "left", marginRight: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      height: "10px",
                      width: "10px",
                      backgroundColor: "#3183cf",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "8px",
                    }}
                  ></span>
                  Total Received
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span
                    style={{
                      height: "10px",
                      width: "10px",
                      backgroundColor: "#63b3ee",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "8px",
                    }}
                  ></span>
                  Completed
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ marginBottom: "8px" }}>{data01[0]?.value}</div>
                <div>{data01[1]?.value}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppraisalCard;
