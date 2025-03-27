
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { usePetContext } from '../context/PetContext';
import { Check } from 'lucide-react';

const ConfirmationPage = () => {
  const navigate = useNavigate();
  const { selectedPet, heroInfo } = usePetContext();
  
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
      >
        <h1 className="text-3xl font-bold mb-6">Encontrado</h1>
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full h-48 rounded-lg overflow-hidden mb-6"
        >
          <img 
            src={selectedPet.image} 
            alt="Pet" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="mt-4 mb-8">
          <h2 className="text-xl font-medium mb-4">Dados do doguinho</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
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
        
        <div className="mt-8 mb-8">
          <h2 className="text-xl font-medium mb-4">Dados do Heroi</h2>
          
          <div className="field-container mb-4">
            <div className="field-label">Nome</div>
            <div className="field-value">{heroInfo.name}</div>
          </div>
          
          <div className="field-container mb-4">
            <div className="field-label">CPF</div>
            <div className="field-value">{heroInfo.cpf}</div>
          </div>
          
          <div className="field-container mb-4">
            <div className="field-label">Contato</div>
            <div className="field-value">{heroInfo.contact}</div>
          </div>
          
          <div className="field-container">
            <div className="field-label">Localização</div>
            <div className="field-value text-base">{heroInfo.location}</div>
          </div>
        </div>
        
        <div className="mt-8">
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="action-button"
            onClick={() => navigate('/')}
          >
            Voltar
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ConfirmationPage;
