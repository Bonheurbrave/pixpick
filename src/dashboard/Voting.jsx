// src/components/Voting.js
import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
const Voting = () => {
  const [images, setimages] = useState([]);
  const handlegetallimages = async () => {
    await axios.get("https://pixpick-api.onrender.com/allimages").then((res) => {
      setimages(res.data);
    });
  };

  //delete image
  const handledeleteimage = async (e) => {
    await axios
      .delete(`https://pixpick-api.onrender.com/images/${e}`)
      .then((res) => {
        console.log(res.data);
      });
  };

  useEffect(() => {
    handlegetallimages();
  }, [handledeleteimage]);
  return (
    <motion.div
      className="p-10 flex-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-violet mb-5 extrawidth pt-6">
        Voting Management
      </h1>
      <div className="space-y-5">
        {images.map((image) => {
          return (
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out flex items-center space-x-5">
              <div className="flex-shrink-0">
                <img
                  src={`http://localhost:5173/public/uploads/posts/${image.image_name}`}
                  alt="Voting Image"
                  className="w-24 h-24 object-cover rounded-xl"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl text-purple">{image.owner_name}</h3>
                <p className="text-sm text-gray-600">
                  Voted: {image.votes} times
                </p>
              </div>
              <div className="space-x-3">
                <button onClick={()=>{handledeleteimage(image.image_name)}} className=" flex bg-transparent justify-between px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200">
                  Remove <FaTrashAlt className=" text-blue-600 mt-1 ml-2" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Voting;
