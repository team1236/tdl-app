import React, { useState } from "react";
import Banner from "../components/Banner";
import DetailCard from "../components/DetailCard";
import ColleagueFeedback from "../components/CollegueFeedback";
import PatientFeedback from "../components/PatientFeedback";
import DayLeft from "../components/DayLeft";
import Feedback from "../components/Feedback";
import Revalidation from "../components/Revalidation";
import ActivityFeed from "../components/ActivityFeed";
import {
  activity_feed,
  doctor_dashboard_widget,
  doctor_profile,
  feedback_form,
  recent_web,
  revalidation_widget_dashboard,
} from "../api/query/doctor-dashboard";
import { useEffect } from "react";
import { grapQLAPI } from "../api/doctor-dashboard";

const DoctorDashboard = () => {
  const [dayLeft, setDayLeft] = useState({});
  const [feedBackCount, setFeedbackCount] = useState({
    countOfColleagueFeedbacks: "",
    countOfPatientFeedbacks: "",
    revalidation: "",
    currentAppraisal: "",
  });
  const [activityFeed, setActivityFeed] = useState([]);
  const [feedback_form_graph, setfeedback_form_graph] = useState({});
  const [revalidation_widget, setrevalidation_widget] = useState({});
  const fetchData_recent_web = async () => {
    try {
      const res = await grapQLAPI({ query: recent_web.query });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchData_doctor_profile = async () => {
    try {
      const res = await grapQLAPI({ query: doctor_profile.query });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchData_doctor_dashboard_widget = async () => {
    try {
      const res = await grapQLAPI({ query: doctor_dashboard_widget.query });
      setDayLeft(res?.data?.doctor_dashboard_widget?.daysLeft);
      const { countOfColleagueFeedbacks, countOfPatientFeedbacks } =
        res?.data?.doctor_dashboard_widget;
      setFeedbackCount((prev) => ({
        ...prev,
        countOfColleagueFeedbacks,
        countOfPatientFeedbacks,
        revalidation: res?.data?.doctor_dashboard_widget?.revalidation,
        currentAppraisal: res?.data?.doctor_dashboard_widget?.currentAppraisal,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchData_activity_feed = async () => {
    try {
      const res = await grapQLAPI(activity_feed);
      setActivityFeed(res?.data?.list_activity_feeds_doctor?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchData_feedback_form = async () => {
    try {
      const res = await grapQLAPI(feedback_form);
      setfeedback_form_graph(
        res?.data?.feedback_form_dashboard?.colleague_feedback
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchData_revalidation_widget_dashboard = async () => {
    try {
      const res = await grapQLAPI({
        query: revalidation_widget_dashboard.query,
      });
      setrevalidation_widget(res?.data?.revalidation_widget_dashboard);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    Promise.allSettled([
      fetchData_recent_web(),
      fetchData_doctor_profile(),
      fetchData_doctor_dashboard_widget(),
      fetchData_activity_feed(),
      fetchData_feedback_form(),
      fetchData_revalidation_widget_dashboard(),
    ]);
  }, []);

  return (
    <main>
      <Banner />
      <div className="detail-card-container">
        <DetailCard
          type={"normal"}
          title={"Appraisals"}
          data={
            feedBackCount.currentAppraisal?.currentYearAppraisal || "0 / 15"
          }
          titleSub={"Pages Completed"}
          textColor={"#3B82F6"}
          textColor2={"#2563EB"}
        />
        <DetailCard
          type={"normal"}
          title={"Revalidation Cycle"}
          data={feedBackCount.revalidation.completedAppraisalsCount}
          titleSub={`Appraisal year: ${
            feedBackCount?.revalidation?.appraisalPhase &&
            feedBackCount?.revalidation?.appraisalPhase?.split(" ")[1]
          }`}
          textColor={"#EF4444"}
          textColor2={"#DC2626"}
        />
        <DetailCard
          type={"normal"}
          title={"Patient Feedback"}
          data={feedBackCount.countOfPatientFeedbacks}
          titleSub={"Total Sent"}
          textColor={"#22C55E"}
          textColor2={"#16A34A"}
        />
        <DetailCard
          type={"normal"}
          title={"Colleague Feedback"}
          data={feedBackCount.countOfColleagueFeedbacks}
          titleSub={"Total Sent"}
          textColor={"#F59E0B"}
          textColor2={"#1E293B"}
        />
        <DetailCard
          type={"calender"}
          title={"My Calendar"}
          textColor={"#1E293B"}
          textColor2={"#1E293B"}
        />
      </div>
      <section className="admin-colleague-main">
        <ColleagueFeedback />
        <PatientFeedback />
        <DayLeft dayLeft={dayLeft} />
      </section>
      <section className="admin-feedback-main">
        <Feedback feedback_form_graph={feedback_form_graph} />
      </section>
      <section className="admin-revalidation-main">
        <Revalidation revalidation_widget={revalidation_widget}/>
        <ActivityFeed activityFeed={activityFeed} />
      </section>
    </main>
  );
};

export default DoctorDashboard;
