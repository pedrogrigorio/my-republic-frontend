import { cn } from '@/lib/utils'
import StepIndicator from './step-indicator'
import StepTrack from './step-track'

interface StepNavigatorProps {
  steps: number
  currentStep: number
  className: string
}

export default function StepNavigator({
  steps,
  currentStep,
  className,
}: StepNavigatorProps) {
  return (
    <div className={cn('flex items-center gap-4 xl:gap-6', className)}>
      {Array.from({ length: steps - 1 }, (v, i) => i + 1).map((step) => (
        <div key={step} className="flex items-center gap-4 xl:gap-6">
          <StepIndicator step={step} currentStep={currentStep} />
          <StepTrack step={step} currentStep={currentStep} />
        </div>
      ))}

      <StepIndicator step={steps} currentStep={currentStep} />
    </div>
  )
}
