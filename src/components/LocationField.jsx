
import { useState } from 'react';
import { MapPin } from 'lucide-react';

const LocationField = ({ label, defaultValue = '', onChange }) => {
  const [value, setValue] = useState(defaultValue);
  
  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) onChange(e.target.value);
  };
  
  return (
    <div className="field-container">
      <div className="field-label">{label}</div>
      <div className="relative">
        <input
          type="text"
          className="bg-transparent text-xl font-medium w-full focus:outline-none"
          value={value}
          onChange={handleChange}
          placeholder="Digite o endereço ou CEP"
        />
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <MapPin className="text-gray-400" size={20} />
        </div>
      </div>
    </div>
  );
};

export default LocationField;
