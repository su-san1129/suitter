import React, { useState } from 'react';
import { Input } from '../../../components/elements/form/Input';
import { login } from '../api/login';
import { useRouter } from 'next/router';
import { FormItem } from '../../../components/elements/form/types';
import nookies from 'nookies';
import { Button } from '../../../components/elements/button/Button';

export const LoginForm = () => {
  const [formItem, setFormItem] = useState<{ [key: string]: FormItem }>({});
  const [invalid, setInvalid] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const router = useRouter();
  const updateFormState = (obj: { [key: string]: FormItem }) => {
    const assign = Object.assign(formItem, obj);
    setFormItem(assign);
    setInvalid(Object.keys(formItem).some((key) => formItem[key].isValid));
    setError(false);
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
        {isError && (
          <p className="text-red-500 text-xs italic mb-4">
            メールアドレスまたはパスワードが違います。
          </p>
        )}
        <div className="flex items-center justify-between">
          <Button
            type="submit"
            disabled={invalid}
            onClick={(e) => {
              login(formItem['メールアドレス'].value, formItem['パスワード'].value)
                .then((token) => {
                  nookies.set(null, 'credentials', token, {
                    maxAge: 30 * 24 * 60 * 60,
                    path: '/',
                  });
                  router.push('/');
                })
                .catch(() => setError(true));
              e.preventDefault();
            }}
            size="small"
            color={!invalid ? 'primary' : 'disabled'}
          >
            ログイン
          </Button>
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
