// src/components/Sidebar.js
import { motion } from 'framer-motion';
import { IoHome } from "react-icons/io5";
import {  FaUserAlt } from "react-icons/fa";
import { MdPhotoCamera } from "react-icons/md";
import { ImUpload } from "react-icons/im";
import { FcComboChart } from "react-icons/fc";
import { BiMessageSquareDetail } from "react-icons/bi";

const Sidebar = ({ setActiveSection }) => {
  return (
    <motion.div
      className=" fixed text-black bg-violet w-64 h-full p-6 shadow-lg flex flex-col pt-32"
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      exit={{ x: -250 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      {/* <div className="text-3xl font-extrabold mb-8">PixPick Admin</div> */}
      <ul className="space-y-6">
        <li
          className="flex items-center space-x-4 cursor-pointer hover:bg-blue-500 bg-green-500 rounded-lg p-3 transition duration-200"
          onClick={() => setActiveSection('dashboard')}
        >
          <IoHome className="h-6 w-6 text-white" />
          <span>Dashboard</span>
        </li>
        <li
          className="flex items-center space-x-4 cursor-pointer hover:bg-blue-500 bg-green-500 rounded-lg p-3 transition duration-200"
          onClick={() => setActiveSection('voting')}
        >
          <MdPhotoCamera className="h-6 w-6 text-white" />
          <span>Voting</span>
        </li>
        <li
          className="flex items-center space-x-4 cursor-pointer hover:bg-blue-500 bg-green-500 rounded-lg p-3 transition duration-200"
          onClick={() => setActiveSection('users')}
        >
          <FaUserAlt className="h-6 w-6 text-white" />
          <span>Users</span>
        </li>
        <li
          className="flex items-center space-x-4 cursor-pointer hover:bg-blue-500 bg-green-500 rounded-lg p-3 transition duration-200"
          onClick={() => setActiveSection('upload')}
        >
          <ImUpload className="h-6 w-6 text-white" />
          <span>Upload Images</span>
        </li>
        <li
          className="flex items-center space-x-4 cursor-pointer hover:bg-blue-500 bg-green-500 rounded-lg p-3 transition duration-200"
          onClick={() => setActiveSection('results')}
        >
          <FcComboChart className="h-6 w-6 text-white" />
          <span>Results</span>
        </li>
        
        <li
          className="flex items-center space-x-4 cursor-pointer hover:bg-blue-500 bg-green-500 rounded-lg p-3 transition duration-200"
          onClick={() => setActiveSection('messages')}
        >
          <BiMessageSquareDetail className="h-6 w-6 text-white" />
          <span>Message</span>
        </li>

      </ul>
    </motion.div>
  );
};

export default Sidebar;
