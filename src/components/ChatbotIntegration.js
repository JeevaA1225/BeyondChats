// // ChatbotIntegration.js

// import React, { useState } from "react";
// import Confetti from "react-confetti";
// import { motion } from "framer-motion";
// import '../styles/ChatbotIntegration.scss'


// const ChatbotIntegration = () => {
//   const [integrationStatus, setIntegrationStatus] = useState(null); // null, 'success', 'failure'

//   const handleTestIntegration = () => {
//     // Simulating integration test
//     setTimeout(() => {
//       setIntegrationStatus(Math.random() > 0.5 ? "success" : "failure");
//     }, 1500);
//   };

//   const handleIntegrationInstructions = () => {
//     alert("Instructions mailed to the developer!");
//   };

//   const resetIntegrationStatus = () => {
//     setIntegrationStatus(null);
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6 text-center">Chatbot Integration & Testing</h1>

//       <div className="flex flex-col gap-4">
//         <button className="button">Test Chatbot</button>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => window.open("https://yourwebsite.com", "_blank")}
//           className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md">
//           Test Chatbot
//         </motion.button>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={handleIntegrationInstructions}
//           className="w-full bg-green-500 text-white py-3 rounded-lg shadow-md">
//           Mail Integration Instructions to Developer
//         </motion.button>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={handleTestIntegration}
//           className="w-full bg-purple-500 text-white py-3 rounded-lg shadow-md">
//           Test Integration
//         </motion.button>
//       </div>

//       {integrationStatus === "success" && (
//         <div className="mt-8 text-center">
//           <Confetti width={window.innerWidth} height={window.innerHeight} />
//           <h2 className="text-2xl font-bold text-green-600">Integration Successful!</h2>
//           <p className="text-gray-700 mt-4">You can now explore the admin panel or start using your chatbot.</p>
//           <div className="flex justify-center gap-4 mt-6">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => alert("Opening Admin Panel...")}
//               className="bg-blue-500 text-white py-2 px-4 rounded-lg">
//               Explore Admin Panel
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => alert("Starting Chatbot...")}
//               className="bg-green-500 text-white py-2 px-4 rounded-lg">
//               Start Talking to Your Chatbot
//             </motion.button>
//           </div>
//         </div>
//       )}

//       {integrationStatus === "failure" && (
//         <div className="mt-8 text-center">
//           <h2 className="text-2xl font-bold text-red-600">Integration Failed</h2>
//           <p className="text-gray-700 mt-4">We couldn’t detect the chatbot integration on your website.</p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={resetIntegrationStatus}
//             className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-lg">
//             Retry
//           </motion.button>
//         </div>
//       )}

//       <div className="mt-12 border-t pt-6">
//         <h2 className="text-xl font-bold">Integration Code Snippet</h2>
//         <p className="text-gray-600 mt-2">Copy and paste the following code snippet into the <code>&lt;head&gt;</code> section of your website:</p>
//         <pre className="bg-gray-100 p-4 mt-4 rounded-lg text-sm text-gray-800 overflow-auto">
//           {`<script>
//   (function() {
//     var chatbot = document.createElement('script');
//     chatbot.src = 'https://beyondchats.com/integration.js';
//     chatbot.async = true;
//     document.head.appendChild(chatbot);
//   })();
// </script>`}
//         </pre>
//       </div>
//     </div>
//   );
// };

// export default ChatbotIntegration;


import { useState } from "react";
import Confetti from "react-confetti";

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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', padding: '2rem' }}>
      {/* Test Chatbot Button */}
      <button
        onClick={() => window.open("https://clientwebsite.com", "_blank")}
        style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}
      >
        Test Chatbot
      </button>

      {/* Integrate on Website Section */}
      <div style={{ width: '100%', maxWidth: '32rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1.5rem' }}>
        <h2 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>Integrate on your website</h2>
        <button
          onClick={handleCopyCode}
          style={{ backgroundColor: '#374151', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.375rem', border: 'none', marginBottom: '1rem', cursor: 'pointer' }}
        >
          Copy Integration Code
        </button>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            type="email"
            placeholder="Developer's email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ flex: '1', padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #d1d5db' }}
          />
          <button
            onClick={handleSendEmail}
            style={{ backgroundColor: '#10b981', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer' }}
          >
            Send
          </button>
        </div>
      </div>

      {/* Test Integration Button */}
      <button
        onClick={handleTestIntegration}
        style={{ backgroundColor: '#8b5cf6', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}
      >
        Test Integration
      </button>

      {/* Integration Result */}
      {integrationSuccess !== null && (
        <div style={{ width: '100%', maxWidth: '32rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1.5rem', textAlign: 'center' }}>
          {integrationSuccess ? (
            <>
              <Confetti />
              <div style={{ fontSize: '3rem', color: '#10b981', marginBottom: '1rem' }}>✔️</div>
              <h2 style={{ fontSize: '1.125rem', fontWeight: '600' }}>Integration Successful!</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
                <button style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer' }}>Explore Admin Panel</button>
                <button style={{ backgroundColor: '#14b8a6', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer' }}>Start Talking to Your Chatbot</button>
                <button style={{ backgroundColor: '#6b7280', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer' }}>Share on Social Media</button>
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
