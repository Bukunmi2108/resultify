import React, { useState } from 'react';

const Input_sm = ({ 
    label, 
    type = 'text', 
    name,
    placeholder, 
    onChange, 
    value, 
    error, 
    className, 
    ...otherProps 
}) => {

    const [inputValue, setInputValue] = useState(value || ''); 
    const [nameValue, setNameValue] = useState(name || ''); 

    const handleChange = (event) => {
        setNameValue(event.target.name);
        setInputValue(event.target.value);
        const { name, value } = event.target; // Destructure name and value from event.target
        if (onChange) {
          onChange(name, value); // Pass name and value to the parent component's onChange prop
        }
      };


    return (
        <input 
            type={type} 
            name={nameValue}
            placeholder={placeholder} 
            value={inputValue} 
            onChange={handleChange} 
            className={`border rounded-sm p-4 outline-none border-gray-500 placeholder`} 
            {...otherProps} 
        />
    );
};

export default Input_sm;