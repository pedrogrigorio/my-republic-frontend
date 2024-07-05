import { Button } from '../ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface ChangePasswordModalProps {
  children: React.ReactNode
}

export default function ChangePasswordModal({
  children,
}: ChangePasswordModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader className="px-6">
          <DialogTitle>Alterar senha</DialogTitle>
        </DialogHeader>
        <div className="h-[1px] w-full bg-divisor" />
        <div className="flex flex-col gap-2 px-6 py-4">
          <div>
            <Label htmlFor="password">Senha antiga *</Label>
            <Input id="password" />
          </div>
          <div>
            <Label htmlFor="password">Nova senha *</Label>
            <Input id="password" />
          </div>
          <div>
            <Label htmlFor="password">Repetir senha *</Label>
            <Input id="password" />
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
            Aplicar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
