import { div } from "framer-motion/client";
import React, { useState } from "react";
import '../styles/RegistrationForm.scss';
import logo from '../assets/output-onlinepngtools.png'
import google from '../assets/7123025_logo_google_g_icon.png'
import card from '../assets/9117392.jpg'
import { useNavigate } from "react-router-dom";


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  return (
    // <div className="max-w-md mx-auto p-4 shadow-lg">
    //   <h1 className="text-2xl font-bold mb-4">User Registration</h1>
    //   <form>
    //     <input
    //       type="text"
    //       name="name"
    //       placeholder="Name"
    //       value={formData.name}
    //       onChange={handleChange}
    //       className="w-full p-2 mb-4 border rounded"
    //     />
    //     <input
    //       type="email"
    //       name="email"
    //       placeholder="Email"
    //       value={formData.email}
    //       onChange={handleChange}
    //       className="w-full p-2 mb-4 border rounded"
    //     />
    //     <input
    //       type="password"
    //       name="password"
    //       placeholder="Password"
    //       value={formData.password}
    //       onChange={handleChange}
    //       className="w-full p-2 mb-4 border rounded"
    //     />
    //     <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
    //       Register
    //     </button>
    //   </form>
    //   <div className="mt-4">
    //     <button className="w-full bg-red-500 text-white py-2 rounded">Continue with Google</button>
    //   </div>
    // </div>

    <div className="mainbg">
      <div className="content">
        <div className="logocontent">
          <img src={logo} /><p>BeyondChats</p>
        </div>
        <h2 className="registertext">Hello, Register yourself!</h2>
        <div className="inputfields">
          <label htmlFor="Name" className="lables">
            Name:
          </label>
          <input type="text" className="inputfield" />
          <br />
          <label htmlFor="email" className="lables">
            Email:
          </label>
          <input type="email" className="inputfield" />
          <br />
          <label htmlFor="password" className="lables">
            Password:
          </label>
          <input type="password" className="inputfield" />
          <button className="registerbutton" onClick={() => navigate("/setup-organization")}>Register</button>
        </div>
        <h3 style={{ color: 'white' }}>OR</h3>
        <div className="google">
          <img src={google} /><p>Sign up with Google</p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
