import { Textarea } from '../shadcnui/textarea'
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

interface ApplyModalProps {
  children: React.ReactNode
}

export default function ApplyModal({ children }: ApplyModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader className="px-6">
          <DialogTitle>Aplicar para vaga</DialogTitle>
        </DialogHeader>
        <div className="h-[1px] w-full bg-divisor" />
        <div className="flex flex-col gap-4 px-6 py-4">
          <span>Envie uma mensagem para o anunciante.</span>

          <Textarea
            id="message"
            defaultValue="Olá, estou interessado na vaga da república. Gostaria de saber se a vaga ainda está disponível."
          />
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
            Aplicar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
