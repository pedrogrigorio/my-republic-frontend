'use client'

import ActionButtons from './action-buttons'
import StepNavigator from '../common/step-navigator'
import FirstStep from './first-step'
import SecondStep from './second-step'
import ThirdStep from './third-step'
import FourthStep from './fourth-step'
import FifthStep from './fifth-step'

import { advertisementFormSchema } from '@/lib/validations/advertisement'
import { FormProvider, useForm } from 'react-hook-form'
import { useRef, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { z } from 'zod'

type AdvertisementFormData = z.infer<typeof advertisementFormSchema>
type FieldName = keyof AdvertisementFormData

const steps = [
  {
    step: 1,
    fields: ['title', 'price', 'description', 'cep', 'pictures'],
  },
  {
    step: 2,
    fields: [
      'genre',
      'allowOppositeGender',
      'numPeople',
      'occupiedVacancies',
      'bedroomType',
      'numRooms',
      'numBathrooms',
      'petsPresence',
    ],
  },
  {
    step: 3,
    fields: ['amenities'],
  },
  {
    step: 4,
    fields: ['rules'],
  },
  {
    step: 5,
    fields: [],
  },
]

export default function CreateAdvertisementForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const formRef = useRef<HTMLFormElement>(null)
  const router = useRouter()

  const createAdForm = useForm<AdvertisementFormData>({
    resolver: zodResolver(advertisementFormSchema),
  })

  const { handleSubmit, trigger, clearErrors } = createAdForm

  const nextStep = async () => {
    const fields = steps[currentStep - 1].fields
    const isValid = await trigger(fields as FieldName[])

    if (!isValid) {
      formRef.current?.requestSubmit()
      return
    }

    clearErrors()

    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const onSubmit = (data: AdvertisementFormData) => {
    console.log(data)

    router.replace('/my-ads')
  }

  return (
    <div>
      <StepNavigator
        steps={5}
        currentStep={currentStep}
        className="my-6 justify-center"
      />

      <div className="h-[1px] w-full bg-divisor" />

      <div className="flex-1">
        <FormProvider {...createAdForm}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="py-5"
            ref={formRef}
          >
            {currentStep === 1 && <FirstStep />}

            {currentStep === 2 && <SecondStep />}

            {currentStep === 3 && <ThirdStep />}

            {currentStep === 4 && <FourthStep />}

            {currentStep === 5 && <FifthStep />}
          </form>
        </FormProvider>

        <ActionButtons
          currentStep={currentStep}
          prevStep={prevStep}
          nextStep={nextStep}
        />
      </div>
    </div>
  )
}
