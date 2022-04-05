import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  size: keyof typeof sizeStyle;
  color: keyof typeof colorStyle;
  outline?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps> = ({
  size,
  color,
  outline,
  onClick,
  ...props
}) => {
  const buttonColor = outline ? outlineColorStyle[color] : colorStyle[color];
  return (
    <button
      className={`font-bold rounded ${buttonColor} ${sizeStyle[size]}`}
      {...props}
      onClick={onClick}
    />
  );
};

const sizeStyle = {
  small: '2xl:w-20 2xl:h-8 w-full h-12 ',
  medium: 'my-2 w-4/5 h-10 text-lg ',
};

const colorStyle = {
  primary: 'bg-lime-400 text-white hover:opacity-80 ',
  secondary: 'bg-orange-500 text-white hover:opacity-80 ',
  disabled: 'bg-gray-300 text-white ',
};

const outlineColorStyle = {
  primary:
    'bg-transparent hover:bg-lime-50 text-lime-600 border border-lime-400 hover:border-lime-400 ',
  secondary: 'bg-transparent hover:bg-orange-50 text-orange-600 border border-orange-400 ',
  disabled: 'bg-gray-300 text-white ',
};
