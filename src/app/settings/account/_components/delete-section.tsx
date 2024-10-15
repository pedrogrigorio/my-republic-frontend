import DeleteAccountModal from '@/components/modals/delete-account-modal'

import { CaretRight } from '@phosphor-icons/react/dist/ssr'
import { User } from '@/types/user'

interface DeleteSectionProps {
  user: User
}

export default function DeleteSection({ user }: DeleteSectionProps) {
  return (
    <section className="py-8">
      <h2 className="font-bold">Excluir conta</h2>
      <DeleteAccountModal>
        <div className="mt-8 flex cursor-pointer items-center justify-between">
          <div>
            <h4 className="text-danger">Excluir minha conta</h4>
            <span className="text-primary">
              Esse processo não poderá ser desfeito
            </span>
          </div>
          <CaretRight size={24} />
        </div>
      </DeleteAccountModal>
    </section>
  )
}
