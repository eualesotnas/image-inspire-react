
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar.jsx';

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center max-w-md"
      >
        <h1 className="text-3xl font-bold mb-6">Encontre seu Pet</h1>
        <p className="text-gray-600 mb-8">
          Ajudamos você a encontrar seu pet perdido ou reportar um animal que você encontrou.
        </p>
        
        <div className="space-y-4">
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="action-button w-full"
            onClick={() => navigate('/map')}
          >
            Ver Mapa de Avistamentos
          </motion.button>
          
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="action-button w-full"
            onClick={() => navigate('/new-report')}
          >
            Reportar um Avistamento
          </motion.button>
          
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="action-button w-full"
            onClick={() => navigate('/search')}
          >
            Buscar por Características
          </motion.button>
        </div>
      </motion.div>
      
      <NavBar />
    </div>
  );
};

export default Index;
