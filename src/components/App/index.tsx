import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Stopwatch } from "src/components/Stopwatch";

function generateRandomPath() {
  return Math.random().toString(36).substring(2, 15); // Generates a random string
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to={`/${generateRandomPath()}`} />} />
        <Route path="/:randomPath" element={<Stopwatch />} />
      </Routes>
    </Router>
  );
}

export default App;
