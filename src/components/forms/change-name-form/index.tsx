import { changeNameFormSchema } from '@/lib/validations/change-name'
import { ChangeNameFormData } from '@/types/validation-types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/shadcnui/input'
import { Label } from '@/components/shadcnui/label'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { changeName } from '@/services/user-service'
import { useUser } from '@/context/user-context'

interface ChangeNameFormProps {
  onSubmit: () => void
}

export default function ChangeNameForm({ onSubmit }: ChangeNameFormProps) {
  const queryClient = useQueryClient()
  const { user } = useUser()
  const { register, handleSubmit } = useForm<ChangeNameFormData>({
    resolver: zodResolver(changeNameFormSchema),
    defaultValues: {
      newName: user?.name,
    },
  })

  const { mutate, isError } = useMutation({
    mutationFn: changeName,
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
      id="change-name-form"
      onSubmit={handleSubmit((data) => mutate(data))}
    >
      {isError && (
        <div className="rounded-xl bg-red-500 bg-opacity-25 p-6">
          <p className="text-sm">
            Ocorreu um erro. Por favor, tente mais tarde.
          </p>
        </div>
      )}
      <Label htmlFor="name">Novo nome</Label>
      <Input id="name" {...register('newName')} />
    </form>
  )
}
