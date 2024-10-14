import { z } from 'zod'

export const loginFormSchema = z.object({
  email: z.string().email('Digite um e-mail válido'),
  password: z.string(),
})
