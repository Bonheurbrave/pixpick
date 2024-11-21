import logo from "../images/logo.png";
import { Link  } from "react-router-dom";
import { motion } from "framer-motion";
import { IoLogOutOutline } from "react-icons/io5";
import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaUserPlus, FaExternalLinkAlt, FaInfoCircle, FaSignInAlt } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling mobile menu
  // const goto = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handlelogout = ()=>{
    localStorage.clear();
    
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="fixed w-full top-0 left-0 bg-gradient-to-r from-purple-600 via-violet-500 to-green-400 text-white z-50"
      >
        {/* Desktop Navigation */}
        <div className="hidden bg-black sm:flex justify-between items-center px-5 py-3">
          <div className="flex items-center">
            <img src={logo} alt="no internet connection" width={50} />
            <Link to={'https://pixpick.vercel.app/'}>
              <h1 className="font-semibold mt-3 px-3 text-xl">PixPick</h1>
            </Link>
          </div>

          <div className="flex space-x-6">
            <a className="text-green-500 hover:text-white transition" href="https://pixpick.vercel.app/contact">
              <FiPhone className="inline mr-2" /> Contact Us
            </a>
            <a className="text-green-500 hover:text-white transition" href="https://pixpick.vercel.app/vote-page">
              <FaSignInAlt className="inline mr-2" /> Vote now
            </a>
            <a className="text-green-500 hover:text-white transition" href="https://pixpick.vercel.app/about-us">
              <FaInfoCircle className="inline mr-2" /> About Us
            </a>
            <a className="text-green-500 hover:text-white transition" href="https://bobo-portfolio.web.app" target="_blank">
              <FaExternalLinkAlt className="inline mr-2" /> Portfolio
            </a>
            <a className="text-green-500 hover:text-white cursor-pointer select-none transition" onClick={handlelogout} href="https://pixpick.vercel.app/">
              <IoLogOutOutline className="inline mr-2" /> Logout
            </a>
            {
              localStorage.getItem("loggedin") == "true"?
              null :
              <Link to="/register">
              <button className="px-5 py-1 bg-green-500 hover:bg-green-600 rounded-lg transition">
                <FaUserPlus className="inline mr-2" /> Sign Up
              </button>
            </Link>
            }
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className=" sm:hidden flex justify-between items-center px-4 py-3 bg-black to-green-400">
          <div className="flex items-center ">
            <img src={logo} alt="no internet connection" width={50} />
            <Link to={'/'}>
              <h1 className="font-semibold mt-3 px-3 text-xl">PixPick</h1>
            </Link>
          </div>

          <button onClick={toggleMenu} className=" text-white focus:outline-none px-3 border-none">
            {isMenuOpen ? (
              <IoMdClose className="w-6 h-6 text-white" />
            ) : (
              <IoMdMenu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="sm:hidden bg-gradient-to-r from-purple-600 via-violet-500 to-green-400 text-white px-4 py-2">
            <div className="flex flex-col items-center">
              <a className="text-green-500 hover:text-white transition py-2" href="/contact">
                <FiPhone className="inline mr-2" /> Contact Us
              </a>
              <a className="text-green-500 hover:text-white transition py-2" href="/login">
                <FaSignInAlt className="inline mr-2" /> Get Started
              </a>
              <a className="text-green-500 hover:text-white transition py-2" href="/about-us">
                <FaInfoCircle className="inline mr-2" /> About Us
              </a>
              <a className="text-green-500 hover:text-white transition py-2" href="https://bobo-portfolio.web.app" target="_blank">
                <FaExternalLinkAlt className="inline mr-2" /> Portfolio
              </a>
              <Link to="/register">
                <button className="px-5 py-1 bg-green-500 hover:bg-green-600 rounded-lg transition mt-3">
                  <FaUserPlus className="inline mr-2" /> Sign Up
                </button>
              </Link>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
}

export default Navigation;
