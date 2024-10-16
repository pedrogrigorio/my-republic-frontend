import { z } from 'zod'

export const changeEmailFormSchema = z.object({
  newEmail: z.string().email('Digite um e-mail válido'),
})
