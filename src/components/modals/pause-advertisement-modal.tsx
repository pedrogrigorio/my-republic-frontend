import { pauseAdvertisement } from '@/services/advertisement-sevice'
import { useQueryClient } from '@tanstack/react-query'
import { Advertisement } from '@/types/advertisement'
import { useDialog } from '@/hooks/useDialog'
import { Button } from '../shadcnui/button'
import {
  DialogContent,
  DialogTrigger,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
  Dialog,
} from '@/components/shadcnui/dialog'

interface PauseAdvertisementModalProps {
  children: React.ReactNode
  advertisement: Advertisement
}

export default function PauseAdvertisementModal({
  children,
  advertisement,
}: PauseAdvertisementModalProps) {
  const queryClient = useQueryClient()
  const dialog = useDialog()

  const onConfirm = async () => {
    await pauseAdvertisement(advertisement.id)
    queryClient.invalidateQueries({
      queryKey: ['get-ads-by-user'],
    })
    dialog.dismiss()
  }

  return (
    <Dialog {...dialog.props}>
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
            onClick={onConfirm}
            className="bg-button-primary px-8 hover:bg-button-primary-hover"
          >
            Pausar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
