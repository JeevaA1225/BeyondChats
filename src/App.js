import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import OrganizationSetup from './components/OrganizationSetup';
import ChatbotIntegration from './components/ChatbotIntegration';
import ScrapedData from './components/ScrapedData';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/setup-organization" element={<OrganizationSetup />} />
        <Route path="/scraped-data" element={<ScrapedData />} />
        <Route path="/chatbot-integration" element={<ChatbotIntegration />} />
      </Routes>
    </Router>
  );
}

export default App;
