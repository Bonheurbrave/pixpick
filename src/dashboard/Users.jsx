import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Users = () => {
  const [users, setuser] = useState([]);

  // Fetch all users
  const handlegetallusers = async () => {
    await axios.get('https://pixpick-api.onrender.com/getUsers')
      .then((res) => {
        setuser(res.data);
      })
      .catch((err) => console.error('Error fetching users:', err));
  };

  // Delete a user
  const handledeleteuser = async (user) => {
    await axios.delete(`https://pixpick-api.onrender.com/users/${user.user_id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.error('Error deleting user:', err));
  };

  // Fetch users on component mount
  useEffect(() => {
    handlegetallusers();
  }, [handledeleteuser]);

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 pt-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">User List</h1>
      <div className="space-y-4">
        {users.map((user) => (
          <motion.div
            key={user.id}
            className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-lg space-y-4 sm:space-y-0 sm:space-x-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-1">
              <p className="font-medium text-gray-800">{user.username}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
              <p className="text-xs text-gray-400">Password: {user.password}</p>
            </div>

            <FaTrashAlt
              size={20}
              className="text-red-500 cursor-pointer hover:text-red-700 transition-all duration-200"
              onClick={() => handledeleteuser(user)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Users;
