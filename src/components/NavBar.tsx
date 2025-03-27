
import { Camera, Search, Check, MapPin, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavBar = () => {
  const location = useLocation();
  
  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="fixed bottom-4 left-0 right-0 flex justify-center z-50"
    >
      <div className="bg-dark px-6 py-3 rounded-full flex items-center gap-8 shadow-lg">
        <Link to="/">
          <Home className="text-white w-7 h-7" />
        </Link>
        
        <Link to="/search">
          <Search className="text-white w-7 h-7" />
        </Link>
        
        <Link to="/new-report" className="relative -mt-10">
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="bg-action p-4 rounded-2xl shadow-lg"
          >
            <Camera className="text-white w-8 h-8" />
          </motion.div>
        </Link>
        
        <Link to="/reports">
          <div className="relative">
            <MapPin className="text-white w-7 h-7" />
            <div className="absolute -right-1 -top-1 bg-action text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              <Check className="w-3 h-3" />
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default NavBar;
