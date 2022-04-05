import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form/dist/types/form';
import { FieldError } from 'react-hook-form';

type Prop = {
  registration: UseFormRegisterReturn;
  type?: 'text' | 'password';
  label: string;
  placeholder?: string;
  error?: FieldError | undefined;
  onChange?: () => void;
};
export const Input: React.FC<Prop> = ({
  registration,
  type = 'text',
  label,
  placeholder,
  error,
}) => {
  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
        <input
          {...registration}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type={type}
          placeholder={placeholder}
        />
        {error && error.type === 'required' && (
          <p className="text-red-500 text-xs italic">{label}を入力してください。</p>
        )}
      </div>
    </>
  );
};
