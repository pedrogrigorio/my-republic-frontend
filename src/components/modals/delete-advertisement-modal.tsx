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

interface DeleteAdvertisementModalProps {
  children: React.ReactNode
}

export default function DeleteAdvertisementModal({
  children,
}: DeleteAdvertisementModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader className="px-6">
          <DialogTitle>Excluir anúncio</DialogTitle>
        </DialogHeader>
        <div className="h-[1px] w-full bg-divisor" />
        <div className="px-6 py-4">
          Você tem certeza que deseja excluir o anúncio? Esse processo não
          poderá ser desfeito
        </div>
        <DialogFooter className="px-6">
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              Cancelar
            </Button>
          </DialogClose>
          <Button type="submit" className="bg-danger px-8 hover:bg-red-600">
            Excluir
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
