import React, { useRef, useState } from 'react';

type Prop = {
  type?: 'text' | 'password';
  label: string;
  placeholder?: string;
  require?: boolean;
  updateFormState: (obj: { [key: string]: boolean }) => void;
};
export const Input: React.FC<Prop> = ({
  type = 'text',
  label,
  placeholder,
  require = false,
  updateFormState,
}) => {
  const inputElement = useRef<HTMLInputElement>(null);
  const [isRequired, setIsRequired] = useState(false);

  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type={type}
          placeholder={placeholder}
          ref={inputElement}
          onInput={(e) => {
            const isRequired = require && !e.currentTarget.value;
            setIsRequired(isRequired);
            updateFormState({ [label]: isRequired });
          }}
          onBlur={(e) => setIsRequired(require && !e.currentTarget.value)}
        />

        {isRequired && <p className="text-red-500 text-xs italic">{label}を入力してください。</p>}
      </div>
    </>
  );
};
