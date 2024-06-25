import React, { useEffect } from "react";
import Banner from "../components/Banner";
import AddIcon from "@mui/icons-material/Add";
import DoctorCountCard from "../components/DoctorCountCard";
import AppraisalCard from "../components/AppraisalCard";
import AppaisalsCompletedComponent from "../components/AppaisalsCompletedComponent";
import AppraisersPerformanceCard from "../components/AppraisersPerformanceCard";
import AppraisalsMeetingCard from "../components/AppraisalsMeetingCard";
import RevalidationCard from "../components/RevalidationCard";
import ActivityFeedCard from "../components/ActivityFeedCard";
import {
  admin_dashboard,
  admin_or_super_admin_meeting_widget,
  admin_or_superadmin_appraisal_widget,
  admin_or_superadmin_revalidation_widget,
  admin_or_superadmin_widget,
  admin_profile,
  appraisal_performance_report,
  appraisal_widgets_admin,
  changed_log_version,
  payment_analytics_dashboard,
  recent_web,
  view_doctors,
  view_permission,
} from "../apis/query/admin-dashboard-query";
import { graphQLAPI } from "../apis/admin-dashboard";

const AdminDashborad = () => {
  const recent_web_query = recent_web;
  const admin_profile_query = admin_profile;
  const view_permission_query = view_permission;
  const changed_log_version_query = changed_log_version;
  const admin_or_superadmin_widget_query = admin_or_superadmin_widget;
  const payment_analytics_dashboard_query = payment_analytics_dashboard;
  const view_doctors_query = view_doctors;
  const admin_or_superadmin_appraisal_widget_query =
    admin_or_superadmin_appraisal_widget;
  const admin_or_superadmin_revalidation_widget_query =
    admin_or_superadmin_revalidation_widget;
  const appraisal_performance_report_query = appraisal_performance_report;
  const [adminProfe, setAdminProfile] = React.useState({});
  const [doctorsCount, setDoctorsCount] = React.useState({});
  const [activityFeeds, setActivityFeeds] = React.useState([]);
  const [apprasialsData, setAppraisalsData] = React.useState({});
  const [revalidationsData, setRevalidationsData] = React.useState({});
  const [appraisalMeetingData, setAppraisalMeetingData] = React.useState({});
  const [appraiserPerformanceData, setAppraiserPerformanceData] =
    React.useState({});

  const [appraisalWidgetsAdmin, setAppraisalWidgetAdmin] = React.useState({});
  const fetchRecentWebData = async () => {
    try {
      const res = await graphQLAPI(recent_web_query);
      console.log(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchAdminProfileData = async () => {
    try {
      const res = await graphQLAPI(admin_profile_query);
      setAdminProfile(res?.data?.admin_profile);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchViewPermissionData = async () => {
    try {
      const res = await graphQLAPI(view_permission_query);
      console.log(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchChangedLogVersionData = async () => {
    try {
      const res = await graphQLAPI(changed_log_version);
      console.log(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchAdminOrSuperAdminWidgetData = async () => {
    try {
      const res = await graphQLAPI(admin_or_superadmin_widget_query);
      setDoctorsCount(res?.data?.AdminOrSuperAdminDoctorWidget);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchPaymentAnalaticsDashboradData = async () => {
    try {
      const res = await graphQLAPI(payment_analytics_dashboard_query);
      console.log(res);
      setActivityFeeds(res?.data?.payments_analytics_dashboard?.activity_feeds);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchViewDoctorsData = async () => {
    try {
      const res = await graphQLAPI(view_doctors_query);
      console.log(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchAdminOrSuperAdminAppraisalsWidgetData = async () => {
    try {
      const res = await graphQLAPI(admin_or_superadmin_appraisal_widget_query);
      console.log(res);
      setAppraisalsData(res?.data?.AdminOrSuperAdminAppraisalWidget);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchAdminOrSuperAdminRevalidationWidgetData = async () => {
    try {
      const res = await graphQLAPI(
        admin_or_superadmin_revalidation_widget_query
      );
      setRevalidationsData(res?.data?.AdminOrSuperAdminRevalidationWidget);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchAppraisalPerformanceReportData = async () => {
    try {
      const res = await graphQLAPI(appraisal_performance_report_query);
      setAppraiserPerformanceData(res?.data?.appraiser_performance_report);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchAdminOrSuperAdminMeetingWidgetData = async () => {
    try {
      const res = await graphQLAPI(admin_or_super_admin_meeting_widget);
      console.log("res", res);
      setAppraisalMeetingData(res?.data?.AdminOrSuperAdminMeetingWidget);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchAdminDashboardData = async () => {
    try {
      const res = await graphQLAPI(admin_dashboard);
      console.log("res", res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchAppraisalWidgetsAdminData = async () => {
    try {
      const res = await graphQLAPI(appraisal_widgets_admin);
      setAppraisalWidgetAdmin(res?.data?.appraisal_widgets_admin);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchAdminProfileData();
    fetchRecentWebData();
    fetchViewPermissionData();
    fetchChangedLogVersionData();
    fetchAdminOrSuperAdminWidgetData();
    fetchPaymentAnalaticsDashboradData();
    fetchViewDoctorsData();
    fetchAdminOrSuperAdminAppraisalsWidgetData();
    fetchAdminOrSuperAdminRevalidationWidgetData();
    fetchAppraisalPerformanceReportData();
    fetchAdminOrSuperAdminMeetingWidgetData();
    fetchAdminDashboardData();
    fetchAppraisalWidgetsAdminData();
  }, [
    recent_web_query,
    admin_profile_query,
    view_permission_query,
    changed_log_version_query,
    admin_or_superadmin_widget_query,
    payment_analytics_dashboard_query,
    view_doctors_query,
    admin_or_superadmin_appraisal_widget_query,
    admin_or_superadmin_revalidation_widget_query,
    appraisal_performance_report_query,
    admin_or_super_admin_meeting_widget,
    admin_dashboard,
    appraisal_widgets_admin,
  ]);
  return (
    <div>
      <div className="App">
        <Banner name={adminProfe?.name} role={adminProfe?.__typename} />
        <div className="doctor-regiter-button">
          <button className="dotor-register-btn">
            <AddIcon /> Doctor Registration
          </button>
        </div>
        <div className="doctor-count-cards">
          <DoctorCountCard
            count={doctorsCount?.totalDoctors}
            doctorIcon={
              "https://itdl.app/assets/icons/dashboard/Group_872_db_total_doctor.svg"
            }
            numCountColor={"#EF4444"}
            doctorTextClr={"#DC2626"}
            redirectionLink={""}
          />
          <DoctorCountCard
            count={doctorsCount?.ActiveDoctors}
            doctorIcon={
              "https://itdl.app/assets/icons/dashboard/Group_873_db_active.svg"
            }
            numCountColor={"#22C55E"}
            doctorTextClr={"#16A34A"}
            redirectionLink={""}
          />
          <DoctorCountCard
            count={doctorsCount?.NonActiveDoctors}
            doctorIcon={
              "https://itdl.app/assets/icons/dashboard/Group_874_db_non_active.svg"
            }
            numCountColor={"#F59E0B"}
            doctorTextClr={"#1E293B"}
          />
          <DoctorCountCard />
        </div>
        <div>
          <AppraisalCard
            data={apprasialsData}
            appraisalTotalReceived={
              appraisalWidgetsAdmin?.total_received_appraisals
            }
            appraisalCompleted={
              appraisalWidgetsAdmin?.total_completed_appraisals
            }
          />
        </div>
        <div>
          <AppraisalsMeetingCard appraisalMeetingData={appraisalMeetingData} />
        </div>
        <div className="appraisals-card-dashboard">
          <AppraisersPerformanceCard rawData={appraiserPerformanceData} />
          <AppaisalsCompletedComponent
            data={appraisalWidgetsAdmin?.appraisal_completed_doctors_list}
          />
        </div>
        <div className="revalidation-card-dashboard">
          <RevalidationCard data={revalidationsData} />
          <ActivityFeedCard activityFeedData={activityFeeds} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashborad;
