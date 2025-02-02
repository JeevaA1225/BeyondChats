import React, { useState } from 'react';
import '../styles/OrganizationSetup.scss'
import logo from '../assets/output-onlinepngtools.png'
import google from '../assets/7123025_logo_google_g_icon.png'
import card from '../assets/9117392.jpg'
import { useNavigate } from "react-router-dom";

const OrganizationSetup = () => {
  const [company, setCompany] = useState({ name: '', website: '', description: '' });

  const handleChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  return (
    // <div className="max-w-md mx-auto p-4 shadow-lg">
    //   <h1 className="text-2xl font-bold mb-4">Setup Organization</h1>
    //   <form>
    //     <input
    //       type="text"
    //       name="name"
    //       placeholder="Company Name"
    //       value={company.name}
    //       onChange={handleChange}
    //       className="w-full p-2 mb-4 border rounded"
    //     />
    //     <input
    //       type="url"
    //       name="website"
    //       placeholder="Company Website"
    //       value={company.website}
    //       onChange={handleChange}
    //       className="w-full p-2 mb-4 border rounded"
    //     />
    //     <textarea
    //       name="description"
    //       placeholder="Company Description"
    //       value={company.description}
    //       onChange={handleChange}
    //       className="w-full p-2 mb-4 border rounded"
    //     ></textarea>
    //     <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
    //       Next
    //     </button>
    //   </form>
    // </div>
    <div className="mainbg">
      <div className="content">
        <div className="logocontent">
          <img src={logo} /><p>BeyondChats</p>
        </div>
        <h2 className="registertext">Let's setup your organization.</h2>
        <div className="inputfields">
          <label htmlFor="Name" className="lables">
            Name of the Company:
          </label>
          <input
            type="text"
            className="inputfield"
          // value={company.name}
          // onChange={handleChange}
          />
          <br />
          <label htmlFor="email" className="lables">
            Website:
          </label>
          <input
            type="email"
            className="inputfield"
          // value={company.website}
          // onChange={handleChange}
          />
          <br />
          <label htmlFor="password" className="lables">
            Describe your company:
          </label>
          <textarea
            type="text"
            className="textarea"
          // value={company.description}
          // onChange={handleChange}
          >
          </textarea>
          <button className="registerbutton" onClick={() => navigate("/scraped-data")}>Train your model</button>
        </div>
        {/* <h3 style={{ color: 'white' }}>OR</h3> */}
        {/* <div className="google">
          <img src={google} /><p>Sign up with Google</p>
        </div> */}
      </div>
    </div>
  );
};

export default OrganizationSetup;
