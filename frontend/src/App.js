// frontend/src/App.js
import React from '
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SupabaseProvider } from './contexts/SupabaseContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <SupabaseProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </SupabaseProvider>
  );
}

export default App;
