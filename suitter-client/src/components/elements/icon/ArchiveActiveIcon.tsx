import React, {SVGProps} from "react";

export const ArchiveActiveIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
      <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="8" width="10" height="8" fill="#FFF" stroke="#84cc16" strokeWidth="2" />
        <rect x="4" y="4" width="12" height="4" fill="#FFF" stroke="#84cc16" strokeWidth="2" />
        <path d="M8 12H12" stroke="#84cc16" strokeWidth="2" />
      </svg>
  );
};
