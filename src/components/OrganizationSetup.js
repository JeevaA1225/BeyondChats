import React, { useState } from 'react';
import '../styles/OrganizationSetup.scss';
import logo from '../assets/output-onlinepngtools.png';
import { useNavigate } from "react-router-dom";

const OrganizationSetup = () => {
  const [company, setCompany] = useState({ name: '', website: '', description: '' });

  const handleChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleNext = () => {
    const { name, website, description } = company;

    // Validate if all fields are filled
    if (!name || !website || !description) {
      alert('Please fill in all fields!');
    } else {
      navigate("/scraped-data");
    }
  };

  return (
    <div className="mainbg">
      <div className="content">
        <div className="logocontent">
          <img src={logo} alt="logo" /><p>BeyondChats</p>
        </div>
        <h2 className="registertext">Let's setup your organization.</h2>
        <div className="inputfields">
          <label htmlFor="name" className="lables">
            Name of the Company:
          </label>
          <input
            type="text"
            name="name"
            className="inputfield"
            value={company.name}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="website" className="lables">
            Website:
          </label>
          <input
            type="url"
            name="website"
            className="inputfield"
            value={company.website}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="description" className="lables">
            Describe your company:
          </label>
          <textarea
            name="description"
            className="textarea"
            value={company.description}
            onChange={handleChange}
          />
          <button className="registerbutton" onClick={handleNext}>Train your model</button>
        </div>
      </div>
    </div>
  );
};

export default OrganizationSetup;
