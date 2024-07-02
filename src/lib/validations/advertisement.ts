import { amenities } from '@/data/amenities'
import { rules } from '@/data/rules'
import { z } from 'zod'

export const advertisementFormSchema = z.object({
  title: z.string().min(5, 'O título deve ter pelo menos 5 caracteres'),
  price: z.string(),
  description: z
    .string()
    .min(10, 'A descrição deve ter pelo menos 10 caracteres'),
  cep: z.string(),
  pictures: z
    .array(z.instanceof(File))
    .min(1, 'Pelo menos uma imagem é necessária'),
  genre: z.string(), // change to enum
  allowOppositeGender: z.boolean(),
  numPeople: z
    .string()
    .transform((value) => parseInt(value))
    .refine((val) => val > 0, 'O número de pessoas deve ser maior que 0'),
  occupiedVacancies: z
    .string()
    .transform((value) => parseInt(value))
    .refine(
      (val) => val >= 0,
      'O número de vagas ocupadas deve ser maior ou igual a 0',
    ),
  bedroomType: z.string(), // change to enum
  numRooms: z
    .string()
    .transform((value) => parseInt(value))
    .refine((val) => val > 0, 'O número de quartos deve ser maior que 0'),
  numBathrooms: z
    .string()
    .transform((value) => parseInt(value))
    .refine((val) => val > 0, 'O número de banheiros deve ser maior que 0'),
  petsPresence: z.string().transform((v) => v === 'true'),
  amenities: z.object(
    Object.fromEntries(amenities.map((amenity) => [amenity.tag, z.boolean()])),
  ),
  rules: z.object(
    Object.fromEntries(rules.map((rule) => [rule.tag, z.boolean()])),
  ),
})
