import React, {SVGProps} from "react";

export const DuplicateInactiveIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
      <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4H12V12H4V4Z" fill="#FFF" stroke="#84cc16" strokeWidth="2" />
        <path d="M8 8H16V16H8V8Z" fill="#FFF" stroke="#84cc16" strokeWidth="2" />
      </svg>
  );
};