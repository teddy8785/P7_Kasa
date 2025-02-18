import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import './styles/index.css';
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos';
import Logements from './pages/Logements';
import Error from './pages/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Accueil" />} />
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/Logements" element={<Logements />} />
        <Route path="/Logements/:id" element={<Logements />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);