// src/components/Stats.js
import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaUsers, FaRegChartBar } from 'react-icons/fa'; // Using React Icons for better UI
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Stats = () => {
  // Dummy data for the stats (Total Votes, Top Users, Vote Trends)
  const [votes , setvotes] = useState(0);
  const [topusers, settopusers] = useState([])
  
  const handlegetallvotes = async()=>{
    await axios.get("https://pixpick-api.onrender.com/get-allvotes")
    .then((res)=>{
      setvotes(res.data[0].allvotes)
    })
  }
  const handlegettopusers = async()=>{
    await axios.get("https://pixpick-api.onrender.com/topusers")
    .then((res)=>{
      settopusers(res.data)
    })
  }

  useEffect(()=>{
    handlegetallvotes();
    handlegettopusers();
  },[])
  
  // Dummy data for monthly voting trends
  const voteTrendsData = [
    { name: 'Jan', votes: 200 },
    { name: 'Feb', votes: 300 },
    { name: 'Mar', votes: 400 },
    { name: 'Apr', votes: 350 },
    { name: 'May', votes: 450 },
    { name: 'Jun', votes: 500 },
  ];

  return (
    <motion.div
      className="p-10 flex-1 space-y-10 extrawidth"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Stats Overview Section */}
      <h1 className="text-3xl font-bold text-violet mb-5">Statistics Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Votes */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center space-x-3">
            <FaRegChartBar className="h-8 w-8 text-violet" />
            <h2 className="text-xl font-semibold text-purple">Total Votes</h2>
          </div>
          <p className="  text-green mt-12"><span>People who had voted : </span> <span className=' font-bold'>{votes}</span></p>
        </motion.div>

        {/* Top Users */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center space-x-3">
            <FaUsers className="h-8 w-8 text-violet" />
            <h2 className="text-xl font-semibold text-purple">Top Active Users</h2>
          </div>
          <ul className="mt-4 space-y-2">
            {topusers.map((user, index) => (
              <li key={index} className="flex justify-between text-sm text-gray-600">
                <span className=' capitalize'>{user.owner_name}</span>
                <span className="font-bold text-violet">{user.votes} Votes</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Monthly Voting Trends */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div className="flex items-center space-x-3">
            <FaRegChartBar className="h-8 w-8 text-violet" />
            <h2 className="text-xl font-semibold text-purple">Voting Trends (Monthly)</h2>
          </div>
          <div className="h-64 w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={voteTrendsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="votes" stroke="#8B5CF6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Stats;
