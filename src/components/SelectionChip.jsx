
import { motion } from 'framer-motion';

const SelectionChip = ({ children, active, onClick }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      className={`
        py-2 px-3 rounded-lg border cursor-pointer text-center
        ${active ? 'bg-action text-white border-action' : 'bg-white text-gray-700 border-gray-200'}
      `}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default SelectionChip;
