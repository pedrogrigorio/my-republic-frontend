import { z } from 'zod'

export const changePasswordFormSchema = z
  .object({
    oldPassword: z.string(),
    newPassword: z
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
    confirmNewPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: 'As senhas precisam ser iguais',
    path: ['confirmNewPassword'],
  })
