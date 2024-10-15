'use client'

import InputError from '@/components/shadcnui/input-error'

import { RadioGroup, RadioGroupItem } from '@/components/shadcnui/radio-group'
import { Controller, useForm } from 'react-hook-form'
import { signUpFormSchema } from '@/lib/validations/sign-up'
import { SignUpFormData } from '@/types/validation-types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useState } from 'react'
import { signup } from '@/services/auth-service'
import { Gender } from '@/types/gender'
import { Input } from '@/components/shadcnui/input'
import { Label } from '@/components/shadcnui/label'

export default function SignUpForm() {
  const [signUpError, setSignUpError] = useState<string | null>(null)
  const [signUpSuccess, setSignUpSuccess] = useState<string | null>(null)

  const { mutate } = useMutation({
    mutationFn: signup,
    onSuccess: async () => {
      setSignUpError(null)
      setSignUpSuccess('Usuário cadastrado com sucesso.')
    },
    onError: (e: AxiosError) => {
      setSignUpSuccess(null)
      if (e.response && e.response.status === 409) {
        setSignUpError('O e-mail informado já está em uso.')
      } else {
        setSignUpError('Ocorreu um erro. Por favor, tente mais tarde.')
      }
    },
  })

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
  })

  return (
    <form
      id="signup-form"
      className="flex flex-col gap-2 px-6 py-4"
      onSubmit={handleSubmit((data) => mutate(data))}
    >
      {signUpSuccess && (
        <div className="rounded-xl bg-green-500 bg-opacity-25 p-6">
          <p className="text-sm">{signUpSuccess}</p>
        </div>
      )}
      {signUpError && (
        <div className="rounded-xl bg-red-500 bg-opacity-25 p-6">
          <p className="text-sm">{signUpError}</p>
        </div>
      )}
      <div>
        <Label htmlFor="name">Nome *</Label>
        <Input id="name" {...register('name')} />
        <InputError error={errors.name?.message?.toString()} />
      </div>
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
      <div>
        <Label htmlFor="passwordConfirm">Senha *</Label>
        <Input
          type="password"
          id="passwordConfirm"
          {...register('passwordConfirm')}
        />
        <InputError error={errors.passwordConfirm?.message?.toString()} />
      </div>

      <div>
        <Label>Gênero *</Label>
        <Controller
          control={control}
          name="gender"
          render={({ field }) => (
            <RadioGroup
              className="mt-2"
              defaultValue={field.value}
              onValueChange={field.onChange}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={Gender.MALE} id="option-one" />
                <Label htmlFor="option-one">Masculino</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={Gender.FEMALE} id="option-two" />
                <Label htmlFor="option-two">Feminino</Label>
              </div>
            </RadioGroup>
          )}
        />
        <InputError error={errors.gender?.message?.toString()} />
      </div>
    </form>
  )
}
