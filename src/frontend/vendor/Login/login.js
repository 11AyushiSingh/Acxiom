import React, { useState } from 'react';
import './login.css';

const VendorLogin = () => {
  const [vendorId, setvendorId] = useState('Vendor');
  const [password, setPassword] = useState('Vendor');

  const handlevendorIdChange = (event) => {
    setvendorId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="container">
      <div className="header-buttons">
        <button className="chart-button">CHART</button>
        <button className="back-button">BACK</button>
      </div>
      <header>
        <h5>Event Management System</h5>
      </header>
      <div className="form-group">
        <label className="user-label">User Id</label>
        <input
          className="input-field"
          type="text"
          value={vendorId}
          onChange={handlevendorIdChange}
        />
      </div>
      <div className="form-group">
        <label className="password-label">Password</label>
        <input
          className="input-field"
         // type="password"
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

export default VendorLogin;
