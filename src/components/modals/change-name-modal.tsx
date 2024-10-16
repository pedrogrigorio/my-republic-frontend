import ChangeNameForm from '../forms/change-name-form'

import { useDialog } from '@/hooks/useDialog'
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

interface ChangeNameModalProps {
  children: React.ReactNode
}

export default function ChangeNameModal({ children }: ChangeNameModalProps) {
  const changeNameDialog = useDialog()

  return (
    <Dialog {...changeNameDialog.props}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        {/* Cabeçalho */}
        <DialogHeader className="px-6">
          <DialogTitle>Alterar nome</DialogTitle>
        </DialogHeader>

        <div className="h-[1px] w-full bg-divisor" />

        {/* Conteúdo */}
        <ChangeNameForm onSubmit={changeNameDialog.dismiss} />

        {/* Botões */}
        <DialogFooter className="px-6">
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              Cancelar
            </Button>
          </DialogClose>

          <Button
            type="submit"
            form="change-name-form"
            className="bg-button-primary px-8 hover:bg-button-primary-hover"
          >
            Confirmar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
