import React, { useState } from 'react';
import './App.css'; // Ensure CSS is correctly imported
import Footer from './footer';
import Navbar from './navbar';
import first from './first.png';
import sec from './sec.png';
import third from './third.png';
import instruction from './instruction.png';

function UPLOAD() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  // Function to handle file upload
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file); // Set the actual file for API call
    }
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (image) {
      try {
        const formData = new FormData();
        formData.append('file', image);

        const response = await fetch('http://127.0.0.1:8000/predict/', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Error in prediction API');
        }

        const data = await response.json();
        setPrediction(data); // Set the prediction result
        setError(null); // Clear any previous errors
      } catch (err) {
        console.error(err);
        setError('Failed to get prediction. Please try again.');
        setPrediction(null); // Clear previous prediction on error
      }
    } else {
      alert('Please select an image before submitting.');
    }
  };

  // Function to remove the image
  const handleRemoveImage = () => {
    setImage(null);
    setPrediction(null); // Clear prediction when image is removed
    document.getElementById('file-upload').value = ''; // Reset file input value
  };

  return (
    <div>
      <Navbar />
      <div className="edit01">
       
          <center>Identify Your Skin Condition with Artificial Intelligence</center>
       
      </div>
      <div className="edit02">
        <center>Upload a photo to instantly learn what your condition is and how to treat it.</center>
      </div>

      {/* Section 1 */}
      <div className="boxup">
        <div className="side-image2">
          <center><img src={first}style={{ width: "500px", height: "410px" }} alt="First step" /></center>
        </div>
        <div className="text-content2">
          <div className="detailup"><b>"It’s as simple as uploading a photo."</b></div>
          <div className="detail1up">Follow our instructions to upload a photo of a skin problem.</div>
        </div>
      </div>

      {/* Instruction Image */}
      <div className="image">
        <img src={instruction} style={{ width: "890px", height: "410px" }} alt="Instruction" />
      </div>

      {/* Section 2 */}
      <div className="boxup1">
        <div className="side-image3">
          <center><img src={sec} style={{ width: "450px", height: "400px" }} alt="Second step" /></center>
        </div>
        <div className="text-content2">
          <div className="detailup1"><b>"We’ll assess the photo to identify potential skin conditions and suggest effective remedies."</b></div>
          <div className="detail1up1">Get instant answers and personalized recommendations for your skin health.</div>
        </div>
      </div>


      {/* Image Upload Section */}
      <div className="upload-container">
        <form id="upload-form" onSubmit={handleSubmit}>
          <label htmlFor="file-upload" className="upload-button">
            Choose Image from your Computer
          </label>
          <input id="file-upload" type="file" onChange={handleFileChange} />
          <button type="submit" className="submit-button">Upload Image</button>
        </form>

        {/* Display the uploaded image preview with remove button */}
        {image && (
          <div className="image-preview">
            <h1>Image Preview:</h1>
            <img src={URL.createObjectURL(image)} alt="Preview" className="uploaded-image" />
            <button className="remove-button" onClick={handleRemoveImage}>Remove Image</button>
          </div>
        )}

        {/* Display prediction result */}
        {prediction && (
          <div className="boxpredict" >
          <div className="prediction-result" >
            <h1>Prediction Result:</h1>
            <p><b>Disease Name : </b>{prediction.disease_name}</p>
            <p><b>Confidence Score : </b>{prediction.confidence}</p>
            <p><b>Remedies : </b>{prediction.recommendation}</p>
            <img src={prediction.heatmap_image_url} alt="Heatmap" className="heatmap-image" />
          </div></div>
        )}

        {/* Display error message */}
        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default UPLOAD;
