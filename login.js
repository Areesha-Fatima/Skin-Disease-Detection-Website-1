import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './navbar';
import Footer from './footer';

const LOGIN = () => {
  const navigate = useNavigate();
  
  // Initialize the form with react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm();

  axios.defaults.withCredentials = true;

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email: data.email,
        password: data.password,
      });

      if (response.data.success) {
        navigate("/upload");
        localStorage.setItem('token', response.data.token);
      } else {
        toast.error("Login failed: " + response.data.error);
      }
    } catch (error) {
      console.error("Login error:", error.response || error);
      toast.error(error.response?.data?.error || "An error occurred");
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='boxlogin'>
            <div className="login">LOGIN</div>
            
            <div className="boxlogin1">
              <input
                type="email"
                name="email"
                placeholder="Patient Email"
                {...register("email", { required: "Email is required" })}
                style={{ width: "370px", height: "40px" }}
              />
              {errors.email && <p className="error3">{errors.email.message}</p>}
            </div>

            <div className="boxlogin2">
              <input
                type="password"
                name="password"
                placeholder="Patient Password"
                {...register("password", { required: "Password is required" })}
                style={{ width: "370px", height: "40px" }}
              />
              {errors.password && <p className="error4">{errors.password.message}</p>}
            </div>

            <button className="loginbtn" type="submit">Login</button>
          </div>

          <div className="signup_link">
            Don't have an account? <a href="/signup">Create an Account</a>
          </div>
        </form>
      </div>
      <Footer />
      <ToastContainer /> {/* Toast notifications container */}
    </>
  );
};

export default LOGIN;
