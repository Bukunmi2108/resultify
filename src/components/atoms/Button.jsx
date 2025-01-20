import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
    text, 
    type = 'primary', 
    buttonFormType = 'button',
    size = 'medium', 
    onClick, 
    disabled = false,
    className: propsClassName,
    icon,
    link
}) => {

    const buttonTypes = {
        primary: 'bg-primaryBlue text-white',
        secondary: 'border-primaryBlue border-2 text-primaryBlue',
        'grey-border': 'border-2 border-gray-200 text-gray-500',
        'grey-bg': 'bg-gray-200 border border-gray-500 text-gray-500',
        underline: 'border-b border-primaryBlue text-primaryBlue rounded-none',
        muted: 'text-gray-500 rounded-none',
    };

    const buttonSizes = {
        small: 'text-sm font-regular py-2 px-6',
        medium: 'text-base font-medium py-3 px-6',
        large: 'text-lg font-bold py-4 px-8',
    };


    const buttonStates = {
        true: 'cursor-not-allowed opacity-50',
        false: 'cursor-pointer',
    };

    const buttonTypeClass = buttonTypes[type] || buttonTypes.primary; // Default to primary
    const buttonSizeClass = buttonSizes[size] || buttonSizes.medium; // Default to medium
    const buttonStateClass = buttonStates[disabled.toString()]; 

    const className = `justify-center items-center font-poppins font-medium flex hover:opacity-80
                       ${buttonTypeClass} 
                       ${buttonSizeClass} 
                       ${buttonStateClass} 
                       ${propsClassName || ''}`; // Concatenate with optional propsClassName

    return (
        link?
        <Link to={link} className='flex'>
            <button 
                type={buttonFormType} 
                onClick={onClick} 
                disabled={disabled} 
                className={className} 
            >
                {icon && <span className='mr-2'>{icon}</span>}
                {text}
            </button>
        </Link> :
        <button 
            type={buttonFormType} 
            onClick={onClick} 
            disabled={disabled} 
            className={className} >
            {icon && <span className='mr-2'>{icon}</span>}
            {text}
        </button>
    );
};

export default Button;