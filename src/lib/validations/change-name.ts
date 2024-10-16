import { z } from 'zod'

export const changeNameFormSchema = z.object({
  newName: z
    .string()
    .min(2, { message: 'Digite um nome com pelo menos 2 caracteres' }),
})
