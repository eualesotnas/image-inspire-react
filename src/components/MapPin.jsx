
import { MapPin as MapPinIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const MapPin = ({ active = false, onClick }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className={`rounded-full p-3 ${active ? 'bg-dark' : 'bg-action'} shadow-lg cursor-pointer z-10`}
      onClick={onClick}
    >
      <MapPinIcon className="text-white" size={20} />
    </motion.div>
  );
};

export default MapPin;
