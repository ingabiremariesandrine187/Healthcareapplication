import React, { useState } from 'react';
import '../Component/Setting.css'; // Ensure the correct path

const Settings = () => {
  const [theme, setTheme] = useState('light'); // For light/dark mode toggle
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(true);

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    if (e.target.value === 'dark') {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  };

  const handleSave = () => {
    // Logic to save settings (e.g., make an API call)
    console.log('Settings saved');
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="settings-section">
        <h3>Profile</h3>
        <p>Manage your personal information and password.</p>
        {/* Include fields for updating user info */}
        {/* Example: */}
        {/* <input type="text" placeholder="New Name" /> */}
      </div>

      <div className="settings-section">
        <h3>Notifications</h3>
        <label>
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
          />
          Email Notifications
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={smsNotifications}
            onChange={() => setSmsNotifications(!smsNotifications)}
          />
          SMS Notifications
        </label>
      </div>

      <div className="settings-section">
        <h3>Appearance</h3>
        <label>
          <input
            type="radio"
            value="light"
            checked={theme === 'light'}
            onChange={handleThemeChange}
          />
          Light Mode
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="dark"
            checked={theme === 'dark'}
            onChange={handleThemeChange}
          />
          Dark Mode
        </label>
      </div>

      <div className="settings-section">
        <h3>Appointment Settings</h3>
        <p>Set your availability for appointments and notification preferences.</p>
        {/* Example for availability settings */}
        {/* <input type="text" placeholder="Available hours" /> */}
      </div>

      <div className="settings-section">
        <button onClick={handleSave} className="save-btn">
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
