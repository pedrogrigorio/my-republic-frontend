import ChangeNameModal from '@/components/modals/change-name-modal'
import Avatar from '@/components/ui/avatar'

import { PencilSimple } from '@phosphor-icons/react/dist/ssr'
import { User } from '@/types/user'
import ChangePhotoForm from '@/components/forms/change-photo-form'

interface ProfileSectionProps {
  user: User
}

export default function ProfileSection({ user }: ProfileSectionProps) {
  return (
    <section className="pb-8">
      <h2 className="font-bold">Minha conta</h2>
      <div className="mt-6 flex gap-8">
        <div className="relative">
          <Avatar
            user={user}
            className="h-32 w-32 rounded-full border-[1px] border-gray-300 text-3xl"
          />
          <ChangePhotoForm />
        </div>

        <div className="mt-6 flex h-fit gap-4">
          <h3>{user.name}</h3>
          <ChangeNameModal>
            <button>
              <PencilSimple size={24} />
            </button>
          </ChangeNameModal>
        </div>
      </div>
    </section>
  )
}
