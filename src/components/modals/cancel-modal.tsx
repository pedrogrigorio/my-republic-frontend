import { Button } from '../ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface CancelModalProps {
  children: React.ReactNode
}

export default function CancelModal({ children }: CancelModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader className="px-6">
          <DialogTitle>Deseja cancelar?</DialogTitle>
        </DialogHeader>
        <div className="h-[1px] w-full bg-divisor" />
        <div className="px-6 py-4">
          Você tem certeza que deseja cancelar esta ação? Os campos alterados
          não serão salvos.
        </div>
        <DialogFooter className="px-6">
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              Não
            </Button>
          </DialogClose>
          <Button
            type="submit"
            className="bg-button-primary px-8 hover:bg-button-primary-hover"
          >
            Sim, cancelar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
