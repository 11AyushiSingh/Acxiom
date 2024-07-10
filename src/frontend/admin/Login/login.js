import React, { useState } from 'react';
import './login.css';

const AdminLogin = () => {
  const [adminId, setAdminId] = useState('Admin');
  const [password, setPassword] = useState('Admin');

  const handleUserIdChange = (event) => {
    setAdminId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="container">
      
      <header>
        <h5>Event Management System</h5>
      </header>
      <div className="form-group">
        <label className="user-label">User Id</label>
        <input
          className="input-field"
          type="text"
          value={adminId}
          onChange={handleUserIdChange}
        />
      </div>
      <div className="form-group">
        <label className="password-label">Password</label>
        <input
          className="input-field"
          //type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="action-buttons">
        <button className="cancel-button">Cancel</button>
        <button className="login-button">Login</button>
      </div>
    </div>
  );
};

export default AdminLogin;
