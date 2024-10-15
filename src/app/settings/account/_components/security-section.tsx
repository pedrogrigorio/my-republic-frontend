import ChangePasswordModal from '@/components/modals/change-password-modal'
import ChangeEmailModal from '@/components/modals/change-email-modal'

import { Button } from '@/components/shadcnui/button'
import { User } from '@/types/user'

interface SecuritySectionProps {
  user: User
}

export default function SecuritySection({ user }: SecuritySectionProps) {
  return (
    <section className="py-8">
      <h2 className="font-bold">Segurança da conta</h2>
      <div className="mt-8 flex flex-col gap-4">
        <div className="flex justify-between">
          <div>
            <h4>E-mail</h4>
            <span className="text-primary">{user.email}</span>
          </div>
          <ChangeEmailModal>
            <Button variant="outline">Alterar e-mail</Button>
          </ChangeEmailModal>
        </div>
        <div className="flex justify-between">
          <div>
            <h4>Senha</h4>
            <span className="text-primary">Troque de senha regularmente</span>
          </div>
          <ChangePasswordModal>
            <Button variant="outline">Alterar senha</Button>
          </ChangePasswordModal>
        </div>
      </div>
    </section>
  )
}
