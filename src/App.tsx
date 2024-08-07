import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AdminPage from './pages/AdminPage';
import SignupPage from './pages/SignupPage';
import ThankYouPage from './pages/ThankYouPage';

export default function App() {
  return (
    <div className="bg-white">
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup/:subscription_code" element={<SignupPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/grecia" element={<AdminPage />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

