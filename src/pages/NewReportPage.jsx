
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { usePetContext } from '../context/PetContext.jsx';
import LocationField from '../components/LocationField.jsx';

const NewReportPage = () => {
  const navigate = useNavigate();
  const { addPet } = usePetContext();
  const [formData, setFormData] = useState({
    species: 'Cachorro',
    breed: 'Labrador',
    gender: 'Masculino',
    location: 'CEP 29120575 - Rua Dez, Aribiri, Vila Velha',
  });
  
  const handleSubmit = () => {
    const newPet = {
      id: Date.now().toString(),
      species: formData.species || 'Cachorro',
      breed: formData.breed || 'Labrador',
      gender: formData.gender || 'Masculino',
      location: formData.location || '',
      observation: formData.observation,
      image: '/lovable-uploads/ab6a325a-627c-4574-b89b-808a290bf1b9.png',
    };
    
    addPet(newPet);
    navigate('/hero-data');
  };
  
  return (
    <div className="min-h-screen bg-white p-6 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold mb-6">Novo Avistamento</h1>
        
        <div className="space-y-4">
          <div className="field-container">
            <div className="field-label">Raça</div>
            <div className="field-value">Labrador</div>
          </div>
          
          <div className="field-container">
            <div className="field-label">Especie</div>
            <div className="field-value">Cachorro</div>
          </div>
          
          <div className="field-container">
            <div className="field-label">Genero</div>
            <div className="field-value">Masculino</div>
          </div>
          
          <LocationField 
            label="Localização" 
            defaultValue="CEP 29120575 - Rua Dez, Aribiri, Vila Velha"
            onChange={(value) => setFormData({...formData, location: value})}
          />
          
          <div className="field-container">
            <div className="field-label">Observação</div>
            <textarea 
              className="w-full bg-transparent min-h-[100px] mt-2 focus:outline-none resize-none"
              placeholder="Adicione detalhes que possam ajudar a identificar o animal"
              onChange={(e) => setFormData({...formData, observation: e.target.value})}
            ></textarea>
          </div>
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

export default NewReportPage;
