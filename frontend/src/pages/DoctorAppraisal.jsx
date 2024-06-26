import React from "react";
import AppraisalBanner from "../components/AppraisalBanner";

const DoctorAppraisal = () => {
  return (
    <main>
      <AppraisalBanner />
      <section className="doctor-Appraisal-block2">
        <section className="doctor-Appraisal-block2-sub1">
          <div className="doctor-Appraisal-block2-sub1-b1">NOT PREPARED</div>
          <div className="doctor-Appraisal-block2-sub1-b2">
            CURRENT YEAR : 2026/2027
          </div>
          <div className="doctor-Appraisal-block2-sub1-b3">
            <div className="doctor-Appraisal-block2-sub1-b3-div1">
              <img src="/copy.svg" style={{ height: "20px" }} />
              <label>Pages Completed : 0</label>
            </div>
            <div className="doctor-Appraisal-block2-sub1-b3-div2">
              <img src="/pin.svg" style={{ height: "20px" }} />
              <label>Attached Doc/Files : 0</label>
            </div>
            <div className="doctor-Appraisal-block2-sub1-b3-div3">
              <img src="/message.svg" style={{ height: "20px" }} />
              <label>Total Feedbacks : 2</label>
            </div>
          </div>
          <div className="doctor-Appraisal-block2-sub1-b4">
            <button className="doctor-Appraisal-block2-sub1-b4-btn">Appraiser's Details</button>
            <button>Comments</button>
            <button>Notes</button>
          </div>
          <div></div>
        </section>
        <section className="doctor-Appraisal-block2-sub2">
          <button className="doctor-Appraisal-block2-sub2-btn">
            Initiate Appraisal
          </button>
        </section>
      </section>
    </main>
  );
};

export default DoctorAppraisal;
