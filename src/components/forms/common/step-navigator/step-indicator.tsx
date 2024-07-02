import { cn } from '@/lib/utils'

interface StepIndicatorProps {
  step: number
  currentStep: number
}

export default function StepIndicator({
  step,
  currentStep,
}: StepIndicatorProps) {
  return (
    <div
      className={cn(
        'flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-strong transition-colors delay-100 duration-300',
        currentStep >= step && 'bg-contrast text-white',
      )}
    >
      {step}
    </div>
  )
}
