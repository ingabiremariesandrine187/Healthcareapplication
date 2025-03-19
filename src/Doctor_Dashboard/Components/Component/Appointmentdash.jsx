import React, { useState, useEffect } from 'react';
import { Modal, Button, Input, Skeleton } from 'antd';
import '../Component/Appointmentdas.css';

function Appointmentdash() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editAppointment, setEditAppointment] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    appointmentDate: '',
    appointmentTime: '',
    message: ''
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [forceRender, setForceRender] = useState(false); // Used to force re-render

  useEffect(() => {
    fetchAppointments();
  }, [forceRender]); // Fetch appointments whenever forceRender changes

  const fetchAppointments = () => {
    setLoading(true);
    fetch('http://localhost:5001/api/appointments/getAppointments')
      .then(response => response.json())
      .then(data => {
        setAppointments(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
        setLoading(false);
      });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      fetch(`http://localhost:5001/api/appointments/deleteAppointment/${id}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (response.ok) {
            setAppointments(appointments.filter(app => app._id !== id));
          } else {
            console.error('Failed to delete appointment');
          }
        })
        .catch(error => console.error('Error deleting appointment:', error));
    }
  };

  const handleUpdate = (id) => {
    const appointmentToEdit = appointments.find(app => app._id === id);
    setEditAppointment(id);
    setFormData({ ...appointmentToEdit });
    setIsModalVisible(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setLoading(true);
    fetch(`http://localhost:5001/api/appointments/updateAppointment/${editAppointment}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(updatedAppointment => {
        setAppointments(prevAppointments => 
          prevAppointments.map(app => 
            app._id === editAppointment ? updatedAppointment : app
          )
        );
        setEditAppointment(null);
        setIsModalVisible(false);
        setFormData({ fullName: '', email: '', appointmentDate: '', appointmentTime: '', message: '' });
        setLoading(false);
        setForceRender(!forceRender);  // Toggle forceRender to force re-render
      })
      .catch(error => {
        console.error('Error updating appointment:', error);
        setLoading(false);
      });
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
          {loading ? (
            Array.from({ length: 5 }).map((_, index) => (
              <tr key={index}>
                <td colSpan="6"><Skeleton active /></td>
              </tr>
            ))
          ) : appointments.length > 0 ? (
            appointments.map((app) => (
              <tr key={app._id}>
                <td>{app.fullName}</td>
                <td>{app.email}</td>
                <td>{new Date(app.appointmentDate).toLocaleDateString()}</td>
                <td>{app.appointmentTime}</td>
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

      <Modal title="Edit Appointment" visible={isModalVisible} onOk={handleSubmit} onCancel={() => setIsModalVisible(false)}>
        <Input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required />
        <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <Input type="date" name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} required />
        <Input type="time" name="appointmentTime" value={formData.appointmentTime} onChange={handleChange} required />
        <Input.TextArea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required />
      </Modal>
    </div>
  );
}

export default Appointmentdash;
