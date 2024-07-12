import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const UserLogin = () => {
  const [userId, setUserId] = useState('User');
  const [password, setPassword] = useState('User');
  const Navigate = useNavigate();
  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleChange = () => {
    Navigate('/userPortal');
  }
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
          value={userId}
          onChange={handleUserIdChange}
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
        <button className="login-button" onClick={handleChange}>Login</button>
      </div>
    </div>
  );
};

export default UserLogin;
