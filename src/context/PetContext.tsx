
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface PetInfo {
  id: string;
  species: string;
  breed: string;
  gender: string;
  location: string;
  observation?: string;
  image?: string;
}

export interface HeroInfo {
  name: string;
  cpf: string;
  contact: string;
  location: string;
}

interface PetContextType {
  pets: PetInfo[];
  foundPets: PetInfo[];
  addPet: (pet: PetInfo) => void;
  findPet: (pet: PetInfo) => void;
  selectedPet: PetInfo | null;
  setSelectedPet: (pet: PetInfo | null) => void;
  heroInfo: HeroInfo;
  setHeroInfo: (info: HeroInfo) => void;
}

const PetContext = createContext<PetContextType | undefined>(undefined);

export const usePetContext = () => {
  const context = useContext(PetContext);
  if (!context) {
    throw new Error('usePetContext must be used within a PetProvider');
  }
  return context;
};

const defaultHeroInfo: HeroInfo = {
  name: 'Guilherme Gervasio',
  cpf: '155.584.655-78',
  contact: '+55 27 9 9525-5584',
  location: 'CEP 29120575 - Rua Dez, Aribiri, Vila Velha',
};

export const PetProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pets, setPets] = useState<PetInfo[]>([]);
  const [foundPets, setFoundPets] = useState<PetInfo[]>(Array(6).fill({
    id: '1',
    species: 'Cachorro',
    breed: 'Labrador',
    gender: 'Masculino',
    location: 'CEP 29120575 - Rua Dez, Aribiri, Vila Velha',
    image: '/lovable-uploads/ab6a325a-627c-4574-b89b-808a290bf1b9.png',
  }));
  const [selectedPet, setSelectedPet] = useState<PetInfo | null>(null);
  const [heroInfo, setHeroInfo] = useState<HeroInfo>(defaultHeroInfo);

  const addPet = (pet: PetInfo) => {
    setPets([...pets, pet]);
  };

  const findPet = (pet: PetInfo) => {
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
