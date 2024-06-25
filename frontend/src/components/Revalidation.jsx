import { Tooltip } from "@mui/material";
import React from "react";
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from "recharts";

const Revalidation = ({ revalidation_widget }) => {
  console.log("revalidation_widget", revalidation_widget);
  const data =
    revalidation_widget &&
    revalidation_widget?.labels?.map((label, index) => ({
      name: label,
      appraisals:
        revalidation_widget && revalidation_widget?.series?.appraisals[index],
    }));
  return (
    <section className="admin-revalidation">
      <div className="admin-common-font">Revalidation</div>
      <div className="admin-revalidation-chart-main">
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="appraisals" fill="#87CEEB" />
        </BarChart>
      </div>
    </section>
  );
};

export default Revalidation;
