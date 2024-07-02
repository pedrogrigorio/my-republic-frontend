import { cn } from '@/lib/utils'

interface StepTrackProps {
  step: number
  currentStep: number
}

export default function StepTrack({ step, currentStep }: StepTrackProps) {
  return (
    <div className="relative h-2 w-10 rounded-full bg-gray-200 lg:w-20 xl:w-24">
      <div
        className={cn(
          'absolute h-full w-0 rounded-full bg-contrast transition-all duration-300',
          currentStep > step && 'w-full',
        )}
      />
    </div>
  )
}
