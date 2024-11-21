import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ErrorPage from "./pages/ErrorPage";
import ContactUspage from "./pages/ContactUspage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import AboutUsPage from "./pages/AboutUsPage";
import Navigation from "./components/Navigation";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loader from "./animations/loader.json";
import VotePage from "./pages/VotePage";
import Dashboard from "./dashboard/Dashboard";
import Footer from "./components/Footer";

function App() {
  const [mount, setMount] = useState(false);
  const [showSignup, setShowSignup] = useState(false); // State to toggle between Login and Signup pages

  useEffect(() => {
    const timer = setTimeout(() => {
      setMount(true);
    }, 3000); // 3 seconds delay
    return () => clearTimeout(timer);
  }, []);
  const goto = useNavigate()
  const isLoggedIn = localStorage.getItem("loggedin"); // Check if logged in
  // const [btn , setbtn] = useState()
  const togglePage = () => {
   const timout =  setTimeout(()=>{
      goto("/")
    },3000)
    clearTimeout(timout)
    setShowSignup((prev) => !prev)}; // Toggle between Login and Signup
  useState(()=>{},togglePage)
  return (
    <>
      {!isLoggedIn ? (
        // Display either Login or Signup page based on state

        showSignup ? (
          <div>
            <button
              onClick={togglePage}
              className="absolute top-0 left-0 w-full py-3 bg-green-600 text-lg font-bold text-center hover:text-black ease-in-out duration-300 hover:bg-green-700 focus:outline-none"
            >
              Sign in
            </button>
            <SignupPage togglePage={togglePage} />
          </div>
        ) : (
          <div>
            <button
              onClick={togglePage}
              className="absolute top-0 left-0 w-full py-3 bg-green-600  text-lg font-bold text-center hover:text-black ease-in-out duration-300 hover:bg-green-700 focus:outline-none"
            >
              Sign up
            </button>
            
            <SigninPage togglePage={togglePage} />
          </div>
        )
      ) : mount ? (
        <div>
          <Navigation />
          <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="https://pixpick.vercel.app/" element={<Homepage />} />
            <Route path="https://pixpick.vercel.app/contact" element={<ContactUspage />} />
            <Route
              path="https://pixpick.vercel.app/register"
              element={<SignupPage togglePage={togglePage} />}
            />
            <Route path="https://pixpick.vercel.app/about-us" element={<AboutUsPage />} />
            <Route path="https://pixpick.vercel.app/vote-page" element={<VotePage />} />
            <Route path="https://pixpick.vercel.app/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      ) : (
        <Lottie animationData={loader} />
      )}
      <Footer />
    </>
  );
}

export default App;
