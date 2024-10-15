import SignUpForm from '../forms/sign-up-form'

import { Button } from '../shadcnui/button'
import {
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
  Dialog,
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

        <SignUpForm />

        <DialogFooter className="px-6">
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              Cancelar
            </Button>
          </DialogClose>
          <Button
            type="submit"
            form="signup-form"
            className="bg-button-primary px-8 hover:bg-button-primary-hover"
          >
            Cadastrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
