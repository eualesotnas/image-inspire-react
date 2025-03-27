
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SelectionChipProps {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
}

const SelectionChip = ({ children, active = false, onClick }: SelectionChipProps) => {
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
