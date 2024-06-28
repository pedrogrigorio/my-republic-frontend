'use client'

import FirstStep from './first-step'
import SecondStep from './second-step'
import ThirdStep from './third-step'
import FourthStep from './fourth-step'
import FifthStep from './fifth-step'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { amenities } from '@/data/amenities'
import { rules } from '@/data/rules'
import { z } from 'zod'
import { useRouter } from 'next/navigation'

interface CreateAdvertisementFormProps {
  currentStep: number
}

const advertisementFormSchema = z.object({
  title: z.string(),
  price: z.string(),
  description: z.string(),
  cep: z.string(),
  pictures: z
    .array(z.instanceof(File))
    .min(1, 'Pelo menos uma imagem é necessária'),
  genre: z.string(),
  allowOppositeGender: z.boolean(),
  numPeople: z.string().transform((value) => parseInt(value)),
  occupiedVacancies: z.string().transform((value) => parseInt(value)),
  bedroomType: z.string(),
  numRooms: z.string().transform((value) => parseInt(value)),
  numBathrooms: z.string().transform((value) => parseInt(value)),
  petsPresence: z.string().transform((v) => v === 'true'),
  amenities: z.object(
    Object.fromEntries(amenities.map((amenity) => [amenity.tag, z.boolean()])),
  ),
  rules: z.object(
    Object.fromEntries(rules.map((rule) => [rule.tag, z.boolean()])),
  ),
})

type AdvertisementFormData = z.infer<typeof advertisementFormSchema>

export default function CreateAdvertisementForm({
  currentStep,
}: CreateAdvertisementFormProps) {
  const router = useRouter()
  const createAdForm = useForm<AdvertisementFormData>({
    resolver: zodResolver(advertisementFormSchema),
  })

  const { handleSubmit } = createAdForm

  const onSubmit = (data: AdvertisementFormData) => {
    console.log(data)

    router.replace('/my-ads')
  }

  return (
    <FormProvider {...createAdForm}>
      <form onSubmit={handleSubmit(onSubmit)} className="py-5">
        {currentStep === 1 && <FirstStep />}

        {currentStep === 2 && <SecondStep />}

        {currentStep === 3 && <ThirdStep />}

        {currentStep === 4 && <FourthStep />}

        {currentStep === 5 && <FifthStep />}
      </form>
    </FormProvider>
  )
}
