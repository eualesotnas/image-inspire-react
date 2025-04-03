
import { motion } from 'framer-motion';

const PetInfoCard = ({ pet, onClick }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden mb-3 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex p-3 items-center">
        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
          <img 
            src={pet.image} 
            alt={pet.breed} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="ml-4">
          <div className="text-lg font-semibold">{pet.breed}</div>
          <div className="text-sm text-gray-500">{pet.location}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default PetInfoCard;
