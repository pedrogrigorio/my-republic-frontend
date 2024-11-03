import InputError from '@/components/shadcnui/input-error'
import { Textarea } from '@/components/shadcnui/textarea'
import { applyFormSchema } from '@/lib/validations/appy'
import { apply } from '@/services/application-service'
import { ApplyFormData } from '@/types/validation-types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface ApplyFormProps {
  onSubmit: () => void
  advertisementId: number
}

export default function ApplyForm({
  onSubmit,
  advertisementId,
}: ApplyFormProps) {
  const [error, setError] = useState<string | null>(null)
  const { mutate } = useMutation({
    mutationFn: ({
      advertisementId,
      data,
    }: {
      advertisementId: number
      data: ApplyFormData
    }) => apply(advertisementId, data),
    onSuccess: () => {
      setError(null)
      onSubmit()
    },
    onError: () => {
      setError('Ocorreu um erro. Por favor, tente mais tarde.')
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplyFormData>({
    resolver: zodResolver(applyFormSchema),
    defaultValues: {
      message:
        'Olá, estou interessado na vaga da república. Gostaria de saber se a vaga ainda está disponível.',
    },
  })

  return (
    <form
      id="apply-form"
      className="flex flex-col gap-4 px-6 py-4"
      onSubmit={handleSubmit((data) => mutate({ advertisementId, data }))}
    >
      {error && (
        <div className="rounded-xl bg-red-500 bg-opacity-25 p-6">
          <p className="text-sm">{error}</p>
        </div>
      )}

      <span>Envie uma mensagem para o anunciante.</span>
      <Textarea id="message" {...register('message')} />
      <InputError error={errors.message?.message?.toString()} />
    </form>
  )
}
