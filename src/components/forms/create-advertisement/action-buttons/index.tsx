import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface ActionButtonsProps {
  currentStep: number
  prevStep: () => void
  nextStep: () => void
}

export default function ActionButtons({
  currentStep,
  prevStep,
  nextStep,
}: ActionButtonsProps) {
  return (
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
  )
}
