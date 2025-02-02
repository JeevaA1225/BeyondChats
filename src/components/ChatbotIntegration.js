import { useState } from "react";
import Confetti from "react-confetti";
import '../styles/ChatbotIntegration.scss'

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
    <div className="mainbg" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', padding: '2rem' }}>
      {/* Test Chatbot Button */}
      <button
        onClick={() => window.open("https://jeevaaportfolio.netlify.app/#", "_blank")}
        style={{ backgroundColor: 'black', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}
      >
        Test Chatbot
      </button>

      {/* Integrate on Website Section */}
      <div className="chatcontent" style={{ width: '100%', maxWidth: '32rem', borderRadius: '0.5rem', padding: '1.5rem' }}>
        <h2 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>Integrate on your website</h2>
        <button
          onClick={handleCopyCode}
          style={{ backgroundColor: 'green', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.375rem', border: 'none', marginBottom: '1rem', cursor: 'pointer' }}
        >
          Copy Integration Code
        </button>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            type="email"
            placeholder="Developer's email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ flex: '1', padding: '0.5rem', borderRadius: '0.375rem', backgroundColor:'transparent', border:' 1px solid whitesmoke', color:' whitesmoke' }}
          />
          <button
            onClick={handleSendEmail}
            style={{ backgroundColor: 'brown', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer' }}
          >
            Send
          </button>
        </div>
      </div>

      {/* Test Integration Button */}
      <button
        onClick={handleTestIntegration}
        style={{ backgroundColor: 'black', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}
      >
        Test Integration
      </button>

      {/* Integration Result */}
      {integrationSuccess !== null && (
        <div className="chatcontent" style={{ width: '100%', maxWidth: '32rem', borderRadius: '0.5rem', padding: '1.5rem', textAlign: 'center' }}>
          {integrationSuccess ? (
            <>
              <Confetti />
              <div style={{ fontSize: '3rem', color: '#10b981', marginBottom: '1rem' }}>✔️</div>
              <h2 style={{ fontSize: '1.125rem', fontWeight: '600' }}>Integration Successful!</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
                <button style={{ backgroundColor: 'whitesmoke', color: 'black', padding: '1rem 1rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>Explore Admin Panel</button>
                <button style={{ backgroundColor: 'whitesmoke', color: 'black', padding: '1rem 1rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>Start Talking to Your Chatbot</button>
                <button style={{ backgroundColor: 'whitesmoke', color: 'black', padding: '1rem 1rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>Share on Social Media</button>
              </div>
            </>
          ) : (
            <>
              <h2 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#ef4444' }}>Integration Not Detected</h2>
              <p>Please ensure you have correctly added the script to your website.</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
