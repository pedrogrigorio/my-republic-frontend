'use client'

import FirstStep from './first-step'
import SecondStep from './second-step'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { z } from 'zod'
import { amenities } from '@/data/amenities'
import { rules } from '@/data/rules'
import ThirdStep from './third-step'

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
})

type AdvertisementFormData = z.infer<typeof advertisementFormSchema>

export default function CreateAdvertisementForm({
  currentStep,
}: CreateAdvertisementFormProps) {
  const createAdForm = useForm<AdvertisementFormData>({
    resolver: zodResolver(advertisementFormSchema),
  })

  const { handleSubmit } = createAdForm

  const onSubmit = (data: AdvertisementFormData) => {
    console.log(data)
  }

  return (
    <FormProvider {...createAdForm}>
      <form onSubmit={handleSubmit(onSubmit)} className="py-5">
        {currentStep === 1 && <FirstStep />}

        {currentStep === 2 && <SecondStep />}

        {currentStep === 3 && <ThirdStep />}

        {currentStep === 4 && (
          <div>
            <div></div>
          </div>
        )}

        {currentStep === 5 && (
          <div>
            <div></div>
          </div>
        )}
        <Button type="submit">Submit test</Button>
      </form>
    </FormProvider>
  )
}
