import React, { useState } from 'react';
import { Input } from '../../../components/elements/form/Input';
import { login } from '../api/login';
import { useRouter } from 'next/router';
import { Button } from '../../../components/elements/button/Button';
import { useForm } from 'react-hook-form';
import { LoginFormInputs } from '../types/Login';
import { useAuthContext } from '../auth';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const router = useRouter();
  const { setCredentials } = useAuthContext();

  const [isError, setError] = useState<boolean>(false);
  const onSubmit = ({ email, password }: LoginFormInputs) => {
    login(email, password)
      .then((token) => {
        setCredentials(token);
        router.push('/');
      })
      .catch(() => setError(true));
  };

  const hasError = 0 < Object.keys(errors).length;

  return (
    <div className="2xl:w-4/5 w-full m-auto">
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
        <div className="flex 2xl:items-center 2xl:justify-between flex-col 2xl:flex-row">
          <Button
            type="submit"
            disabled={hasError}
            size="small"
            color={!hasError ? 'primary' : 'disabled'}
          >
            ログイン
          </Button>
          <div>
            <a
              className="mt-4 2xl:mt-0 block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 text-right"
              href="#"
            >
              Forgot Password
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};
