const recent_web = {
  query: `{\n  recent_web {\n    _id\n    title\n    body\n    date\n    status\n    notificationId\n    __typename\n  }\n}\n`,
};

const admin_profile = {
  query: `{\n  admin_profile {\n    _id\n    name\n    profileImage\n    email\n    __typename\n  }\n}\n`,
};

const view_permission = {
  query: `{\n  view_permission(userType: \"admin\") {\n    permissions {\n      tag_name\n      title\n      subtitle\n      type\n      icon\n      link\n      display_order\n      display\n      permission {\n        role\n        create\n        read\n        update\n        delete\n        __typename\n      }\n      children {\n        tag_name\n        title\n        link\n        type\n        icon\n        permission {\n          role\n          create\n          read\n          update\n          delete\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n`,
};

const changed_log_version = {
  query: `query Query {\n  getChangeLogLatestVersion\n}\n`,
};

const admin_or_superadmin_widget = {
  operationName: "AdminOrSuperAdminDoctorWidget",
  variables: {
    filter: {
      startDate: null,
      endDate: null,
    },
  },
  query:
    "query AdminOrSuperAdminDoctorWidget($filter: StartDateEndDateInput) {\n  AdminOrSuperAdminDoctorWidget(filter: $filter) {\n    totalDoctors\n    ActiveDoctors\n    NonActiveDoctors\n    __typename\n  }\n}\n",
};

const payment_analytics_dashboard = {
  variables: {},
  query:
    "{\n  payments_analytics_dashboard {\n    payment_pending_count\n    payment_history_count\n    recent_transactions {\n      doctorName\n      doctorId\n      transactionId\n      dateTime\n      amount\n      paidforRevalidation\n      paidforAppraisal\n      paidforAdminSupport\n      paidBy\n      __typename\n    }\n    paidByCount {\n      paidBy\n      count\n      __typename\n    }\n    revalidation_paid\n    appraisal_overview {\n      paid\n      not_paid\n      __typename\n    }\n    admin_support_requested {\n      doctorName\n      dateTime\n      paidforAdminSupport\n      paidBy\n      __typename\n    }\n    activity_feeds {\n      message\n      dateTime\n      profileImage\n      __typename\n    }\n    __typename\n  }\n}\n",
};

const view_doctors = {
  variables: {},
  query:
    "{\n  viewDoctors {\n    isEnabled\n    isMailVerified\n    paidForAppraisal\n    __typename\n  }\n}\n",
};

const admin_or_superadmin_appraisal_widget = {
  operationName: "AdminOrSuperAdminAppraisalWidget",
  variables: {
    filter: {
      startDate: null,
      endDate: null,
    },
  },
  query:
    "query AdminOrSuperAdminAppraisalWidget($filter: StartDateEndDateInput) {\n  AdminOrSuperAdminAppraisalWidget(filter: $filter) {\n    appraisalsInitiated\n    appraisalsInPreparation\n    appraisalsReceived\n    appraisalsUnderProcess\n    appraisalsInDoctorQuickReview\n    appraisalsForLock\n    appraisalsCompleted\n    appraisalsDue\n    appraisalsOverdue\n    appraisalsLog\n    appraisalsDeferral\n    appraisalsSupportRequest\n    appraisalsEscalationLog\n    appraisalsEscalationReceived\n    appraisalsEscalationResponded\n    appraiserPerformanceGraph\n    __typename\n  }\n}\n",
};

const admin_or_superadmin_revalidation_widget = {
  operationName: "AdminOrSuperAdminRevalidationWidget",
  variables: {
    filter: {
      startDate: null,
      endDate: null,
    },
  },
  query:
    "query AdminOrSuperAdminRevalidationWidget($filter: StartDateEndDateInput) {\n  AdminOrSuperAdminRevalidationWidget(filter: $filter) {\n    upcomingRevalidation\n    revalidationInitiated\n    revalidationOngoing\n    revalidationProcessed\n    revalidationCompleted\n    revalidationLog\n    revalidationOverdue\n    revalidationDeferred\n    __typename\n  }\n}\n",
};

const appraisal_performance_report = {
  operationName: "Query",
  variables: {},
  query: "query Query {\n  appraiser_performance_report\n}\n",
};

const admin_or_super_admin_meeting_widget = {
    "operationName": "AdminOrSuperAdminMeetingWidget",
    "variables": {
        "filter": {
            "startDate": null,
            "endDate": null
        }
    },
    "query": "query AdminOrSuperAdminMeetingWidget($filter: StartDateEndDateInput) {\n  AdminOrSuperAdminMeetingWidget(filter: $filter) {\n    meetingGraph {\n      name\n      data\n      __typename\n    }\n    latestMeetings {\n      doctorName\n      laName\n      appraiserName\n      meetingDate\n      laStatus\n      status\n      __typename\n    }\n    __typename\n  }\n}\n"
}

const admin_dashboard = {
    "variables": {},
    "query": "{\n  admin_dashboard {\n    initiate_appraisal\n    admin_support_requested\n    returned_from_RO_Appraiser\n    appraisal_for_lock\n    appraisal_overdue\n    appraisal_not_submitted\n    appraisal_history\n    audit_trail\n    revalidation_due\n    yet_to_initiate_revalidation\n    revalidation_initiated\n    current_year_revalidations\n    payment_pending\n    payment_history\n    activity_feeds {\n      message\n      dateTime\n      profileImage\n      __typename\n    }\n    __typename\n  }\n}\n"
}

const appraisal_widgets_admin = {
    "variables": {},
    "query": "{\n  appraisal_widgets_admin {\n    total_received_appraisals\n    total_completed_appraisals\n    initiate_appraisal\n    admin_support_requested\n    returned_from_RO_Appraiser\n    appraisal_for_lock\n    appraisal_overdue\n    appraisal_not_submitted\n    appraisal_history\n    initiated_count\n    completed_count\n    overview {\n      thisWeek {\n        initiated\n        completed\n        __typename\n      }\n      lastWeek {\n        initiated\n        completed\n        __typename\n      }\n      labels\n      series {\n        thisWeek {\n          name\n          data\n          __typename\n        }\n        lastWeek {\n          name\n          data\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    today_meetings_count\n    today_meetings {\n      doctorName\n      laName\n      appraiserName\n      meetingDate\n      laStatus\n      status\n      __typename\n    }\n    appraisal_completed_doctors_list {\n      doctorName\n      laName\n      appraiserName\n      completedDate\n      __typename\n    }\n    last_one_year_meetings {\n      doctorName\n      laName\n      appraiserName\n      meetingDate\n      laStatus\n      status\n      __typename\n    }\n    activity_feeds {\n      message\n      dateTime\n      profileImage\n      __typename\n    }\n    __typename\n  }\n}\n"
}
export {
  recent_web,
  admin_profile,
  view_permission,
  changed_log_version,
  admin_or_superadmin_widget,
  payment_analytics_dashboard,
  view_doctors,
  admin_or_superadmin_appraisal_widget,
  admin_or_superadmin_revalidation_widget,
  appraisal_performance_report,
  admin_or_super_admin_meeting_widget,
  admin_dashboard,
  appraisal_widgets_admin
};
