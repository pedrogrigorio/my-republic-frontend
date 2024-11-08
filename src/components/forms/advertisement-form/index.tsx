'use client'

import ActionButtons from './action-buttons'
import StepNavigator from '../common/step-navigator'
import FirstStep from './first-step'
import SecondStep from './second-step'
import ThirdStep from './third-step'
import FourthStep from './fourth-step'
import FifthStep from './fifth-step'

import { transformAdvertisementInitialValues } from '@/utils/transformAdvertisementData'
import { AdvertisementFormData } from '@/types/validation-types'
import { FormProvider, useForm } from 'react-hook-form'
import { useRef, useState } from 'react'
import { Advertisement } from '@/types/advertisement'
import { zodResolver } from '@hookform/resolvers/zod'
import { advertisementFormSchema } from '@/lib/validations/advertisement'

interface AdvertisementFormProps {
  onSubmit: (data: AdvertisementFormData) => void
  initialValues?: Advertisement
}

type FieldName = keyof AdvertisementFormData

const steps = [
  {
    step: 1,
    fields: [
      'title',
      'price',
      'description',
      'stateId',
      'cityId',
      'picture',
      'phone',
    ],
  },
  {
    step: 2,
    fields: [
      'genderPreference',
      'allowOppositeGender',
      'totalSlots',
      'occupiedSlots',
      'bedroomType',
      'numBedroom',
      'numBathroom',
      'hasPet',
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

export default function AdvertisementForm({
  onSubmit,
  initialValues,
}: AdvertisementFormProps) {
  const [currentStep, setCurrentStep] = useState(1)

  const formRef = useRef<HTMLFormElement>(null)

  const advertisementForm = useForm<AdvertisementFormData>({
    resolver: zodResolver(advertisementFormSchema),
    defaultValues: initialValues
      ? transformAdvertisementInitialValues(initialValues)
      : {},
  })

  const { handleSubmit, trigger, clearErrors } = advertisementForm

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

  return (
    <div>
      <StepNavigator
        steps={5}
        currentStep={currentStep}
        className="my-6 justify-center"
      />

      <div className="h-[1px] w-full bg-divisor" />

      <div className="flex-1">
        <FormProvider {...advertisementForm}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="py-5"
            ref={formRef}
          >
            {currentStep === 1 && <FirstStep initialValues={initialValues} />}

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
