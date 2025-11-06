
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', fullWidth = false, className = '', ...props }) => {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 ease-in-out transform hover:scale-105";
  
  const variantClasses = {
    primary: 'text-white bg-primary hover:bg-primary-dark focus:ring-primary',
    secondary: 'text-primary-dark bg-primary/10 hover:bg-primary/20 focus:ring-primary',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';

  const disabledClasses = props.disabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : '';

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${disabledClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
