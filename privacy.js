import React from 'react';
import './App.js';
import Footer from './footer';
import Navbar from "./navbar";

function PRIVACY() {
  return (
    <><div>

      <Navbar></Navbar>
      <div>
        <h1> <b><center>PRIVACY  POLICY</center></b> </h1></div></div>
        <div className="about">

<h2> <b>Introduction</b> </h2></div>
<div class="abouts">
Welcome to the Skin Disease Detector website ("the Website"). Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our Website. By using the Website, you agree to the collection and use of information in accordance with this policy.</div>

<div className="about">
<h2> <b>Information We Collect</b> </h2></div>
<div class="abouts"><b>Personal Information:</b>We do not require personal information to use the Website. However, if you contact us, we may collect information such as your name, email address, and phone number.</div>
<div class="abouts"><b>Image Data:  </b>When you upload an image for disease detection, the image is temporarily processed to provide you with a diagnosis and is then deleted. We do not store or share your images.</div>
<div class="abouts"><b>Usage Data:</b> We may collect information on how the Website is accessed and used. This may include your IP address, browser type, browser version, the pages of our Website that you visit, the time and date of your visit, and other diagnostic data.</div>

<div className="about"><h2> <b>Use of Data</b> </h2></div>
<div class="abouts"><ul>
    <li><b>To Provide and Maintain Our Service: </b>To process the images you upload and provide you with a disease detection result.</li>
    <li><b>To Improve Our Website: </b>To understand how users interact with our Website and make improvements.</li>
   <li><b>To Communicate with You:</b> To respond to your inquiries and provide customer support if needed.</li>
    </ul>
</div>

<div className="about"><h2> <b>Data Retention</b> </h2></div>
<div class="abouts"><ul>
    <li><b>Image Data: </b> Images uploaded to the Website are processed for disease detection and then deleted immediately. We do not retain any image data.</li>
    <li><b>Usage Data: </b>We may retain usage data for internal analysis purposes. Usage data is generally retained for a shorter period, except when this data is used to strengthen the security or to improve the functionality of our Website.</li>
    </ul>
    </div>

<div className="about"><h2> <b> Data Sharing</b> </h2></div>
<div class="abouts">We do not share your personal information with third parties, except in the following circumstances:
    <ul>
    <li><b>Compliance with Laws: </b> If required by law or in response to valid requests by public authorities.</li>
    <li><b>Protection of Rights:</b>To protect and defend the rights or property of the Website, prevent or investigate possible wrongdoing in connection with the Website, and protect the personal safety of users of the Website or the public.</li>
    </ul>
    </div>

    <div className="about"><h2> Security of Data<b></b> </h2></div> 
    <div class="abouts">
    We are committed to ensuring that your information is secure. We use commercially acceptable means to protect your data, but no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
    </div>

<div className="about"><h2> <b>Your Data Protection Rights</b> </h2></div>
<div class="aboutss">Depending on your location, you may have the following data protection rights:
<ul>
    <li><b>The right to access:  </b>You have the right to request copies of your personal data.</li>
    <li><b>The right to rectification:</b>You have the right to request that we correct any information you believe is inaccurate or complete information you believe.</li>
    </ul>
    </div>
    
    <Footer></Footer></>
  );
}

export default PRIVACY;