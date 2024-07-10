import React, { useState } from 'react';
import './signup.css';

const UserSignUp = () => {
  const [name, setName] = useState('User');
  const [password, setPassword] = useState('User');
  const [email, setEmail] = useState('User');

  const handlevendorIdChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleemailchange = (event) => {
    setEmail(event.target.value);
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
        <label className="user-label">Name</label>
        <input
          className="input-field"
          type="text"
          value={name}
          onChange={handlevendorIdChange}
        />
      </div>
      <div className="form-group">
        <label className="user-label">Email</label>
        <input
          className="input-field"
          type="text"
          value={email}
          onChange={handleemailchange}
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
        <button className="login-button">SignUp</button>
      </div>
    </div>
  );
};

export default UserSignUp;
