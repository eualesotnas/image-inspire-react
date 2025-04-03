
import React, { createContext, useContext, useState } from 'react';

const PetContext = createContext(undefined);

export const usePetContext = () => {
  const context = useContext(PetContext);
  if (!context) {
    throw new Error('usePetContext must be used within a PetProvider');
  }
  return context;
};

const defaultHeroInfo = {
  name: 'Guilherme Gervasio',
  cpf: '155.584.655-78',
  contact: '+55 27 9 9525-5584',
  location: 'CEP 29120575 - Rua Dez, Aribiri, Vila Velha',
};

export const PetProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const [foundPets, setFoundPets] = useState(Array(6).fill({
    id: '1',
    species: 'Cachorro',
    breed: 'Labrador',
    gender: 'Masculino',
    location: 'CEP 29120575 - Rua Dez, Aribiri, Vila Velha',
    image: '/lovable-uploads/ab6a325a-627c-4574-b89b-808a290bf1b9.png',
  }));
  const [selectedPet, setSelectedPet] = useState(null);
  const [heroInfo, setHeroInfo] = useState(defaultHeroInfo);

  const addPet = (pet) => {
    setPets([...pets, pet]);
  };

  const findPet = (pet) => {
    setFoundPets([...foundPets, pet]);
  };

  return (
    <PetContext.Provider value={{ 
      pets, 
      foundPets, 
      addPet, 
      findPet, 
      selectedPet, 
      setSelectedPet,
      heroInfo,
      setHeroInfo
    }}>
      {children}
    </PetContext.Provider>
  );
};
