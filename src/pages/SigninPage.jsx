import { useEffect, useState } from "react";
import axios from 'axios'
import { FaLock } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const SigninPage = () => {
  const [showpopup , setshowpopup] = useState(false);
  const message = "Vote for the best weekly images and help your peers shine!"
  const btnname = "No, Thanks"
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const goto = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    await axios.post("https://pixpick-api.onrender.com/login" , formData)
    .then(response=>{
      if (response.data == 'userfound'){
        // goto("/vote-page")
        setshowpopup(true)
        localStorage.setItem("youremail",formData.email);
        localStorage.setItem("loggedin","true")
        goto("/vote-page")
      }else {
        alert("invalid credentials ")
      }
    })
    setFormData({email:"", password:""})

  };

  const handlecontinue = async()=>{
    goto("/vote-page")
  }
  
  return (
    <div className=" text-black w-screen flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 via-violet-500 to-green-400">
      <Modal isOpen={showpopup} oncontinue={handlecontinue} message={message} btnname={btnname}/>
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-8">Welcome to PixPick</h1>
        
        {/* Login Form */}
        <form className="space-y-6">
         
          {/* Password Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <div className="flex items-center border border-gray-300 rounded-lg mt-2">
              <FaLock size={20} className="text-gray-400 ml-3" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 pl-10 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
                placeholder="Enter your email"
              />
            </div>
          </div>
         
          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg mt-2">
              <FaLock size={20} className="text-gray-400 ml-3" />
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-3 pl-10 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full py-3 bg-violet-700 text-white rounded-lg hover:bg-violet-600 transition duration-300 flex items-center justify-center"
          >
            <IoMdLogIn size={20} className="mr-2" />
            Log In
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-6 text-center">
          <p className="text-sm text-black w-full">
            Don't have an account?{" "}
            <a href="/register" className="text-violet-600 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
