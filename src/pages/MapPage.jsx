
import { useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import MapPin from '../components/MapPin.jsx';
import { usePetContext } from '../context/PetContext.jsx';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const MapPage = () => {
  const { foundPets, setSelectedPet } = usePetContext();
  const navigate = useNavigate();
  const [activePinIndex, setActivePinIndex] = useState(null);
  
  const handlePinClick = (index) => {
    setActivePinIndex(index);
    setSelectedPet(foundPets[index]);
    navigate('/pet-details');
  };
  
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <motion.div 
        className="p-6 pb-0"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold">Mapa</h1>
      </motion.div>
      
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/d243804e-d637-4093-9e79-1a56965f7d7c.png" 
          className="w-full h-full object-cover opacity-25"
          alt="Map background"
        />
      </div>
      
      {/* Static pins for demo */}
      <div className="absolute top-1/4 right-1/3">
        <MapPin onClick={() => handlePinClick(0)} active={activePinIndex === 0} />
      </div>
      <div className="absolute top-2/3 right-2/3">
        <MapPin onClick={() => handlePinClick(1)} active={activePinIndex === 1} />
      </div>
      <div className="absolute bottom-1/4 right-1/4">
        <MapPin onClick={() => handlePinClick(2)} active={activePinIndex === 2} />
      </div>
      <div className="absolute bottom-1/3 left-1/3">
        <MapPin onClick={() => handlePinClick(3)} active={activePinIndex === 3} />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-dark rounded-full p-3 shadow-lg">
          <div className="bg-action w-4 h-4 rounded-full"></div>
        </div>
      </div>
      
      <NavBar />
    </div>
  );
};

export default MapPage;
