import Image from 'next/image'
import Link from 'next/link'

import { priceToCurrency } from '@/utils/priceToCurrency'
import { Advertisement } from '@/types/advertisement'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/shadcnui/dropdown-menu'

import {
  ClipboardText,
  DotsThreeOutline,
  Eye,
  MapPin,
  Pause,
  Pencil,
  TrashSimple,
} from '@phosphor-icons/react/dist/ssr'
import DeleteAdvertisementModal from '../modals/delete-advertisement-modal'
import PauseAdvertisementModal from '../modals/pause-advertisement-modal'
import { BaseAdvertisement } from '@/types/base-advertisement'
import { ApplicationStatus } from '@/types/application-status'
import CancelApplicationModal from '../modals/cancel-application-modal'

interface AdvertisementListItemProps {
  advertisement: BaseAdvertisement | Advertisement
  variant?: 'applicant' | 'advertiser'
  status?: ApplicationStatus
  applicationId?: number
}

export default function AdvertisementListItem({
  advertisement,
  variant = 'advertiser',
  applicationId,
  status,
}: AdvertisementListItemProps) {
  const isActive = 'isActive' in advertisement ? advertisement.isActive : true

  return (
    <div className="relative flex gap-3 py-3">
      <Link href={`/student-housing/${advertisement.id}`}>
        <Image
          src={
            advertisement.imgSrc ??
            'http://localhost:3000/images/placeholder.png'
          }
          width={224}
          height={128}
          alt="ad_image"
          className="h-32 w-56 rounded-xl"
        />
      </Link>
      <div className="flex flex-col justify-between py-2">
        <div className="font-medium">
          <div className="flex items-center gap-3">
            <h3>{advertisement.title}</h3>

            {variant === 'advertiser' ? (
              isActive ? (
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-button-filter" />
                  <span className="text-xs">Ativo</span>
                </div>
              ) : (
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="text-xs">Pausado</span>
                </div>
              )
            ) : (
              <>
                {status === ApplicationStatus.PENDING && (
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-gray-300" />
                    <span className="text-xs">Pendente</span>
                  </div>
                )}

                {status === ApplicationStatus.ACCEPTED && (
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-button-filter" />
                    <span className="text-xs">Aceito</span>
                  </div>
                )}

                {status === ApplicationStatus.REFUSED && (
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="text-xs">Recusado</span>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="mt-1 flex items-center gap-1 text-sm">
            <MapPin weight="fill" size={20} />
            <span>
              {advertisement.city.name}, {advertisement.state.uf.toUpperCase()}
            </span>
          </div>
        </div>

        <span className="font-semibold text-currency">
          {priceToCurrency(advertisement.price)}
        </span>
      </div>
      <div className="absolute right-10 top-1/2 flex h-fit -translate-y-1/2 gap-3">
        {variant === 'advertiser' && (
          <Link href={`/my-ads/${advertisement.id}/review-applications`}>
            <ClipboardText size={32} weight="bold" />
          </Link>
        )}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <DotsThreeOutline size={32} weight="fill" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            {variant === 'advertiser' || !applicationId ? (
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href={`/student-housing/${advertisement.id}`}>
                    <Eye className="mr-2 h-4 w-4" />
                    <span>Visualizar</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/my-ads/edit/${advertisement.id}`}>
                    <Pencil className="mr-2 h-4 w-4" />
                    <span>Editar</span>
                  </Link>
                </DropdownMenuItem>
                <PauseAdvertisementModal advertisementId={advertisement.id}>
                  <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                    <Pause className="mr-2 h-4 w-4" />
                    <span>Pausar</span>
                  </DropdownMenuItem>
                </PauseAdvertisementModal>
                <DropdownMenuSeparator />
                <DeleteAdvertisementModal advertisementId={advertisement.id}>
                  <DropdownMenuItem
                    onSelect={(e) => e.preventDefault()}
                    className="text-danger"
                  >
                    <TrashSimple className="mr-2 h-4 w-4" />
                    <span>Excluir</span>
                  </DropdownMenuItem>
                </DeleteAdvertisementModal>
              </DropdownMenuGroup>
            ) : (
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href={`/student-housing/${advertisement.id}`}>
                    <Eye className="mr-2 h-4 w-4" />
                    <span>Visualizar anúncio</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <CancelApplicationModal applicationId={applicationId}>
                  <DropdownMenuItem
                    className="text-danger"
                    onSelect={(e) => e.preventDefault()}
                  >
                    <TrashSimple className="mr-2 h-4 w-4" />
                    <span>Cancelar aplicação</span>
                  </DropdownMenuItem>
                </CancelApplicationModal>
              </DropdownMenuGroup>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
