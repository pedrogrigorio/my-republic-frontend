'use client'

import CreateAdvertisementForm from '@/components/forms/create-advertisement'
import StepNavigator from '../../../components/common/step-navigator'
import Link from 'next/link'

import { useStepNavigator } from '@/hooks/useStepNavigator'
import { Button } from '@/components/ui/button'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb'

export default function CreateAdvertisement() {
  const { step, totalSteps, nextStep, prevStep } = useStepNavigator(5)

  return (
    <div className="flex h-screen flex-col px-12 py-10">
      <Breadcrumb className="flex h-14 items-center">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/settings/account">
              Configurações
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Minha conta</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-10 flex flex-1 flex-col text-strong">
        <h2 className="font-bold">Criar anúncio</h2>
        <StepNavigator
          steps={totalSteps}
          currentStep={step}
          className="my-6 justify-center"
        />

        <div className="h-[1px] w-full bg-divisor" />

        <div className="flex-1">
          <CreateAdvertisementForm currentStep={step} />
        </div>

        <div className="h-[1px] w-full bg-divisor" />

        <div className="flex justify-between pt-5">
          <div>
            {step > 1 && (
              <Button
                onClick={prevStep}
                className="w-40 bg-button-primary hover:bg-button-primary-hover"
              >
                Passo anterior
              </Button>
            )}
          </div>

          <div className="flex gap-8">
            {step === 1 && (
              <Button variant="ghost" asChild>
                <Link href="/my-ads">Cancelar</Link>
              </Button>
            )}

            {step < totalSteps && (
              <Button
                onClick={nextStep}
                className="w-40 bg-button-primary hover:bg-button-primary-hover"
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
