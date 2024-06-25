import React from "react";

const DetailCard = ({ type, title, data, titleSub, textColor, textColor2 }) => {
  const currentDate = new Date();
  const currentMonthName = currentDate.toLocaleString("default", {
    month: "long",
  });
  const currentDay = currentDate.getDate();
  const currentYear = currentDate.getFullYear();

  return (
    <section className="detail-card">
      {type === "normal" ? (
        <>
          <div className="detail-card-title">{title}</div>
          <div
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              color: textColor,
            }}
          >
            {data}
          </div>
          <div
            style={{ color: textColor2, fontSize: "16px", fontWeight: "bold" }}
          >
            {titleSub}
          </div>
        </>
      ) : (
        <>
          <div className="detail-card-title">{title}</div>
          <div
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              color: textColor,
            }}
          >
            {currentDay}
          </div>
          <div
            style={{ color: textColor2, fontSize: "16px", fontWeight: "bold" }}
          >
            {`${currentMonthName} ${currentYear}`}
          </div>
        </>
      )}
    </section>
  );
};

export default DetailCard;
