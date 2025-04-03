
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { usePetContext } from '../context/PetContext.jsx';
import LocationField from '../components/LocationField.jsx';

const HeroDataPage = () => {
  const navigate = useNavigate();
  const { heroInfo } = usePetContext();
  
  const handleSubmit = () => {
    navigate('/confirmation');
  };
  
  return (
    <div className="min-h-screen bg-white p-6 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold mb-6">Dados do heroi</h1>
        
        <div className="space-y-4">
          <div className="field-container">
            <div className="field-label">Nome</div>
            <div className="field-value">{heroInfo.name}</div>
          </div>
          
          <div className="field-container">
            <div className="field-label">CPF</div>
            <div className="field-value">{heroInfo.cpf}</div>
          </div>
          
          <div className="field-container">
            <div className="field-label">Contato</div>
            <div className="field-value">{heroInfo.contact}</div>
          </div>
          
          <LocationField 
            label="Localização" 
            defaultValue={heroInfo.location}
          />
        </div>
        
        <div className="mt-8">
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="action-button"
            onClick={handleSubmit}
          >
            Realizar avistamento
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroDataPage;
