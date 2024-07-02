import { amenities } from '@/data/amenities'
import { rules } from '@/data/rules'
import { z } from 'zod'

export const advertisementFormSchema = z.object({
  // Step 1
  title: z.string().min(5, 'O título deve ter pelo menos 5 caracteres'),
  price: z
    .string()
    .transform((value) => {
      value = value
        .replace(/R\$\s?/, '')
        .replace(/\./g, '')
        .replace(',', '.')

      return parseFloat(value)
    })
    .refine((value) => value > 0, { message: 'O valor deve ser maior que 0' }),
  description: z
    .string()
    .min(10, 'A descrição deve ter pelo menos 10 caracteres'),
  cep: z.string().min(9, { message: 'CEP inválido' }),
  pictures: z
    .array(z.instanceof(File))
    .min(1, 'Pelo menos uma imagem é necessária'),

  // Step 2
  genre: z.enum(['mixed', 'male', 'female'], { message: 'Campo obrigatório' }),
  allowOppositeGender: z.boolean(),
  numPeople: z
    .string({ message: 'Campo obrigatório' })
    .transform((value) => parseInt(value))
    .refine((val) => val > 0, 'O número de pessoas deve ser maior que 0'),
  occupiedVacancies: z
    .string({ message: 'Campo obrigatório' })
    .transform((value) => parseInt(value))
    .refine(
      (val) => val >= 0,
      'O número de vagas ocupadas deve ser maior ou igual a 0',
    ),
  bedroomType: z.enum(['individual', 'shared'], {
    message: 'Campo obrigatório',
  }),
  numRooms: z
    .string({ message: 'Campo obrigatório' })
    .transform((value) => parseInt(value))
    .refine((val) => val > 0, 'O número de quartos deve ser maior que 0'),
  numBathrooms: z
    .string({ message: 'Campo obrigatório' })
    .transform((value) => parseInt(value))
    .refine((val) => val > 0, 'O número de banheiros deve ser maior que 0'),
  petsPresence: z
    .enum(['true', 'false'], { message: 'Campo obrigatório' })
    .transform((v) => v === 'true'),

  // Step 3
  amenities: z.object(
    Object.fromEntries(amenities.map((amenity) => [amenity.tag, z.boolean()])),
  ),

  // Step 4
  rules: z.object(
    Object.fromEntries(rules.map((rule) => [rule.tag, z.boolean()])),
  ),
})
