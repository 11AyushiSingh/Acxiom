import React, { useState } from 'react';
import './userPortal.css';
import { useNavigate } from 'react-router-dom';

const UserPortal = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedVendor, setSelectedVendor] = useState("Vendor");

    const handleVendorClick = () => {
        setShowDropdown(!showDropdown);
    };

    const handleDropdownItemClick = (vendor) => {
        setSelectedVendor(vendor);
        setShowDropdown(false);
    };

    return (
        <div className="user-portal-container">
            <div>
                <header className="user-portal-header">
                    <h3>Welcome User</h3>
                </header>
            </div>
            <div className="user-portal-buttons">
                <div className="dropdown">
                    <button className="portal-button" onClick={handleVendorClick}>{selectedVendor}</button>
                    {showDropdown && (
                        <div className="dropdown-content">
                            <div className="dropdown-item" onClick={() => handleDropdownItemClick("Catering")}>Catering</div>
                            <div className="dropdown-item" onClick={() => handleDropdownItemClick("Florist")}>Florist</div>
                            <div className="dropdown-item" onClick={() => handleDropdownItemClick("Decorating")}>Decorating</div>
                            <div className="dropdown-item" onClick={() => handleDropdownItemClick("Lighting")}>Lighting</div>
                        </div>
                    )}
                </div>
                <button className="portal-button">Cart</button>
                <button className="portal-button">Guest List</button>
                <button className="portal-button">Order Status</button>
            </div>
            <div>
                <button className="portal-button">Logout</button>
            </div>
        </div>
    );
};

export default UserPortal;
