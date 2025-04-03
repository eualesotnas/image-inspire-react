
import { MapPin as MapPinIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const MapPin = ({ active, onClick }) => {
  return (
    <motion.div 
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <div className={`relative ${active ? 'scale-110' : ''}`}>
        <MapPinIcon 
          className={`w-8 h-8 ${active ? 'text-red-500' : 'text-slate-700'}`}
          strokeWidth={active ? 2.5 : 2}
        />
        <div 
          className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full ${active ? 'bg-red-500' : 'bg-slate-500'}`}
        />
      </div>
    </motion.div>
  );
};

export default MapPin;
