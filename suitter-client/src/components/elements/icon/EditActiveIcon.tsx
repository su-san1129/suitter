import React, {SVGProps} from "react";

export const EditActiveIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
      <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 13V16H7L16 7L13 4L4 13Z" fill="#FFF" stroke="#84cc16" strokeWidth="2" />
      </svg>
  );
};