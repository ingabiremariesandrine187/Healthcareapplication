import React from 'react';
import AppointmentCalendar from '../Components/AppointmentCalendar';
import UserInfo from '../Components/UserInfo';
import Activity from '../Components/Activity';
import HealthStats from '../Components/HealthStats';
import Activitychart from '../Components/Activitychart';

import '../Styles/Dashboardview.css';

function Dashboardview() {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        {/* Left Section - Only Appointment Calendar */}
        <div className="left-section">
          <AppointmentCalendar />
        </div>

        {/* Middle Section - User Info & Activity */}
        <div className="middle-section">
          <UserInfo />
          <Activity />
        </div>

        {/* Right Section - Activity Chart & Health Stats */}
        <div className="right-section">
          <Activitychart />
          <HealthStats />
        </div>
      </div>
    </div>
  );
}

export default Dashboardview;
