import React, { useState } from "react";
import { useEffect } from "react";
import { grapQLAPI } from "../api/doctor-dashboard";
import { getChangeLogLatestVersion } from "../api/query/doctor-dashboard";

const Footer = () => {
  const [footerData, setFooterData] = useState();
  const fetchData = async () => {
    try {
      const res = await grapQLAPI({query: getChangeLogLatestVersion.query});
      setFooterData(res?.data?.getChangeLogLatestVersion);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="admin-footer-main">
      <div className="admin-footer-sub">
        <div style={{ color: "#64748B" }}>iTDL</div>
        <div style={{ color: "#64748B" }}>©</div>
        <div style={{ color: "#64748B" }}>2024</div>
      </div>
      <div style={{ color: "#991B1B", fontFamily: "sans-serif" }}>
        {footerData}
      </div>
    </section>
  );
};

export default Footer;
