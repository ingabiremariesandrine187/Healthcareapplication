import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Input, Skeleton, message } from 'antd';
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

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get('http://localhost:5001/api/appointments/getAppointments');
      setAppointments(data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
      message.error('Failed to fetch appointments');
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!isModalVisible) {
      fetchAppointments();  // Refresh data after closing the modal
    }
  }, [isModalVisible]);

  const fetchSingleAppointment = (id) => {
    setLoading(true);
    axios.get(`http://localhost:5001/api/appointments/getAppointment/${id}`)
      .then(response => {
        setEditAppointment(id);
        setFormData({
          fullName: response.data.fullName,
          email: response.data.email,
          appointmentDate: response.data.appointmentDate,
          appointmentTime: response.data.appointmentTime,
          message: response.data.message,
          status: response.data.status,
        });
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching appointment:', error);
        message.error('Failed to fetch appointment details');
        setLoading(false);
      });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      try {
        await axios.delete(`http://localhost:5001/api/appointments/deleteAppointment/${id}`);
        fetchAppointments();
      } catch (error) {
        console.error('Error deleting appointment:', error);
        message.error('Failed to delete appointment');
      }
    }
  };

  const handleUpdate = (id) => {
    fetchSingleAppointment(id);
    setIsModalVisible(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirm = (id, email, fullName, date, time, message) => {
    const isConfirmed = window.confirm(`Are you sure you want to confirm the appointment for ${fullName}?`);

    if (isConfirmed) {
      const confirmationData = {
        email,
        fullName,
        appointmentDate: date,
        appointmentTime: time,
        message,
        status: 'Confirmed',
      };

      setLoading(true);

      axios.put(`http://localhost:5001/api/appointments/updateAppointment/${id}`, confirmationData)
        .then(response => {
          message.success(`Appointment confirmed successfully for ${fullName}`);
          fetchAppointments(); // Refresh the entire appointments list
        })
        .catch(error => {
          console.error('Error confirming appointment:', error);
          message.error('Failed to confirm appointment');
        })
        .finally(() => {
          setLoading(false); // Ensure loading is stopped in all scenarios
        });
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await axios.put(`http://localhost:5001/api/appointments/updateAppointment/${editAppointment}`, formData);
      fetchAppointments(); // Refresh the entire appointments list
      setEditAppointment(null);
      setIsModalVisible(false);
      setFormData({ fullName: '', email: '', appointmentDate: '', appointmentTime: '', message: '' });
    } catch (error) {
      console.error('Error updating appointment:', error);
      message.error('Failed to update appointment');

    }
    setLoading(false);
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
            {/* <th>Status</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            Array.from({ length: 5 }).map((_, index) => (
              <tr key={index}>
                <td colSpan="7"><Skeleton active /></td>
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
                {/* <td>{app.status}</td> */}
                <td>
                  <button className="update-btn" onClick={() => handleUpdate(app._id)}>Update</button>
                  <button className="delete-btn" onClick={() => handleDelete(app._id)}>Delete</button>
                  <button className="confirm-btn" onClick={() => handleConfirm(app._id, app.email, app.fullName, app.appointmentDate, app.appointmentTime, app.message)}>Confirm</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="no-data">No appointments found</td>
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
