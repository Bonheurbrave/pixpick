import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VotePage = () => {
  const email = localStorage.getItem("youremail");
  const [votes, setVotes] = useState({});
  const [voted, setVoted] = useState();
  const [allImages, setAllImages] = useState([]);
  const [topic, setTopic] = useState([]);
  const navigate = useNavigate();

  const handleGetAllVotes = async () => {
    await axios
      .get("https://pixpick-api.onrender.com/get-allvotes")
      .then((res) => setVotes(res.data[0].allvotes));
  };

  const handleGetAllImages = async () => {
    await axios
      .get("https://pixpick-api.onrender.com/allimages")
      .then((res) => setAllImages(res.data));
  };

  const handleSetVoted = async () => {
    await axios
      .get(`https://pixpick-api.onrender.com/voted-status/${email}`)
      .then((res) => setVoted(res.data[0].voted));
  };

  const handleLike = async (image) => {
    if (voted === "false") {
      await axios.put(`https://pixpick-api.onrender.com/voted-status/${email}`, { value: "true" });
      axios.put(`https://pixpick-api.onrender.com/vote-image/${image.image_id}`, { message: "up" });
      navigate("/vote-page");
    } else {
      alert("You can't vote multiple times.");
    }
  };

  const handleDislike = async (image) => {
    if (voted === "true") {
      await axios.put(`https://pixpick-api.onrender.com/voted-status/${email}`, { value: "false" });
      axios.put(`https://pixpick-api.onrender.com/vote-image/${image.image_id}`, { message: "down" });
      navigate("/vote-page");
    } else {
      alert("You haven't voted yet.");
    }
  };

  const handleGetMotion = async () => {
    await axios
      .get("https://pixpick-api.onrender.com/getmotion")
      .then((res) => setTopic(res.data[0].motion_topic));
  };

  useEffect(() => {
    handleGetAllImages();
    handleSetVoted();
    handleGetMotion();
    handleGetAllVotes();
  }, [handleLike, handleDislike]);

  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-blue-800 via-indigo-600 to-pink-600 pt-32 pb-20 flex flex-col items-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-white text-5xl font-extrabold text-center mb-12 p-2 border-b-4 border-pink-400 max-w-4xl"
      >
        <span className="text-yellow-300">Pix Pick</span> - Vote for the Best Image of the Week!
      </motion.div>

      {/* Motion Section: Topic */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-white text-3xl font-semibold mb-16 text-center max-w-xl"
      >
        <span className="block text-pink-400">{topic}</span>
      </motion.div>

      {/* Image Grid with Hover Effects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-16">
        {allImages.map((image) => (
          <motion.div
            key={image.image_id}
            className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Image with Hover Brightness Effect */}
            <motion.img
              src={`http://localhost:5173/public/uploads/posts/${image.image_name}`}
              alt={image.owner_name}
              className="w-full h-64 object-cover rounded-t-2xl"
              whileHover={{ filter: "brightness(90%)" }}
              transition={{ duration: 0.3 }}
            />

            {/* Vote Controls */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-all duration-300">
              <motion.div className="flex justify-center items-center gap-6">
                <motion.button
                  onClick={() => handleLike(image)}
                  className="p-3 rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white shadow-xl transform transition duration-300 hover:scale-110 hover:shadow-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaThumbsUp size={30} />
                </motion.button>
                <motion.button
                  onClick={() => handleDislike(image)}
                  className="p-3 rounded-full bg-gradient-to-r from-red-400 to-red-600 text-white shadow-xl transform transition duration-300 hover:scale-110 hover:shadow-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaThumbsDown size={30} />
                </motion.button>
              </motion.div>
            </div>

            {/* Image Owner & Vote Count */}
            <div className="p-4 text-center bg-gradient-to-t from-black via-transparent to-transparent rounded-b-2xl">
              <h3 className="text-xl font-semibold text-blue-600 capitalize">{image.owner_name}</h3>
              <div className="mt-2 text-sm text-gray-300">
                <h2 className=" font-bold text-violet-900">Votes: {image.votes}</h2>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    
  );
};

export default VotePage;
