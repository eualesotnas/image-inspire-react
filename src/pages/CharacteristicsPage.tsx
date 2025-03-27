
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SelectionChip from '../components/SelectionChip';

const CharacteristicsPage = () => {
  const navigate = useNavigate();
  const [breedSelection, setBreedSelection] = useState<string[]>([]);
  const [genderSelection, setGenderSelection] = useState<string | null>(null);
  const [colorSelection, setColorSelection] = useState<string[]>([]);
  
  const breeds = ["Bulldog", "Beagle", "Golden", "Chiuaua", "Pastor Alemão", "Rotweiller"];
  const genders = ["Macho", "Femea"];
  const colors = ["Digging", "Pintado", "Marrom", "Vira-lata"];
  
  const toggleBreed = (breed: string) => {
    if (breedSelection.includes(breed)) {
      setBreedSelection(breedSelection.filter(b => b !== breed));
    } else {
      setBreedSelection([...breedSelection, breed]);
    }
  };
  
  const toggleGender = (gender: string) => {
    setGenderSelection(genderSelection === gender ? null : gender);
  };
  
  const toggleColor = (color: string) => {
    if (colorSelection.includes(color)) {
      setColorSelection(colorSelection.filter(c => c !== color));
    } else {
      setColorSelection([...colorSelection, color]);
    }
  };
  
  const handleSearch = () => {
    navigate('/reports');
  };
  
  return (
    <div className="min-h-screen bg-white p-6 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold mb-6">Características do seu Pet</h1>
        
        <div className="space-y-8">
          <div>
            <div className="grid grid-cols-2 gap-4">
              {breeds.map((breed) => (
                <SelectionChip 
                  key={breed}
                  active={breedSelection.includes(breed)}
                  onClick={() => toggleBreed(breed)}
                >
                  {breed}
                </SelectionChip>
              ))}
            </div>
          </div>
          
          <div>
            <div className="grid grid-cols-2 gap-4">
              {genders.map((gender) => (
                <SelectionChip 
                  key={gender}
                  active={genderSelection === gender}
                  onClick={() => toggleGender(gender)}
                >
                  {gender}
                </SelectionChip>
              ))}
            </div>
          </div>
          
          <div>
            <div className="grid grid-cols-2 gap-4">
              {colors.map((color) => (
                <SelectionChip 
                  key={color}
                  active={colorSelection.includes(color)}
                  onClick={() => toggleColor(color)}
                >
                  {color}
                </SelectionChip>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="action-button"
            onClick={handleSearch}
          >
            Buscar
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default CharacteristicsPage;
