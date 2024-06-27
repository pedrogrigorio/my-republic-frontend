'use client'

import FirstStep from './first-step'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

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

        {currentStep === 2 && (
          <div>
            <div></div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <div></div>
          </div>
        )}

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
      </form>
    </FormProvider>
  )
}
