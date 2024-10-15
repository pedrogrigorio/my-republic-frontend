import DeleteAccountModal from '@/components/modals/delete-account-modal'

import { useMutation } from '@tanstack/react-query'
import { CaretRight } from '@phosphor-icons/react/dist/ssr'
import { deleteUser } from '@/services/user-service'
import { useUser } from '@/context/user-context'
import { logout } from '@/lib/auth'
import { User } from '@/types/user'

interface DeleteSectionProps {
  user: User
}

export default function DeleteSection({ user }: DeleteSectionProps) {
  const { setUser } = useUser()

  const { mutate } = useMutation({
    mutationFn: deleteUser,
    onSuccess: async () => {
      await logout()
      setUser(null)
    },
  })

  return (
    <section className="py-8">
      <h2 className="font-bold">Excluir conta</h2>
      <DeleteAccountModal onConclude={() => mutate(user.id)}>
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
