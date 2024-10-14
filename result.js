import React from 'react';
import './App.css'; // Ensure CSS is correctly imported
import Footer from './footer';
import Navbar from './navbar';

function RESULT({ result, symptoms, remedies }) {
  return (
    <div>
      <Navbar />
      <div className="result-header">
        <h2><center>Your Result Is Ready!</center></h2>
      </div>
     
      <Footer />
    </div>
  );
}

export default RESULT;


