import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Menu from './Menu';
import Aliments from './Aliments';
import Prix from './prix';
import Home from './Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div style={{ paddingTop: '80px', flex: '1' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aliments" element={<Aliments />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/prix" element={<Prix />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;