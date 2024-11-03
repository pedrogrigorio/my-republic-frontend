import { cancelApplication } from '@/services/application-service'
import { useQueryClient } from '@tanstack/react-query'
import { useDialog } from '@/hooks/useDialog'
import { Button } from '../shadcnui/button'
import {
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogClose,
  Dialog,
} from '@/components/shadcnui/dialog'

interface DeleteAdvertisementModalProps {
  children: React.ReactNode
  applicationId: number
}

export default function CancelApplicationModal({
  children,
  applicationId,
}: DeleteAdvertisementModalProps) {
  const queryClient = useQueryClient()
  const dialog = useDialog()

  const onConfirm = async () => {
    await cancelApplication(applicationId)
    queryClient.invalidateQueries({
      queryKey: ['get-applications'],
    })
    dialog.dismiss()
  }

  return (
    <Dialog {...dialog.props}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader className="px-6">
          <DialogTitle>Excluir aplicação</DialogTitle>
        </DialogHeader>
        <div className="h-[1px] w-full bg-divisor" />
        <div className="px-6 py-4">
          Você tem certeza que deseja excluir esta aplicação? Esse processo não
          poderá ser desfeito.
        </div>
        <DialogFooter className="px-6">
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              Cancelar
            </Button>
          </DialogClose>
          <Button
            onClick={onConfirm}
            className="bg-danger px-8 hover:bg-red-600"
          >
            Sim, excluir
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
