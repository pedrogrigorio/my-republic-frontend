import { useState } from 'react'

export function useStepNavigator(totalSteps: number) {
  const [step, setStep] = useState(1)

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  return {
    totalSteps,
    step,
    prevStep,
    nextStep,
  }
}
