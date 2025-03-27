
import { PetInfo } from '../context/PetContext';
import { motion } from 'framer-motion';

interface PetInfoCardProps {
  pet: PetInfo;
  onClick?: () => void;
}

const PetInfoCard = ({ pet, onClick }: PetInfoCardProps) => {
  return (
    <motion.div 
      className="bg-gray-100 rounded-xl p-4 mb-3 flex items-center gap-3"
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex-1">
        <div className="text-gray-400 text-xs mb-1">Encontrado</div>
        <div className="flex flex-wrap gap-4">
          <div>
            <div className="text-gray-400 text-xs">Raça</div>
            <div className="text-dark font-medium">{pet.breed}</div>
          </div>
          <div>
            <div className="text-gray-400 text-xs">Genero</div>
            <div className="text-dark font-medium">{pet.gender}</div>
          </div>
        </div>
        <div className="mt-1">
          <div className="text-gray-400 text-xs">Localização</div>
          <div className="text-dark text-sm">{pet.location}</div>
        </div>
      </div>
      
      {pet.image && (
        <div className="w-16 h-16 rounded-lg overflow-hidden">
          <img 
            src={pet.image} 
            alt="Pet" 
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </motion.div>
  );
};

export default PetInfoCard;
