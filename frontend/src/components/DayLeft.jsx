import React from "react";

const DayLeft = ({ dayLeft }) => {
  return (
    <section className="admin-dayleft">
      <div className="admin-dayleft-b1">
        <div className="admin-dayleft-h1">Days Left</div>
        <img src="/timer.png" style={{ height: "28px" }} />
      </div>
      <div className="admin-dayleft-b2">
        <img src="/dailyP1.svg" height={"56px"} />
        <div className="admin-dayleft-b2-p1">
          <div className="admin-dayleft-h2">For Next Appraisal</div>
          <div className="admin-dayleft-h2-sub">
            {dayLeft?.nextAppraisal} Days
          </div>
        </div>
      </div>
      <div className="admin-dayleft-b2-sub2">
        <img src="/image2.svg" height={"56px"} />
        <div className="admin-dayleft-b2-p1">
          <div className="admin-dayleft-h2">For Next Revalidation</div>
          <div className="admin-dayleft-h2-sub2">
            {dayLeft?.nextRevalidation} Days
          </div>
        </div>
      </div>
    </section>
  );
};

export default DayLeft;
