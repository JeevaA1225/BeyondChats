import { useNavigate } from 'react-router-dom';
import logo from '../assets/output-onlinepngtools.png'
import google from '../assets/7123025_logo_google_g_icon.png'

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (!name || !email || !password) {
      alert('Please fill in all fields!');
    } else {
      navigate("/setup-organization");
    }
  };

  return (
    <div className="mainbg">
      <div className="content">
        <div className="logocontent">
          <img src={logo} alt="logo" />
          <p>BeyondChats</p>
        </div>
        <h2 className="registertext">Hello, Register yourself!</h2>
        <div className="inputfields">
          <label htmlFor="Name" className="lables">Name:</label>
          <input type="text" className="inputfield" required />
          <br />
          <label htmlFor="email" className="lables">Email:</label>
          <input type="email" className="inputfield" required />
          <br />
          <label htmlFor="password" className="lables">Password:</label>
          <input type="password" className="inputfield" required />
          <button className="registerbutton" onClick={handleRegister}>Register</button>
        </div>
        <h3 style={{ color: 'white' }}>OR</h3>
        <div className="google">
          <img src={google} alt="google" />
          <p>Sign up with Google</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
