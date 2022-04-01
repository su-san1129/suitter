import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  size: Size;
  color: 'primary';
};

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps> = ({
  size,
  color,
  ...props
}) => {
  return (
    <button className={defaultButtonStyle.concat(sizeStyle[size], colorStyle[color])} {...props} />
  );
};

const defaultButtonStyle = 'font-bold rounded-xl hover:opacity-80 ';

type Size = 'small' | 'medium';
const sizeStyle = {
  small: 'w-20 h-8 ',
  medium: 'my-2 w-4/5 h-10 text-lg ',
};
const colorStyle = {
  primary: 'bg-lime-400 text-white ',
};
