import { changePasswordFormSchema } from '@/lib/validations/change-password'
import { ChangePasswordFormData } from '@/types/validation-types'
import { changePassword } from '@/services/user-service'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/shadcnui/input'
import { Label } from '@/components/shadcnui/label'
import InputError from '@/components/shadcnui/input-error'

interface ChangePasswordFormProps {
  onSubmit: () => void
}

export default function ChangePasswordForm({
  onSubmit,
}: ChangePasswordFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordFormData>({
    resolver: zodResolver(changePasswordFormSchema),
  })

  const { mutate, isError } = useMutation({
    mutationFn: changePassword,
    onSuccess: onSubmit,
  })

  return (
    <form
      className="flex flex-col gap-2 px-6 py-4"
      id="change-password-form"
      onSubmit={handleSubmit((data) => mutate(data))}
    >
      {isError && (
        <div className="rounded-xl bg-red-500 bg-opacity-25 p-6">
          <p className="text-sm">
            Ocorreu um erro. Por favor, tente mais tarde.
          </p>
        </div>
      )}
      <div>
        <Label htmlFor="oldPassword">Senha antiga *</Label>
        <Input type="password" id="oldPassword" {...register('oldPassword')} />
        <InputError error={errors.oldPassword?.message?.toString()} />
      </div>
      <div>
        <Label htmlFor="newPassword">Nova senha *</Label>
        <Input type="password" id="newPassword" {...register('newPassword')} />
        <InputError error={errors.newPassword?.message?.toString()} />
      </div>
      <div>
        <Label htmlFor="confirmPassword">Repetir senha *</Label>
        <Input
          type="password"
          id="confirmPassword"
          {...register('confirmNewPassword')}
        />
        <InputError error={errors.confirmNewPassword?.message?.toString()} />
      </div>
    </form>
  )
}
