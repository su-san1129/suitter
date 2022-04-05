import React, { useState } from 'react';
import { Input } from '../../../components/elements/form/Input';
import { login } from '../api/login';
import { useRouter } from 'next/router';
import nookies from 'nookies';
import { Button } from '../../../components/elements/button/Button';
import { useForm } from 'react-hook-form';
import { LoginFormInputs } from '../types/Login';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const router = useRouter();
  const [isError, setError] = useState<boolean>(false);
  const onSubmit = ({ email, password }: LoginFormInputs) => {
    login(email, password)
      .then((token) => {
        nookies.set(null, 'credentials', token, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });
        router.push('/');
      })
      .catch(() => setError(true));
  };

  const hasError = 0 < Object.keys(errors).length;

  return (
    <div className="w-4/5 m-auto">
      <form onSubmit={handleSubmit(onSubmit)} onChange={() => setError(false)}>
        <Input
          registration={register('email', { required: true })}
          label="メールアドレス"
          placeholder="suitter@example.com"
        />

        <Input
          registration={register('password', { required: true })}
          type="password"
          label="パスワード"
          placeholder="******************"
        />
        {isError && (
          <p className="text-red-500 text-xs italic mb-4">
            メールアドレスまたはパスワードが違います。
          </p>
        )}
        <div className="flex items-center justify-between">
          <Button
            type="submit"
            disabled={hasError}
            size="small"
            color={!hasError ? 'primary' : 'disabled'}
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
