import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router

import Admin from './pages/Admin';
import Status from './pages/Status';  // Import Status page
import Broker from './pages/Broker'
import AdminTwo from './pages/AdminTwo'
import StatusTwo from './pages/StatusTwo';
import BrokerTwo from './pages/BrokerTwo';


function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/status" element={<Status />} />
          <Route path="/broker" element={<Broker />} />
          <Route path="/admintwo" element={<AdminTwo />} />
          <Route path="/statustwo" element={<StatusTwo />} />
          <Route path="/brokertwo" element={<BrokerTwo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
