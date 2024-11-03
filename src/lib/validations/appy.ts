import { z } from 'zod'

export const applyFormSchema = z.object({
  message: z.string().min(1, { message: 'Campo obrigatório' }),
})
