import ChangePasswordForm from '../forms/change-password-form'

import { useDialog } from '@/hooks/useDialog'
import { Button } from '../shadcnui/button'
import {
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogClose,
  DialogTitle,
  Dialog,
} from '@/components/shadcnui/dialog'

interface ChangePasswordModalProps {
  children: React.ReactNode
}

export default function ChangePasswordModal({
  children,
}: ChangePasswordModalProps) {
  const changePasswordDialog = useDialog()

  return (
    <Dialog {...changePasswordDialog.props}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader className="px-6">
          <DialogTitle>Alterar senha</DialogTitle>
        </DialogHeader>
        <div className="h-[1px] w-full bg-divisor" />

        <ChangePasswordForm onSubmit={changePasswordDialog.dismiss} />

        <DialogFooter className="px-6">
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              Cancelar
            </Button>
          </DialogClose>
          <Button
            type="submit"
            form="change-password-form"
            className="bg-button-primary px-8 hover:bg-button-primary-hover"
          >
            Aplicar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
