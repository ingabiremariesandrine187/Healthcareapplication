import React from 'react';
import '../Component/Dashboard.css'
import { BiSolidUserCircle } from "react-icons/bi";
import { FaEnvelope, FaBell, FaSearch, FaBars, FaUser, FaCalendarAlt, FaUserMd, FaCheck, FaTimes, FaComments, FaPhone, FaFileAlt } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Navbar */}
     
      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card">
          <div className="card-icon">
            <FaUserMd className="summary-icon" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Total Patient</h3>
            <p className="card-value">....</p>
            <p className="card-subtitle">Till Today</p>
          </div>
        </div>

        <div className="summary-card">
          <div className="card-icon">
            <FaUser className="summary-icon" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Today Patient</h3>
            <p className="card-value">...</p>
            <p className="card-subtitle">21 March-2025</p>
          </div>
        </div>

        <div className="summary-card">
          <div className="card-icon">
            <FaCalendarAlt className="summary-icon" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Today Appointments</h3>
            <p className="card-value">085</p>
            <p className="card-subtitle">28 March-2025</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        {/* Left Section - Chart */}
        <div className="chart-section">
          <h3 className="section-title">Patients Summary March 2025</h3>
          <div className="donut-chart">
            {/* This is where you'd implement the donut chart */}
            <div className="chart-placeholder"></div>
            <div className="chart-legend">
              <div className="legend-item">
                <span className="legend-color new-patients"></span>
                <span className="legend-text">New Patients</span>
              </div>
              <div className="legend-item">
                <span className="legend-color old-patients"></span>
                <span className="legend-text">Old Patients</span>
              </div>
              <div className="legend-item">
                <span className="legend-color total-patients"></span>
                <span className="legend-text">Total Patients</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section - Today's Appointments */}
        <div className="appointments-section">
          <h3 className="section-title">Today Appoinment</h3>
          <div className="appointment-header">
            <span className="header-item">Patient</span>
            <span className="header-item">Name/Diagonosis</span>
            <span className="header-item">Time</span>
          </div>

          <div className="appointment-list">
            <div className="appointment-item">
              <div className="patient-avatar">
              <BiSolidUserCircle  class="patient-icon"/>
              </div>
              <div className="patient-info">
                <p className="patient-name">urujeni </p>
                <p className="patient-diagnosis">Health Cheakup</p>
              </div>
              <div className="appointment-time on-going">On Going</div>
            </div>

            <div className="appointment-item">
              <div className="patient-avatar">
              <BiSolidUserCircle  class="patient-icon"/>
              </div>
              <div className="patient-info">
                <p className="patient-name">albine</p>
                <p className="patient-diagnosis">Health Cheakup</p>
              </div>
              <div className="appointment-time">12 : 30 PM</div>
            </div>

            <div className="appointment-item">
              <div className="patient-avatar">
              <BiSolidUserCircle  class="patient-icon"/>
              </div>
              <div className="patient-info">
                <p className="patient-name">sandrine</p>
                <p className="patient-diagnosis">Report</p>
              </div>
              <div className="appointment-time">01 : 00 PM</div>
            </div>

            <div className="appointment-item">
              <div className="patient-avatar">
              <BiSolidUserCircle  class="patient-icon"/>
              </div>
              <div className="patient-info">
                <p className="patient-name">Chris</p>
                <p className="patient-diagnosis">Common Cold</p>
              </div>
              <div className="appointment-time">01 : 30 PM</div>
            </div>

            
          </div>
        </div>

        {/* Right Section - Patient Details */}
        <div className="patient-details-section">
          <h3 className="section-title">Next Patient Details</h3>
          <div className="patient-profile">
            <div className="patient-avatar-large">
            <BiSolidUserCircle  class="patients-icon"/>
            </div>
            <div className="patient-name-id">
              <h4>Sanath Deo</h4>
              <p>Health Cheakup</p>
            </div>
            <div className="patient-id">
              <h4>Patient ID</h4>
              <p>022009202005</p>
            </div>
          </div>

          <div className="patient-info-grid">
            <div className="info-item">
              <h5>D. O.B</h5>
              <p>15 January 1989</p>
            </div>
            <div className="info-item">
              <h5>Sex</h5>
              <p>Male</p>
            </div>
            <div className="info-item">
              <h5>Weight</h5>
              <p>59 Kg</p>
            </div>
            <div className="info-item">
              <h5>Last Appainment</h5>
              <p>15 Dec - 2021</p>
            </div>
            <div className="info-item">
              <h5>Hight</h5>
              <p>172 cm</p>
            </div>
            <div className="info-item">
              <h5>Reg. Date</h5>
              <p>10 Dec 2021</p>
            </div>
          </div>

          <div className="patient-history">
            <h5>Patient History</h5>
            <div className="history-tags">
              <span className="tag asthma">Asthma</span>
              <span className="tag hypertension">Hypertension</span>
              <span className="tag fever">Fever</span>
            </div>
          </div>

          <div className="patient-actions">
            <button className="action-button phone">
              <FaPhone className="action-icon" /> (308) 555-0102
            </button>
            <button className="action-button document">
              <FaFileAlt className="action-icon" /> Document
            </button>
            <button className="action-button chat">
              <FaComments className="action-icon" /> Chat
            </button>
          </div>

          <div className="patient-prescriptions">
            <h5>Last Prescriptions</h5>
            {/* Prescription items would go here */}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        {/* Patient Reviews */}
        <div className="reviews-section">
          <h3 className="section-title">Patients Review</h3>
          <div className="review-metrics">
            <div className="metric-item">
              <span className="metric-label">Excellent</span>
              <div className="metric-bar">
                <div className="metric-fill excellent"></div>
              </div>
            </div>
            <div className="metric-item">
              <span className="metric-label">Great</span>
              <div className="metric-bar">
                <div className="metric-fill great"></div>
              </div>
            </div>
            <div className="metric-item">
              <span className="metric-label">Good</span>
              <div className="metric-bar">
                <div className="metric-fill good"></div>
              </div>
            </div>
            <div className="metric-item">
              <span className="metric-label">Average</span>
              <div className="metric-bar">
                <div className="metric-fill average"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Appointment Requests */}
        <div className="requests-section">
          <h3 className="section-title">Appoinment Request</h3>
          <div className="request-list">
            <div className="request-item">
              <div className="patient-avatar">
              <BiSolidUserCircle  class="patient-icon"/>
              </div>
              <div className="patient-info">
                <p className="patient-name">Maria Sarafat</p>
                <p className="patient-diagnosis">Cold</p>
              </div>
              <div className="request-actions">
                <button className="action-btn accept">
                  <FaCheck className="action-icon" />
                </button>
                <button className="action-btn reject">
                  <FaTimes className="action-icon" />
                </button>
                <button className="action-btn message">
                  <FaComments className="action-icon" />
                </button>
              </div>
            </div>
            <div className="request-item">
              <div className="patient-avatar">
              <BiSolidUserCircle  class="patient-icon"/>
              </div>
              <div className="patient-info">
                <p className="patient-name">Jhon Deo</p>
                <p className="patient-diagnosis">Over switing</p>
              </div>
              <div className="request-actions">
                <button className="action-btn accept">
                  <FaCheck className="action-icon" />
                </button>
                <button className="action-btn reject">
                  <FaTimes className="action-icon" />
                </button>
                <button className="action-btn message">
                  <FaComments className="action-icon" />
                </button>
              </div>
            </div>
            {/* <div className="see-all">
              <a href="#">See All</a>
            </div> */}
          </div>
        </div>

        {/* Calendar */}
        <div className="calendar-section">
          <h3 className="section-title">Calender</h3>
          <div className="calendar-header">
            <span className="calendar-title">March - 2025</span>
          </div>
          <div className="calendar-grid">
            <div className="calendar-days">
              <span>Sa</span>
              <span>Su</span>
              <span>Mo</span>
              <span>Tu</span>
              <span>We</span>
              <span>Th</span>
              <span>Fr</span>
            </div>
            <div className="calendar-dates">
              <span>18</span>
              <span>19</span>
              <span>20</span>
              <span className="active-date">21</span>
              <span>22</span>
              <span>23</span>
              <span>24</span>
              <span>25</span>
              <span>26</span>
              <span>27</span>
              <span>28</span>
              <span>29</span>
              <span>30</span>
              <span>31</span>
              <span className="next-month">01</span>
              <span className="next-month">02</span>
              <span className="next-month">03</span>
              <span className="next-month">04</span>
              <span className="next-month">05</span>
              <span className="next-month">06</span>
              <span className="next-month">07</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;