import { Gender } from '@/types/gender'
import { z } from 'zod'

export const signUpFormSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: 'Digite um nome com pelo menos 2 caracteres' }),
    email: z.string().email('Digite um e-mail válido'),
    password: z
      .string()
      .min(8, { message: 'A senha precisa ter no mínimo 8 caracteres' })
      .refine((value) => /[A-Z]/.test(value), {
        message: 'A senha precisa ter pelo menos 1 letra maiúscula',
      })
      .refine((value) => /[a-z]/.test(value), {
        message: 'A senha precisa ter pelo menos 1 letra minúscula',
      })
      .refine((value) => /[0-9]/.test(value), {
        message: 'A senha precisa ter pelo menos 1 número',
      })
      .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
        message: 'A senha precisa ter pelo menos 1 símbolo',
      }),
    passwordConfirm: z.string(),
    gender: z.enum([Gender.MALE, Gender.FEMALE]),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'As senhas precisam ser iguais',
    path: ['passwordConfirm'],
  })
