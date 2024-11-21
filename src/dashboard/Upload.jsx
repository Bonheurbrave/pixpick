import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState();
  const [newTopic, setNewTopic] = useState();
  const formdata = new FormData();
  const goto = useNavigate();

  formdata.append("image", image);
  formdata.append("title", title);

  // Handle image upload
  const handleUpload = async (e) => {
    e.preventDefault();
    await axios.post("https://pixpick-api.onrender.com/upload", formdata).then((res) => {
      console.log(res.data);
      alert("Image uploaded successfully!");
    });
  };

  // Fetch current topic
  const handleGetTopic = async () => {
    await axios.get("https://pixpick-api.onrender.com/getmotion").then((res) => {
      setTopic(res.data[0].motion_topic);
    });
  };

  // Update the motion topic
  const handleUpdateMotion = async () => {
    await axios.put(`https://pixpick-api.onrender.com/motion`, { motion: newTopic });
    console.log(newTopic);
    const timeout = setTimeout(() => {
      goto("/dashboard")
    }, 2000);
    clearTimeout(timeout)
  };

  useEffect(() => {
    handleGetTopic();
  }, [handleUpdateMotion]);

  return (
    <motion.div
      className="p-6 lg:p-12 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl sm:text-4xl font-semibold text-center text-gray-800 mb-8">
        Upload New Competitor
      </h1>

      {/* Image Upload Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8 space-y-6">
        <input
          type="text"
          placeholder="Image Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
        />

        <div className="space-y-4">
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer"
          />

          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="preview"
              className="w-40 h-40 object-cover rounded-xl mb-5 mx-auto"
            />
          )}

          <motion.button
            onClick={handleUpload}
            className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-200"
            whileHover={{ scale: 1.05 }}
          >
            Upload Image
          </motion.button>
        </div>
      </div>

      {/* Motion Topic Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
        <h2 className="font-semibold text-xl text-gray-800">Motion Topic</h2>
        <p className="text-sm text-gray-500">
          <span className="underline">Previous Motion:</span>{" "}
          <span className="font-bold text-gray-800">{topic}</span>
        </p>

        <div className="flex items-center space-x-4 mt-4">
          <input
            onChange={(e) => setNewTopic(e.target.value)}
            type="text"
            placeholder="New topic"
            className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />
          <FaEdit
            size={20}
            className="text-green-500 cursor-pointer"
            onClick={() => setTopic("")}
          />
        </div>

        <div className="flex justify-end mt-6">
          <motion.button
            onClick={handleUpdateMotion}
            className="py-2 px-6 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-200"
            whileHover={{ scale: 1.05 }}
          >
            Update Motion
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Upload;
