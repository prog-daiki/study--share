"use client"

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "./input"
import { useCallback, useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { Button } from "./ui/button";

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
  const session = useSession();
  const router = useRouter();
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push('/dashboard');
    }
  }, [session.status]);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant('REGISTER')
    } else {
      setVariant('LOGIN')
    }
  }, [variant])

  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      axios.post('/api/register', data)
        .then(() => signIn('credentials', {
          ...data,
          redirect: false,
        }))
        .then((callback) => {
          if (callback?.error) {
            toast.error('Invalid credentials!');
          }

          if (callback?.ok) {
            router.push('/dashboard')
          }
        })
        .catch(() => toast.error('Something went wrong!'))
        .finally(() => setIsLoading(false))
    }

    if (variant === "LOGIN") {
      signIn('credentials', {
        ...data,
        redirect: false
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error('Invalid credentials!');
          }

          if (callback?.ok) {
            router.push('/dashboard')
          }
        })
        .finally(() => setIsLoading(false))
    }
  }

  return (
    <>
      <div className="mt-8 md:w-1/3">
        <div className="bg-white px-4 py-8 shadow rounded-lg w-full">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {variant === 'REGISTER' && (
              <Input
                label="名前"
                register={register}
                disabled={isLoading}
                errors={errors}
                required
                id="name"
              />
            )}
            {variant === 'REGISTER' && (
              <Input
                label="ユーザーネーム"
                register={register}
                disabled={isLoading}
                errors={errors}
                required
                id="username"
              />
            )}
            <Input
              label="メールアドレス"
              register={register}
              disabled={isLoading}
              errors={errors}
              required
              id="email"
              type="email" />
            <Input
              label="パスワード"
              register={register}
              disabled={isLoading}
              errors={errors}
              required
              id="password"
              type="password" />
            <div>
              <Button className="w-full" type="submit" disabled={isLoading}>
                {variant === "LOGIN" ? 'ログイン' : '会員登録'}
              </Button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex gap-2 justify-center text-sm px-2 text-gray-500">
            <div className="w-2/3">
              {variant === 'LOGIN' ? 'Study Shareは初めてですか?' : 'すでにアカウントを持っていますか?'}
            </div>
            <div className="underline cursor-pointer" onClick={toggleVariant}>
              {variant === 'LOGIN' ? '会員登録' : 'ログイン'}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default AuthForm
