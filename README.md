# 🩺 Skin Disease Detection Web App — Frontend & ML API
> An AI-powered web application that detects and classifies skin diseases from uploaded images using a trained CNN model. Built as a Final Year Project (FYP) and funded by the **Ignite National Technology Fund**.

---
## 🔗 Related Repository

This repository contains the **React.js frontend** and **FastAPI ML inference API**.  
The backend (Node.js + MongoDB) is in a separate repo:  
👉 [Skin-Disease-Detection-Website-2](https://github.com/Areesha-Fatima/Skin-Disease-Detection-Website-2)

---
## ✨ Features

- 📸 Upload a skin image for real-time disease classification
- 🤖 CNN-based ML model for accurate detection via FastAPI
- 💊 Displays diagnosis results along with suggested remedies
- 🔐 User authentication — Login & Signup
- 📱 Fully responsive design across all screen sizes
- 📄 Includes About, Privacy Policy, and Terms pages

---
## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, JSX, CSS3 |
| ML API | FastAPI, Python |
| ML Model | TensorFlow, OpenCV, CNN |
| Auth | JWT-based (connected to backend) |
| Styling | Custom CSS, Responsive Design |

---

## 📁 Project Structure

```
Skin-Disease-Detection-Website-1/
├── App.js                    # Main app component & routing
├── App.css                   # Global styles
├── index.js                  # React entry point
├── home.js / home.css        # Landing page
├── navbar.js                 # Navigation bar
├── footer.js                 # Footer component
├── login.js                  # Login page
├── signup.js                 # Signup page
├── upload.js                 # Image upload & detection page
├── result.js                 # Detection results display
├── SkinDiseaseClassifier.js  # ML API integration
├── formHandler.js            # Form handling utilities
├── about.js                  # About page
├── privacy.js                # Privacy policy
├── term.js                   # Terms of service
├── script.js                 # Helper scripts
└── image/                    # Static assets
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- Python 3.8+
- pip

### 1. Clone the repository
```bash
git clone https://github.com/Areesha-Fatima/Skin-Disease-Detection-Website-1.git
cd Skin-Disease-Detection-Website-1
```

### 2. Install frontend dependencies
```bash
npm install
```

### 3. Set up FastAPI (ML API)
```bash
pip install fastapi uvicorn tensorflow opencv-python
```

### 4. Run the FastAPI server
```bash
uvicorn main:app --reload
```

### 5. Start the React frontend
```bash
npm start
```

> Make sure the backend (Repo 2) is also running for full functionality.

---

## 🔄 How It Works

1. User signs up / logs in
2. Uploads an image of the affected skin area
3. Image is sent to the FastAPI endpoint
4. CNN model processes the image and returns a classification
5. Result page displays the detected disease and suggested remedies

---

## 🏆 Recognition

- 🎓 Final Year Project (FYP) — Iqra University
- 💰 **Funded by Ignite National Technology Fund (Pakistan)**

---

## 👩‍💻 Author

**Areesha Fatima**  
Web Developer | ML-Integrated Applications  
[LinkedIn](https://linkedin.com) · [GitHub](https://github.com/Areesha-Fatima) · [Portfolio](https://areeshafatima-portfolio.netlify.app)
