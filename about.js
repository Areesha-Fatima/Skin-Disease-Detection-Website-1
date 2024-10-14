import React from 'react';
import Navbar from "./navbar";
import './App.js';
import Footer from './footer';

function ABOUT() {
  return (
    <><div>

      <Navbar></Navbar>
      <div>
        <h1> <b><center>ABOUT US</center></b> </h1></div></div>
        <div className="about">
        <h2> <b><center>Welcome to the Skin Disease Detector website!</center></b> </h2>

<h2> <b>Our Mission</b> </h2></div>
<div class="abouts">
Our mission is to leverage advanced technology to provide users with a free, easy-to-use tool for preliminary skin disease detection. We aim to raise awareness about skin health and help users take the necessary precautions to manage their conditions.
</div>

<div className="about">
<h2> <b>What We Do</b> </h2></div>
<div class="abouts">
The Skin Disease Detector website allows users to upload pictures of their skin conditions. Using cutting-edge machine learning algorithms, the website analyzes the uploaded images to detect possible skin diseases. The system then provides the name of the detected disease along with general precautions that users can take.
</div>

<div className="about"><h2> <b>Free of Cost</b> </h2></div>
<div class="abouts">
Our service is completely free of charge. We believe that access to preliminary health information should be available to everyone, without any financial barriers.
</div>

<div className="about"><h2> <b>How It Works</b> </h2></div>

<div class="abouts"><b>Upload a Picture:</b> Users can easily upload an image of their skin condition using our user-friendly interface.</div>
<div class="abouts"><b>Disease Detection: </b>Our advanced machine learning model analyzes the image to detect potential skin diseases.</div>
<div class="abouts"><b>Receive Results:</b> Users receive the name of the detected disease and general precautions to take.
</div>

<div className="about"><h2> <b> Disclaimer</b> </h2></div>
<div class="abouts">
While our tool provides preliminary information, it is not a substitute for professional medical advice, diagnosis, or treatment. We always recommend consulting with a qualified healthcare provider for an accurate diagnosis and appropriate treatment.
</div>

<div className="about"><h2> <b>Our Commitment</b> </h2></div>
<div class="abouts">
We are committed to providing a reliable and secure service. We prioritize user privacy and ensure that all uploaded images are processed temporarily and deleted immediately after analysis. No personal data is stored or shared.
</div>
<div className="about"><h2> <b>Contact Us</b> </h2></div>
<div class="aboutss">
If you have any questions about these Terms of Use, please contact us at:
<ul>
  <li>Email: support@skindisease-detector.com</li>
  <li>Phone: +123-456-7890</li>
</ul>  
</div>
    
    <Footer></Footer></>
  );
}

export default ABOUT;