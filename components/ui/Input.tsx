import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, value, onChange, required }) => {const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleBlur = () => {
    if (required && !value) {
      setError(${label} is required);
    } else {
      setError(null);
    }
    setIsFocused(false);
  };

  return (
    <div className="mb-6">
      <label className={block text-lg font-semibold text-pink-500 ${isFocused ? 'text-pink-400' : 'text-black'}}>
        {label}
      </label>
      <motion.div
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
        className={mt-1 p-3 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 ${
          error ? 'border-red-500' : 'border-transparent'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;