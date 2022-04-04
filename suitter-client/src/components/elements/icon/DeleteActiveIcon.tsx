import React, { SVGProps } from 'react';

export const DeleteActiveIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="6" width="10" height="10" fill="#FFF" stroke="#84cc16" strokeWidth="2" />
      <path d="M3 6H17" stroke="#84cc16" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#84cc16" strokeWidth="2" />
    </svg>
  );
};
