import { useDialog } from '@/hooks/useDialog'
import LoginForm from '../forms/login-form'

import { Button } from '../shadcnui/button'
import {
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
  Dialog,
} from '@/components/shadcnui/dialog'

interface LoginModalProps {
  children: React.ReactNode
  onLoginSuccess: () => void
}

export default function LoginModal({
  children,
  onLoginSuccess,
}: LoginModalProps) {
  const loginDialog = useDialog()

  const onConclude = () => {
    onLoginSuccess()
    loginDialog.dismiss()
  }

  return (
    <Dialog {...loginDialog.props}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        {/* Header */}
        <DialogHeader className="px-6">
          <DialogTitle>Bem-vindo de volta!</DialogTitle>
        </DialogHeader>

        {/* Divisor */}
        <div className="h-[1px] w-full bg-divisor" />

        {/* Form */}
        <LoginForm onSubmit={onConclude} />

        {/* Footer */}
        <DialogFooter className="px-6">
          {/* Close button */}
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              Cancelar
            </Button>
          </DialogClose>

          {/* Confirm button */}
          <Button
            type="submit"
            form="login-form"
            className="bg-button-primary px-8 hover:bg-button-primary-hover"
          >
            Entrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
