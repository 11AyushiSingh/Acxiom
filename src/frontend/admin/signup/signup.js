import React from 'react';
import './signup.css';

function AdminSignUp() {
  return (
    <div className="App">
      <div className="container">
        <h1>Event Management System</h1>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Vendor" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Vendor" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Vendor" />
          </div>
          <div className="form-group">
            <label>Category</label>
            <select>
              <option>Drop Down</option>
              <option>Catering</option>
              <option>Florist</option>
              <option>Decoration</option>
              <option>Lighting</option>
            </select>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
     
    </div>
  );
}

export default AdminSignUp;
