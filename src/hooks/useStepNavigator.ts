import { useState } from 'react'

export function useStepNavigator(totalSteps: number) {
  const [currentStep, setCurrentStep] = useState(1)

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  return {
    totalSteps,
    currentStep,
    prevStep,
    nextStep,
  }
}
