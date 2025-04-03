
import { useState } from 'react';

const LocationField = ({ label, defaultValue, onChange }) => {
  const [value, setValue] = useState(defaultValue || '');
  
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };
  
  return (
    <div className="field-container">
      <div className="field-label">{label}</div>
      <input 
        className="w-full bg-transparent mt-2 focus:outline-none"
        value={value}
        onChange={handleChange}
        placeholder="Digite sua localização"
      />
    </div>
  );
};

export default LocationField;
