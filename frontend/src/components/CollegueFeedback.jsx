import React from "react";
import Chip from "@mui/material/Chip";

const ColleagueFeedback = () => {
  return (
    <section className="admin-colleague">
      <div className="admin-colleague-b1">
        <div style={{ fontWeight: 600 }}>
          Colleague <br /> Feedback
        </div>
        <div>
          <Chip label="2024/2025" />
        </div>
      </div>
      <div className="admin-colleague-b2">No data available !</div>
    </section>
  );
};

export default ColleagueFeedback;
