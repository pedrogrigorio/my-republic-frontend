import { Button } from '../shadcnui/button'
import { Label } from '@/components/shadcnui/label'
import { Input } from '@/components/shadcnui/input'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/shadcnui/dialog'

interface SignUpModalProps {
  children: React.ReactNode
}

export default function SignUpModal({ children }: SignUpModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader className="px-6">
          <DialogTitle>Criar uma conta</DialogTitle>
        </DialogHeader>
        <div className="h-[1px] w-full bg-divisor" />
        <div className="flex flex-col gap-2 px-6 py-4">
          <div>
            <Label htmlFor="password">Nome *</Label>
            <Input id="password" />
          </div>
          <div>
            <Label htmlFor="password">E-mail *</Label>
            <Input id="password" />
          </div>
          <div>
            <Label htmlFor="password">Senha *</Label>
            <Input type="password" id="password" />
          </div>
          <div>
            <Label htmlFor="password">Repetir senha *</Label>
            <Input type="password" id="password" />
          </div>
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
            Cadastrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
