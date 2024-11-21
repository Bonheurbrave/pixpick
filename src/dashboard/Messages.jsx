import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = async (id) => {
    await axios.delete(`https://pixpick-api.onrender.com/message/${id}`)
    .then((res)=>{
        console.log(res)
    })
      
  };

  // Fetch messages from the backend
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('https://pixpick-api.onrender.com/getmessages');
        setMessages(response.data);
        console.log(response.data)
        setLoading(false);
      } catch (err) {
        console.log(err)
        setError('Error fetching messages');
        setLoading(false);
      }
    };

    fetchMessages();
  }, [handleDelete]);


  if (loading) return <div className="text-center py-10 text-xl">Loading messages...</div>;
  if (error) return <div className="text-center py-10 text-red-500 text-xl">{error}</div>;
  if (messages.length === 0) return <div className="text-center py-10 text-xl">No messages available.</div>;

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-4xl font-semibold text-center mb-10">User stacks , issues and ideas</h2>
      <div className="space-y-6">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col space-y-4"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{message.username}</h3>
                <p className="text-sm text-gray-600">{message.email}</p>
              </div>
              
              
                <FaTrash size={20} 
                  onClick={() => handleDelete(message.message_id)}
                  className="text-red-500 hover:text-red-700 mt-8 transition duration-200"  
                />
              
            </div>
            <p className="text-lg text-gray-800">{message.message}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
