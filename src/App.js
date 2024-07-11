// App.js

import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './frontend/Home';
import VendorLogin from './frontend/vendor/Login/login';
import UserLogin from './frontend/user/Login/login';
import AdminLogin from './frontend/admin/Login/login';
import AdminSignUp from './frontend/admin/signup/signup';
import UserSignUp from './frontend/user/signup/signup';
import Vendor from './frontend/vendor/afterlogin/vendor';
import Main from './frontend/vendor/addItem/main';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vendorLogin" element={<VendorLogin />} />
          <Route path="/userLogin" element={<UserLogin />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/adminSignUp" element={<AdminSignUp />} />
          <Route path='/userSignUp' element= {<UserSignUp/>}/>
          <Route path='/vendor' element= {<Vendor/>}/>
          <Route path='/main' element = {<Main/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
