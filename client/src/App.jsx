import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Wishlist from './pages/Wishlist.jsx';
import About from './pages/About';
import Footer from './components/Footer';
import MyGames from './pages/Mygames';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Implement logout logic here
  };

  return (
    <div data-theme="synthwave" className='font-sans'>
    <Router>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-games" element={<MyGames />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        {/* Add Login route and page */}
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;