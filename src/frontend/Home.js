import React from 'react';
import { useNavigate } from "react-router-dom";
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleLoginVendor = () => {
      navigate("/vendorLogin");
    }
    const handleLoginUser = () => {
        navigate("/userLogin");
      }
      const handleLoginAdmin = () => {
        navigate("/adminLogin");
      }
      const handleSignUpAdmin = () => {
        navigate("/adminSignUp");
      }
      const handleUserSignup = () => {
        navigate("/userSignUp");
      }

    return (
        <div className="container">
            <div>
                <header>
                    <h3>Welcome to technical event management</h3>
                </header>
            </div>
            <div className="buttons">
                <button onClick={handleLoginVendor}>Login as Vendor</button>
                <button onClick={handleLoginAdmin}>Login as Admin</button>
                <button onClick={handleLoginUser}>Login as User</button>
            </div>
            <div className="buttons">
                <button onClick={handleSignUpAdmin}>Signup as Admin</button>
                <button onClick={handleUserSignup}>Signup as User</button>
            </div>
        </div>
    )
}

export default Home;
