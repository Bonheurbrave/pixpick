// src/components/Dashboard.js
import { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import TopBar from './TopBar'
import Messages from './Messages'
import Voting from './Voting';
import Users from './Users';
import Upload from './Upload';
import Results from './Results';
import Stats from './Stats'; // For Dashboard Stats
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard'); // State to track the active section

  return (
    <>
    {
      localStorage.getItem("admin") == 'bonheurbrave1@gmail.com'?
    <div className=" text-black flex h-screen">
      <Sidebar setActiveSection={setActiveSection} /> {/* Sidebar to toggle sections */}
      
      <div className="flex-1 flex flex-col">
        {/* <TopBar /> Header with title and logout */}

        {/* Dynamically render the active section */}
        <div className="flex-1 p-10 w-screen px-72">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {activeSection === 'dashboard' && <Stats />}
            {activeSection === 'voting' && <Voting />}
            {activeSection === 'users' && <Users />}
            {activeSection === 'upload' && <Upload />}
            {activeSection === 'results' && <Results />}
            {activeSection === 'messages' && <Messages />}
          </motion.div>
        </div>
      </div>
    </div>
    :
    Navigate("/vote-page")
}
    </>

  );
};

export default Dashboard;
