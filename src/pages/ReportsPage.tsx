
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { usePetContext } from '../context/PetContext';
import PetInfoCard from '../components/PetInfoCard';
import NavBar from '../components/NavBar';

const ReportsPage = () => {
  const navigate = useNavigate();
  const { foundPets, setSelectedPet } = usePetContext();
  
  const handlePetClick = (index: number) => {
    setSelectedPet(foundPets[index]);
    navigate('/pet-details');
  };
  
  return (
    <div className="min-h-screen bg-white p-6 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold mb-6">Doguinhos Encontrados</h1>
        
        <div className="space-y-1">
          {foundPets.map((pet, index) => (
            <PetInfoCard 
              key={index} 
              pet={pet} 
              onClick={() => handlePetClick(index)}
            />
          ))}
        </div>
        
        <div className="mt-8">
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="action-button"
            onClick={() => navigate('/')}
          >
            Voltar ao mapa
          </motion.button>
        </div>
      </motion.div>
      
      <NavBar />
    </div>
  );
};

export default ReportsPage;
