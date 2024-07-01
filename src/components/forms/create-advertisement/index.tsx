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
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import StepNavigator from '@/components/common/step-navigator'
import { useStepNavigator } from '@/hooks/useStepNavigator'

const advertisementFormSchema = z.object({
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

type AdvertisementFormData = z.infer<typeof advertisementFormSchema>

export default function CreateAdvertisementForm() {
  const { currentStep, totalSteps, nextStep, prevStep } = useStepNavigator(5)

  const createAdForm = useForm<AdvertisementFormData>({
    resolver: zodResolver(advertisementFormSchema),
  })

  const { handleSubmit } = createAdForm

  const router = useRouter()

  const onSubmit = (data: AdvertisementFormData) => {
    console.log(data)

    router.replace('/my-ads')
  }

  return (
    <div>
      <StepNavigator
        steps={totalSteps}
        currentStep={currentStep}
        className="my-6 justify-center"
      />

      <div className="h-[1px] w-full bg-divisor" />

      <div className="flex-1">
        <FormProvider {...createAdForm}>
          <form onSubmit={handleSubmit(onSubmit)} className="py-5">
            {currentStep === 1 && <FirstStep />}

            {currentStep === 2 && <SecondStep />}

            {currentStep === 3 && <ThirdStep />}

            {currentStep === 4 && <FourthStep />}

            {currentStep === 5 && <FifthStep />}
          </form>
        </FormProvider>

        <div className="absolute bottom-0 right-0 z-20 flex w-full justify-between border-t border-primary bg-gray-100 px-12 py-5">
          <div>
            {currentStep > 1 && (
              <Button
                className="w-40 bg-button-primary hover:bg-button-primary-hover"
                onClick={prevStep}
              >
                Passo anterior
              </Button>
            )}
          </div>

          <div className="flex gap-8">
            {currentStep === 1 && (
              <Button variant="ghost" asChild>
                <Link href="/my-ads">Cancelar</Link>
              </Button>
            )}

            {currentStep < 5 && (
              <Button
                className="w-40 bg-button-primary hover:bg-button-primary-hover"
                onClick={nextStep}
              >
                Próximo passo
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
