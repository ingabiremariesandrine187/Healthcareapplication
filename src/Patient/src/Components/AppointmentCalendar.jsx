import React from "react";
import "../Styles/AppointmentCalendar.css"; // Import CSS

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthDays = Array.from({ length: 31 }, (_, i) => i + 1);

const appointments = [
  { title: "Dentist", doctor: "Dr. Julia Wanton", time: "09:00 – 11:00 AM", className: "first" },
  { title: "Cardiologist", doctor: "Dr. Julia Wanton", time: "11:00 – 01:00 PM", className: "second" },
  { title: "Physician", doctor: "Dr. Julia Wanton", time: "01:00 – 06:00 PM", className: "third" },
  { title: "Endocrinologist", doctor: "Dr. Julia Wanton", time: "03:00 – 06:00 PM", className: "fourth" },
  { title: "Orthopedist", doctor: "Dr. Julia Wanton", time: "03:00 – 06:00 PM", className: "fifth" }
];

const AppointmentCalendar = () => {
  return (
    <div className="appointment-calendar">
      <h3 className="title">Doctor Appointment</h3>
      <h4 className="month-year">August 2022</h4>
      <table>
        <thead>
          <tr>
            {daysOfWeek.map((day) => (
              <th key={day} className={day === "Sun" ? "highlight" : ""}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((_, weekIndex) => (
            <tr key={weekIndex}>
              {daysOfWeek.map((_, dayIndex) => {
                const date = weekIndex * 7 + dayIndex + 1;
                return date <= 31 ? (
                  <td key={date} className={dayIndex === 0 ? "highlight" : ""}>
                    {date}
                  </td>
                ) : (
                  <td key={`empty-${weekIndex}-${dayIndex}`} className="empty"></td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="appointments">
        {appointments.map((appt, index) => (
          <div key={index} className={`appointment ${appt.className}`}>
            <strong>{appt.title}</strong>
            <p>{appt.doctor}</p>
            <p>{appt.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentCalendar;
