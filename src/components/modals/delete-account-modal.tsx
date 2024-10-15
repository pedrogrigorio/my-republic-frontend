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

interface DeleteAccountModalProps {
  children: React.ReactNode
  onConclude: () => void
}

export default function DeleteAccountModal({
  children,
  onConclude,
}: DeleteAccountModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader className="px-6">
          <DialogTitle>Excluir conta</DialogTitle>
        </DialogHeader>
        <div className="h-[1px] w-full bg-divisor" />
        <div className="px-6 py-4">
          Você tem certeza que deseja excluir sua conta? Esse processo não
          poderá ser desfeito.
        </div>
        <DialogFooter className="px-6">
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              Cancelar
            </Button>
          </DialogClose>
          <Button
            type="submit"
            className="bg-danger px-8 hover:bg-red-600"
            onClick={onConclude}
          >
            Apagar conta
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
