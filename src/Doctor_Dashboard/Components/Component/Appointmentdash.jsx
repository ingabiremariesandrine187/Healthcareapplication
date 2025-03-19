import React, { useState, useEffect } from 'react';
import '../Component/Appointmentdas.css';

function Appointmentdash() {
  // Sample data (replace with API data)
  const [appointments, setAppointments] = useState([
    {
      _id: '1',
      fullName: 'John Doe',
      email: 'johndoe@example.com',
      selectedDate: '2025-03-20',
      selectedTime: '10:00 AM',
      message: 'Looking forward to the consultation.'
    },
    {
      _id: '2',
      fullName: 'Jane Smith',
      email: 'janesmith@example.com',
      selectedDate: '2025-03-21',
      selectedTime: '11:30 AM',
      message: 'Need advice on a health issue.'
    },
    {
      _id: '3',
      fullName: 'Michael Johnson',
      email: 'michaelj@example.com',
      selectedDate: '2025-03-22',
      selectedTime: '2:00 PM',
      message: 'Follow-up consultation.'
    }
  ]);

  useEffect(() => {
    // Fetch appointments from the backend API
    // fetch('http://localhost:5000/appointments') // Update with actual API
    //   .then(response => response.json())
    //   .then(data => setAppointments(data))
    //   .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      // Simulate delete
      setAppointments(appointments.filter(app => app._id !== id));
    }
  };

  const handleUpdate = (id) => {
    alert(`Update functionality for ID: ${id} to be implemented`);
  };

  return (
    <div className="appointment-container">
      <h2 className="appointment-title">Appointments</h2>
      <table className="appointment-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Time</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.length > 0 ? (
            appointments.map((app) => (
              <tr key={app._id}>
                <td>{app.fullName}</td>
                <td>{app.email}</td>
                <td>{app.selectedDate}</td>
                <td>{app.selectedTime}</td>
                <td>{app.message}</td>
                <td>
                  <button className="update-btn" onClick={() => handleUpdate(app._id)}>Update</button>
                  <button className="delete-btn" onClick={() => handleDelete(app._id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="no-data">No appointments found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Appointmentdash;
