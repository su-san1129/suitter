import React, { useState } from 'react';
import { Input } from '../../../components/elements/form/Input';
import { login } from '../api/login';
import { useRouter } from 'next/router';
import { FormItem } from '../../../components/elements/form/types';
import nookies from 'nookies';

export const LoginForm = () => {
  const [formItem, setFormItem] = useState<{ [key: string]: FormItem }>({});
  const [invalid, setInvalid] = useState<boolean>(false);
  const router = useRouter();
  const updateFormState = (obj: { [key: string]: FormItem }) => {
    const assign = Object.assign(formItem, obj);
    setFormItem(assign);
    setInvalid(Object.keys(formItem).some((key) => formItem[key].isValid));
  };

  return (
    <div className="w-4/5 m-auto">
      <form>
        <Input
          label="メールアドレス"
          placeholder="suitter@example.com"
          require={true}
          updateFormState={updateFormState}
        />

        <Input
          type="password"
          label="パスワード"
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
            type="submit"
            disabled={invalid}
            onClick={(e) => {
              login(formItem['メールアドレス'].value, formItem['パスワード'].value)
                .then((token) => {
                  nookies.set(null, 'credentials', token, {
                    maxAge: 30 * 24 * 60 * 60,
                    path: '/',
                  });
                  router.replace('/');
                })
                .catch((err) => console.error(err));
              e.preventDefault();
            }}
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
