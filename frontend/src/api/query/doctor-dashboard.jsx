const recent_web = {
  query: `{\n  recent_web {\n    _id\n    title\n    body\n    date\n    status\n    notificationId\n    __typename\n  }\n}\n`,
};

const view_permission = {
  query: `{\n  view_permission(userType: \"doctor\") {\n    permissions {\n      tag_name\n      title\n      subtitle\n      type\n      icon\n      link\n      display_order\n      display\n      permission {\n        role\n        create\n        read\n        update\n        delete\n        __typename\n      }\n      children {\n        tag_name\n        title\n        link\n        type\n        icon\n        permission {\n          role\n          create\n          read\n          update\n          delete\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n`,
};

const doctor_profile = {
  query: `{\n  doctor_profile {\n    _id\n    firstname\n    profileImage\n    lastname\n    email\n    profilePercentage {\n      profilePercentage\n      status\n      __typename\n    }\n    __typename\n  }\n}\n`,
  variables: {},
};

const getChangeLogLatestVersion = {
  query: `query Query {\n  getChangeLogLatestVersion\n}\n`,
  variables: {},
};

const doctor_dashboard_widget = {
  query: `{\n  doctor_dashboard_widget {\n    currentAppraisal {\n      attachedDocuments\n      noOfFeedbacks\n      pagesDone\n      currentYearAppraisal {\n        _id\n        appraisalPhase\n        currentAppraisalYear\n        currentRevalidationCycle\n        appraisalDue\n        appraiserName\n        meetingDate\n        comment\n        __typename\n      }\n      __typename\n    }\n    oldAppraisals {\n      _id\n      appraisalPhase\n      currentRevalidationCycle\n      currentAppraisalYear\n      previousAppraisal {\n        key\n        fileType\n        originalName\n        __typename\n      }\n      __typename\n    }\n    countOfPatientFeedbacks\n    countOfColleagueFeedbacks\n    revalidation {\n      currentRevalidationCycle\n      appraisalPhase\n      completedAppraisalsCount\n      __typename\n    }\n    revalidationDueDetails {\n      currentRevalidationCycle\n      appraisalPhase\n      revalidationDue\n      __typename\n    }\n    adminSupport {\n      isRequested\n      dateTime\n      __typename\n    }\n    daysLeft {\n      nextRevalidation\n      nextAppraisal\n      __typename\n    }\n    __typename\n  }\n}\n`,
  variables: {},
};

const activity_feed = {
  query: `query ($limit: Int!, $skip: Int!) {\n  list_activity_feeds_doctor(limit: $limit, skip: $skip) {\n    data {\n      message\n      dateTime\n      profileImage\n      __typename\n    }\n    count\n    __typename\n  }\n}\n`,
  variables: { limit: 10, skip: 0 },
};

const feedback_form = {
  query: `query ($appraisalYear: String!) {\n  feedback_form_dashboard(appraisalYear: $appraisalYear) {\n    colleague_feedback {\n      categories\n      series {\n        name\n        color\n        data\n        __typename\n      }\n      __typename\n    }\n    patient_feedback {\n      categories\n      series {\n        name\n        color\n        data\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n`,
  variables: { appraisalYear: "61aef4504c11be3c4ba9bb79" },
};

const revalidation_widget_dashboard = {
  query: `{\n  revalidation_widget_dashboard {\n    labels\n    series {\n      appraisals\n      __typename\n    }\n    __typename\n  }\n}\n`,
  variables: {},
}

export {
  recent_web,
  view_permission,
  doctor_profile,
  getChangeLogLatestVersion,
  doctor_dashboard_widget,
  activity_feed,
  feedback_form,
  revalidation_widget_dashboard
};
