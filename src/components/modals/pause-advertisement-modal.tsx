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

interface PauseAdvertisementModalProps {
  children: React.ReactNode
}

export default function PauseAdvertisementModal({
  children,
}: PauseAdvertisementModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader className="px-6">
          <DialogTitle>Pausar anúncio</DialogTitle>
        </DialogHeader>
        <div className="h-[1px] w-full bg-divisor" />
        <div className="px-6 py-4">
          Você tem certeza que deseja pausar o anúncio?
        </div>
        <DialogFooter className="px-6">
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              Cancelar
            </Button>
          </DialogClose>
          <Button
            type="submit"
            className="bg-button-primary px-8 hover:bg-button-primary-hover"
          >
            Excluir
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
