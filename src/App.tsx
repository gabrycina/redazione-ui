import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AdminPage from './pages/AdminPage';

export default function App() {
  return (
    <div className="bg-white">
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/grecia" element={<AdminPage />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

