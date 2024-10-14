import React from 'react';
import './App.css'; // Import the CSS file for responsive styles
import PAT from './PAT.jpg';
import file1 from './file1.jpg';
import model from './model.jpg';

function Home() {
  return (
    <div className="slick-list draggable">
      <div className="home">
        <img src={PAT} alt="Skin Disease" className="responsive-image" />
      </div>
  

      <div className="boxhome">
      <div className="edit1">
       <center>Get instant skin disease detection results without waiting for a dermatologist appointment.</center>
       <p><h2><b><center>You don't have to.</center></b></h2></p> 
      </div>
      </div>

      <div className="side-image">
        <center><img src={file1} style={{ width: "500px", height: "510px" }}alt="" className="responsive-image" /></center>
      </div>

      <div className="text-content">
        <div className="detail0">ACCURATE & ACCESSIBLE</div>
        <div className="detail"><b>No scheduling. No</b></div>
        <div className="detail"><b>appointments.</b></div>
        <div className="detail1">Instant skin disease detection, wherever and whenever you need it.</div>
        <div className="detail2">
          <ul>
          <div className="detail3">  <li>Upload a picture and receive AI-powered analysis in seconds.</li></div>
          <div className="detail3"> <li>Get instant results without the need for a doctor's visit.</li></div>
          <div className="detail3"> <li>Use our service anytime for quick and easy skin disease detection.</li></div>
          <div className="detail3"><li>Receive general precautions based on your analysis.</li></div>
          </ul>
        </div>
  
        <div className="edit3">
     <center>AI-powered skin disease detection is just as effective, if not more so, than traditional doctor visits.</center>
 </div>
      </div>
      <div className="side-image1">
        <center><img src={model} style={{ width: "480px", height: "550px" }}alt="" className="responsive-image" /></center>
      </div>

      <div className="text-content1">
        <button className="btn2">
          <a className="a1" href="/upload">Scan Here</a> 
        </button>
        <div className="detail00">SIMPLE & STRAIGHTFORWARD</div>
        <div className="detail001"><b>How it works:</b></div>
        <div className="detail02">
          <ul>
          <div className="detail03"> <li><b>Upload a Picture:</b> Upload a clear image of your skin condition.</li></div> 
          <div className="detail03"> <li><b>AI Analysis:</b> Our AI-powered system will analyze the image.</li></div> 
          <div className="detail03"> <li><b>Get Results:</b> Receive an instant preliminary diagnosis and general precautions.</li></div> 
          </ul>
        </div>
      </div>
      <div className="boxhome1"> 
      <div className="edit4">
        <center>Here to Help.</center>
      </div>
      <div className="edit5">
        <center>Get instant results and advice from our AI-powered system.</center>
      </div></div>
    </div>
  );
}

export default Home;
