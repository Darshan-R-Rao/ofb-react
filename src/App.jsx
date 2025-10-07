import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Introduction from './pages/Introduction';
import Objective from './pages/Objective';
import Theory from './pages/Theory';
import Simulation from './pages/Simulation';
import Procedure from './pages/Procedure';
import Conclusion from './pages/Conclusion';
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/objective" element={<Objective />} />
            <Route path="/theory" element={<Theory />} />
            <Route path="/simulation" element={<Simulation />} />
            <Route path="/procedure" element={<Procedure />} />
            <Route path="/conclusion" element={<Conclusion />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;