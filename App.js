import React from 'react';
import Navbar from './navbar';
import './App.css'; // You can create this file for global styling
import Home from './home';
import Footer from './footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* Rest of your app content */}

      <Home />
      {/* Rest of your app content */}


<Footer/>
    </div>
  );
}

export default App;
