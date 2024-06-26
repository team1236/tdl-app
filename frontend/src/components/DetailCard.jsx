import React from "react";
import  { useNavigate } from "react-router-dom"
const DetailCard = ({ type, title, data, titleSub, textColor, textColor2, redirect }) => {
  const currentDate = new Date();
  const nav = useNavigate();
  const currentMonthName = currentDate.toLocaleString("default", {
    month: "long",
  });
  const currentDay = currentDate.getDate();
  const currentYear = currentDate.getFullYear();

  return (
    <section className="detail-card" onClick={() => nav(redirect)}>
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
