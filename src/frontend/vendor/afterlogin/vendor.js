import React from 'react';
import { useNavigate } from 'react-router-dom';
import './vendor.css';

const Vendor = () => {
    const navigate = useNavigate();
    const handleAddItem = () => {
     navigate('/main');
    }
    return (
        <div className="contain">
            <div>
                <header>
                    <h3>Welcome Vendor</h3>
                </header>
            </div>
            <div className="buttons">
                <button >Your Item</button>
                <button onClick={handleAddItem}>Add New Item</button>
                <button >Transactions</button>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Vendor;
