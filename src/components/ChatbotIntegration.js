import { useState } from "react";
import Confetti from "react-confetti";
import "../styles/ChatbotIntegration.scss";

export default function ChatbotIntegration() {
  const [integrationSuccess, setIntegrationSuccess] = useState(null);
  const [email, setEmail] = useState("");

  const handleTestIntegration = () => {
    const success = Math.random() > 0.3; // 70% success rate
    setIntegrationSuccess(success);
  };

  const handleCopyCode = () => {
    const dummyCode = `<script src=\"https://dummychatbot.com/script.js\"></script>`;
    navigator.clipboard.writeText(dummyCode);
    alert("Code copied to clipboard!");
  };

  const handleSendEmail = () => {
    if (email) {
      alert(`Instructions sent to ${email}`);
      setEmail("");
    }
  };

  return (
    <div className="mainbg">
      <div className="chatcontentstyle">
        {/* Test Chatbot Button */}

        {/* Integrate on Website Section */}
        <div
          className="chatcontent"
          // style={{
          //   width: "100%",
          //   maxWidth: "32rem",
          //   borderRadius: "0.5rem",
          //   padding: "1.5rem",
          // }}
        >
          <h2>Integrate on your website</h2>

          <div className="headbutton">
            <button
              onClick={() =>
                window.open("https://jeevaaportfolio.netlify.app/#", "_blank")
              }
              className="testchatbot"
            >
              Test Chatbot
            </button>
            <button className="chatint" onClick={handleCopyCode}>
              Copy Integration Code
            </button>
          </div>

          <div className="inputbutton">
            <input
              type="email"
              placeholder="Developer's email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mailinput"
            />
            <button onClick={handleSendEmail} className="sendbutton">
              Send
            </button>
          </div>
          <button onClick={handleTestIntegration} className="integrationbutton">Test Integration</button>

          {/* Integration Result */}
          {integrationSuccess !== null && (
            <div className="successcontent">
              {integrationSuccess ? (
                <>
                  <Confetti />
                  <h2 className="successmessage">
                    Integration Successful!
                  </h2>
                  <div className="integratebuttons">
                    <button className="integratebuttonsstyles">Explore Admin Panel</button>
                    <button className="integratebuttonsstyles">Share on Social Media</button>
                    <button className="integratebuttonsstyles">Start Talking to Your Chatbot</button>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="failuremessage">Integration Not Detected!!</h2>
                  <p>
                    Please ensure you have correctly added the script to your
                    website.
                  </p>
                </>
              )}
            </div>
          )}
        </div>

        {/* Test Integration Button */}
      </div>
    </div>
  );
}
