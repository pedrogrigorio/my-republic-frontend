import ChangeEmailForm from '../forms/change-email-form'

import { useDialog } from '@/hooks/useDialog'
import { Button } from '../shadcnui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/shadcnui/dialog'

interface ChangeEmailModalProps {
  children: React.ReactNode
}

export default function ChangeEmailModal({ children }: ChangeEmailModalProps) {
  const changeEmailDialog = useDialog()

  return (
    <Dialog {...changeEmailDialog.props}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        {/* Cabeçalho */}
        <DialogHeader className="px-6">
          <DialogTitle>Alterar e-mail</DialogTitle>
        </DialogHeader>
        <div className="h-[1px] w-full bg-divisor" />

        {/* Conteúdo */}
        <ChangeEmailForm onSubmit={changeEmailDialog.dismiss} />

        {/* Botões */}
        <DialogFooter className="px-6">
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              Cancelar
            </Button>
          </DialogClose>
          <Button
            type="submit"
            form="change-email-form"
            className="bg-button-primary px-8 hover:bg-button-primary-hover"
          >
            Confirmar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
