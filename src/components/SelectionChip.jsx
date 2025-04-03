
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

const SelectionChip = ({ children, active = false, onClick }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      className={`chip ${active ? 'chip-active' : ''}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default SelectionChip;
