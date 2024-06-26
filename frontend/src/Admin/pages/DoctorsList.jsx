import React from 'react';

import DataTable from "../components/DataTableComponent";
const mockData = [
  { id: 1, arStatus: true, doctorName: 'Adina Haffeez', gmcNo: '7842019', phone: '07411246408', email: 'ahaffeez2@gmail.com', lastAppraisalDate: '10/10/2023', currentRevalidationDate: '05/08/2024', designatedBody: 'Emergency Department Staffing Ltd', registeredBy: 'Executive' },
  { id: 2, arStatus: false, doctorName: 'Jessica Aggrey-Akyeampong', gmcNo: '7586749', phone: '7931946990', email: 'jessica.akyeampong@hotmail.com', lastAppraisalDate: '10/10/2023', currentRevalidationDate: '05/08/2024', designatedBody: 'Medsol Healthcare Services Ltd', registeredBy: 'Designated Body' },
  // Add more mock data as needed
];

const DoctorsList = () => {


  return (
    <DataTable/>
  );
};

export default DoctorsList;
