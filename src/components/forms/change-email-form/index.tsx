import { useMutation, useQueryClient } from '@tanstack/react-query'
import { changeEmailFormSchema } from '@/lib/validations/change-email'
import { ChangeEmailFormData } from '@/types/validation-types'
import { zodResolver } from '@hookform/resolvers/zod'
import { changeEmail } from '@/services/user-service'
import { useForm } from 'react-hook-form'
import { useUser } from '@/context/user-context'
import { Input } from '@/components/shadcnui/input'
import { Label } from '@/components/shadcnui/label'

interface ChangeEmailFormProps {
  onSubmit: () => void
}

export default function ChangeEmailForm({ onSubmit }: ChangeEmailFormProps) {
  const queryClient = useQueryClient()
  const { user } = useUser()
  const { register, handleSubmit } = useForm<ChangeEmailFormData>({
    resolver: zodResolver(changeEmailFormSchema),
    defaultValues: {
      newEmail: user?.email,
    },
  })

  const { mutate, isError } = useMutation({
    mutationFn: changeEmail,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-user-profile'],
      })
      onSubmit()
    },
  })

  return (
    <form
      className="flex flex-col gap-2 px-6 py-4"
      id="change-email-form"
      onSubmit={handleSubmit((data) => mutate(data))}
    >
      {isError && (
        <div className="rounded-xl bg-red-500 bg-opacity-25 p-6">
          <p className="text-sm">
            Ocorreu um erro. Por favor, tente mais tarde.
          </p>
        </div>
      )}
      <div className="flex flex-col gap-2 px-6 py-4">
        <Label htmlFor="email">Novo e-mail</Label>
        <Input id="email" {...register('newEmail')} />
      </div>
    </form>
  )
}
