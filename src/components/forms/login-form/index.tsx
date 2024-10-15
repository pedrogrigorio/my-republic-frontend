'use client'

import InputError from '@/components/shadcnui/input-error'

import { loginFormSchema } from '@/lib/validations/login'
import { LoginFormData } from '@/types/validation-types'
import { zodResolver } from '@hookform/resolvers/zod'
import { saveSession } from '@/lib/auth'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useUser } from '@/context/user-context'
import { Input } from '@/components/shadcnui/input'
import { Label } from '@/components/shadcnui/label'
import { login } from '@/services/auth-service'

interface LoginFormProps {
  onSubmit: () => void
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const { setUser } = useUser()

  const [loginError, setLoginError] = useState<string | null>(null)
  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: async (data) => {
      setLoginError(null)
      await saveSession(data)
      setUser(data.user)
      onSubmit()
    },
    onError: (e: AxiosError) => {
      if (e.response && e.response.status === 401) {
        setLoginError('Credenciais incorretas. Por favor, tente novamente.')
      } else {
        setLoginError('Ocorreu um erro. Por favor, tente mais tarde.')
      }
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  return (
    <form
      id="login-form"
      className="flex flex-col gap-2 px-6 py-4"
      onSubmit={handleSubmit((data) => mutate(data))}
    >
      {loginError && (
        <div className="rounded-xl bg-red-500 bg-opacity-25 p-6">
          <p className="text-sm">{loginError}</p>
        </div>
      )}
      <div>
        <Label htmlFor="email">E-mail *</Label>
        <Input id="email" {...register('email')} />
        <InputError error={errors.email?.message?.toString()} />
      </div>
      <div>
        <Label htmlFor="password">Senha *</Label>
        <Input type="password" id="password" {...register('password')} />
        <InputError error={errors.password?.message?.toString()} />
      </div>
    </form>
  )
}
