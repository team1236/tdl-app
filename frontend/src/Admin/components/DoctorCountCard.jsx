import React from "react";

const DoctorCountCard = ({
  count,
  doctorIcon,
  numCountColor,
  doctorTextClr,
}) => {
  return (
    <div className="card">
      {doctorIcon ? (
        <>
          <h2 className="card-title">Total Doctor Count</h2>

          <div className="icon-container">
            <img src={doctorIcon} alt="Doctor Icon" className="doctor-icon" />
          </div>
          <div className="count" style={{ color: numCountColor }}>
            {count}
          </div>
          <div className="label" style={{ color: doctorTextClr }}>
            Doctors
          </div>
        </>
      ) : (
        <div className="calender-card">
          <>My Calender</>
          <div style={{ fontSize: "64px", fontWeight: "bold" }}>
            {new Date().getDate().toString()}{" "}
          </div>
          <>
            {`${new Date().toLocaleString("default", {
              month: "long",
            })} , ${new Date().getFullYear().toString()} `}{" "}
          </>
        </div>
      )}
    </div>
  );
};

export default DoctorCountCard;
