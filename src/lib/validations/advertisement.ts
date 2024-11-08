import { amenities } from '@/data/amenities'
import { rules } from '@/data/rules'
import { BedroomType } from '@/types/bedroomtype'
import { Gender } from '@/types/gender'
import { z } from 'zod'

export const advertisementFormSchema = z.object({
  // Step 1
  title: z.string().min(5, 'O título deve ter pelo menos 5 caracteres'),
  price: z.string().refine(
    (value) => {
      const numericValue = parseFloat(
        value
          .replace(/R\$\s?/, '')
          .replace(/\./g, '')
          .replace(',', '.'),
      )
      return numericValue > 0
    },
    { message: 'O valor deve ser maior que 0' },
  ),
  description: z
    .string()
    .min(10, 'A descrição deve ter pelo menos 10 caracteres'),
  phone: z.string().min(15, { message: 'Campo obrigatório' }),
  stateId: z.string({ message: 'Campo obrigatório.' }),
  cityId: z.string({ message: 'Campo obrigatório.' }),
  picture: z.instanceof(File, { message: 'Campo obrigatório.' }).optional(),

  // Step 2
  genderPreference: z.enum([Gender.MALE, Gender.FEMALE, Gender.MIXED], {
    message: 'Campo obrigatório',
  }),
  allowOppositeGender: z.boolean(),
  totalSlots: z
    .string({ message: 'Campo obrigatório' })
    .refine(
      (val) => parseInt(val) > 0,
      'O número de pessoas deve ser maior que 0',
    ),
  occupiedSlots: z
    .string({ message: 'Campo obrigatório' })
    .refine(
      (val) => parseInt(val) >= 0,
      'O número de vagas ocupadas deve ser maior ou igual a 0',
    ),
  bedroomType: z.enum([BedroomType.INDIVIDUAL, BedroomType.SHARED], {
    message: 'Campo obrigatório',
  }),
  numBedroom: z
    .string({ message: 'Campo obrigatório' })
    .refine(
      (val) => parseInt(val) > 0,
      'O número de quartos deve ser maior que 0',
    ),
  numBathroom: z
    .string({ message: 'Campo obrigatório' })
    .refine(
      (val) => parseInt(val) > 0,
      'O número de banheiros deve ser maior que 0',
    ),
  hasPet: z.enum(['true', 'false'], { message: 'Campo obrigatório' }),

  // Step 3
  amenities: z.object(
    Object.fromEntries(amenities.map((amenity) => [amenity.tag, z.boolean()])),
  ),

  // Step 4
  rules: z.object(
    Object.fromEntries(rules.map((rule) => [rule.tag, z.boolean()])),
  ),
})
