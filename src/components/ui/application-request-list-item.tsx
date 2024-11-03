import { Application } from '@/types/application'
import Avatar from './avatar'
import { Button } from '../shadcnui/button'
import { Check } from '@phosphor-icons/react'
import { X } from '@phosphor-icons/react/dist/ssr'
import {
  acceptApplication,
  refuseApplication,
} from '@/services/application-service'
import { useQueryClient } from '@tanstack/react-query'

interface ApplicationRequestListItemProps {
  application: Application
}

export default function ApplicationRequestListItem({
  application,
}: ApplicationRequestListItemProps) {
  const queryClient = useQueryClient()

  const onRefuse = async () => {
    await refuseApplication(application.id)
    queryClient.invalidateQueries({
      queryKey: ['get-applications-by-ad'],
    })
  }

  const onAccept = async () => {
    await acceptApplication(application.id)

    queryClient.invalidateQueries({
      queryKey: ['get-applications-by-ad'],
    })
  }

  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex gap-4">
        <Avatar
          user={application.applicant}
          className="h-16 w-16 rounded-full border-[1px] border-gray-300 text-xl"
        />

        <div>
          <h3>{application.applicant.name}</h3>
          <p className="text-sm">{application.message}</p>
        </div>
      </div>

      <div className="flex gap-4">
        <Button
          className="h-12 w-12 bg-white p-0 text-strong hover:bg-green-500 hover:text-white"
          onClick={onAccept}
        >
          <Check size={24} weight="bold" />
        </Button>
        <Button
          className="h-12 w-12 bg-white p-0 text-strong hover:bg-red-500 hover:text-white"
          onClick={onRefuse}
        >
          <X size={24} weight="bold" />
        </Button>
      </div>
    </div>
  )
}
