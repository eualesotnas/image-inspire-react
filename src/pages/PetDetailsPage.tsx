
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { usePetContext } from '../context/PetContext';

const PetDetailsPage = () => {
  const navigate = useNavigate();
  const { selectedPet } = usePetContext();
  
  if (!selectedPet) {
    navigate('/');
    return null;
  }
  
  return (
    <div className="min-h-screen bg-white p-6 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center"
      >
        <h1 className="text-3xl font-bold mb-6 self-start">Avistamento</h1>
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-48 h-48 rounded-lg overflow-hidden mb-6"
        >
          <img 
            src={selectedPet.image} 
            alt="Pet" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="w-full">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="field-container">
              <div className="field-label">Especie</div>
              <div className="field-value">{selectedPet.species}</div>
            </div>
            <div className="field-container">
              <div className="field-label">Raça</div>
              <div className="field-value">{selectedPet.breed}</div>
            </div>
            <div className="field-container">
              <div className="field-label">Genero</div>
              <div className="field-value">{selectedPet.gender}</div>
            </div>
          </div>
          
          <div className="field-container mb-4">
            <div className="field-label">Localização</div>
            <div className="field-value text-base">{selectedPet.location}</div>
          </div>
          
          <div className="field-container">
            <div className="field-label">Observação</div>
            <div className="text-gray-600 mt-2">
              {selectedPet.observation || 'Sem observações'}
            </div>
          </div>
        </div>
        
        <div className="w-full mt-8">
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="action-button"
            onClick={() => navigate('/hero-data')}
          >
            Encontrei
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default PetDetailsPage;
