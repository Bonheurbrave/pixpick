// src/components/Results.js
import {  useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
const Results = () => {
  const [allimages , setallimages] = useState([])
  const handlegetallimages = async()=>{
    await axios.get("https://pixpick-api.onrender.com/allimages")
    .then(res=>{
      setallimages(res.data)
    })
  }

  useState(()=>{
    handlegetallimages()
  },[])
  
    return (
    <motion.div
      className="p-10 flex-1 extrawidth text-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-violet mb-5">Voting Results</h1>

      {/* Results Overview */}
      <div className="mb-10 text-black">
        <h2 className="text-2xl font-semibold text-purple mb-4">Top 3 Winners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allimages.map((result, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.3 }}
            >
              <img
                src={`http://localhost:5173/public/uploads/posts/${result.image_name}`}
                alt={result.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-violet">{result.title}</h3>
              <p className="text-sm text-gray-600">Votes: {result.votes}</p>
              <div className="mt-4">
                <button className="bg-green px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
    </motion.div>
  );
};

export default Results;
