import { useId } from 'react';

const RangeInput = ({ label, min, max, step = 1, value, onChange, unit }) => {
  const id = useId();
  
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
        {label}
      </label>
      <input 
        id={id}
        type="range" 
        min={min} 
        max={max} 
        step={step}
        value={value} 
        onChange={(e) => onChange(parseFloat(e.target.value))} 
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
      />
      <div className="text-center mt-1 text-gray-600">
        {value} {unit}
      </div>
    </div>
  );
};

export default RangeInput;