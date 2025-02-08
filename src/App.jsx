import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Entertainment from './components/Entertainment';
import Sports from './components/Sports';
import Technology from './components/Technology';
import News from './components/News';
// import Translate from './components/Translate';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<News category="general" />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/technology" element={<Technology />} />
        {/* <Route path="/translate" element={<Translate />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
