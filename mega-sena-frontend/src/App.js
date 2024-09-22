import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import CreateDraw from './components/CreateDraw';
import ViewDraws from './components/ViewDraws';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-draw" element={<CreateDraw />} />
          <Route path="/get-numbers" element={<ViewDraws />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;