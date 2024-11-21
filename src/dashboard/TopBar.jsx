// src/components/Header.js
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      className="bg-purple text-white flex justify-between items-center p-4"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="text-lg font-bold">PixPick Admin</div>
      <div className="flex items-center space-x-5">
        <span>Admin</span>
        <button className="bg-green text-white px-4 py-2 rounded">Logout</button>
      </div>
    </motion.header>
  );
};

export default Header;