import React, { useState } from 'react';
import { Input } from '../../../components/elements/form/Input';

export const LoginForm = () => {
  const [formItem, setFormItem] = useState<{ [key: string]: boolean }>({});
  const [invalid, setInvalid] = useState<boolean>(false);
  const updateFormState = (obj: { [key: string]: boolean }) => {
    const assign = Object.assign(formItem, obj);
    setFormItem(assign);
    setInvalid(Object.keys(formItem).some((key) => formItem[key]));
  };

  return (
    <div className="w-4/5 m-auto">
      <form className="">
        <Input
          label={'メールアドレス'}
          placeholder={'suitter@example.com'}
          require={true}
          updateFormState={updateFormState}
        />

        <Input
          type="password"
          label={'パスワード'}
          placeholder="******************"
          require={true}
          updateFormState={updateFormState}
        />
        <div className="flex items-center justify-between">
          <button
            className={
              (invalid ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-700') +
              ' text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            }
            type="button"
            disabled={invalid}
          >
            ログイン
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password
          </a>
        </div>
      </form>
    </div>
  );
};
