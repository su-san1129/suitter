import React from 'react';
import { Input } from '../../../components/elements/form/Input';
import { Button } from '../../../components/elements/button/Button';
import { register as apiRegister } from '../api/register';
import { useForm } from 'react-hook-form';
import { RegisterFormInputs } from '../types/Register';

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();
  const onSubmit = async (data: RegisterFormInputs) => {
    await apiRegister(data);
    window.location.href = '/login';
  };

  const isError = 0 < Object.keys(errors).length;

  return (
    <div className="w-4/5 m-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          registration={register('name', { required: true })}
          error={errors['name']}
          label="名前"
          placeholder="例) suitter太郎"
        />
        <Input
          registration={register('email', { required: true })}
          error={errors['email']}
          label="メールアドレス"
          placeholder="suitter@example.com"
        />
        <Input
          registration={register('password', { required: true })}
          error={errors['password']}
          label="パスワード"
          type="password"
          placeholder="******************"
        />
        <Input
          registration={register('phoneNumber', { required: true })}
          error={errors['phoneNumber']}
          label="電話番号"
          placeholder="例) 08012345678"
        />
        <div className="flex items-center justify-between">
          <Button
            type="submit"
            disabled={isError}
            size="small"
            color={!isError ? 'primary' : 'disabled'}
          >
            新規登録
          </Button>
        </div>
      </form>
    </div>
  );
};
