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
import { useDialog } from '@/hooks/useDialog'
import ApplyForm from '../forms/apply-form'

interface ApplyModalProps {
  children: React.ReactNode
  advertisementId: number
}

export default function ApplyModal({
  children,
  advertisementId,
}: ApplyModalProps) {
  const dialog = useDialog()

  return (
    <Dialog {...dialog.props}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader className="px-6">
          <DialogTitle>Aplicar para vaga</DialogTitle>
        </DialogHeader>
        <div className="h-[1px] w-full bg-divisor" />

        <ApplyForm
          onSubmit={() => dialog.dismiss()}
          advertisementId={advertisementId}
        />

        <DialogFooter className="px-6">
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              Cancelar
            </Button>
          </DialogClose>
          <Button
            type="submit"
            form="apply-form"
            className="bg-button-primary px-8 hover:bg-button-primary-hover"
          >
            Aplicar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
