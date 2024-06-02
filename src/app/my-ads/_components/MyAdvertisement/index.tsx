import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Advertisement } from '@/types/advertisement'
import { priceToCurrency } from '@/utils/priceToCurrency'
import {
  ChatCircle,
  DotsThreeOutline,
  Eye,
  MapPin,
  Pause,
  Pencil,
  TrashSimple,
} from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'

interface MyAdvertisementProps {
  advertisement: Advertisement
}

export default function MyAdvertisement(props: MyAdvertisementProps) {
  const { advertisement } = props

  return (
    <div className="relative flex gap-3 py-3">
      <Image
        src={advertisement.img_url}
        width={224}
        height={128}
        alt="ad_image"
        className="h-32 w-56 rounded-xl"
      />
      <div className="flex flex-col justify-between py-2">
        <div className="font-medium">
          <div className="flex items-center gap-3">
            <h3>{advertisement.title}</h3>

            {advertisement.isActive ? (
              <div className="flex items-center gap-1">
                <div className="h-3 w-3 rounded-full bg-button-filter" />
                <span className="text-xs">Ativo</span>
              </div>
            ) : (
              <div className="flex items-center gap-1">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <span className="text-xs">Pausado</span>
              </div>
            )}
          </div>

          <div className="mt-1 flex items-center gap-1 text-sm">
            <MapPin weight="fill" size={20} />
            <span>{advertisement.locale}</span>
          </div>
        </div>

        <span className="font-semibold text-currency">
          {priceToCurrency(advertisement.price)}
        </span>
      </div>

      <div className="absolute right-10 top-1/2 flex h-fit -translate-y-1/2 gap-3">
        <div className="relative">
          <ChatCircle size={32} weight="bold" />
          <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-badge" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <DotsThreeOutline size={32} weight="fill" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{advertisement.title}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Eye className="mr-2 h-4 w-4" />
                <span>Visualizar</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Pencil className="mr-2 h-4 w-4" />
                <span>Editar</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Pause className="mr-2 h-4 w-4" />
                <span>Pausar</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="text-danger">
                <TrashSimple className="mr-2 h-4 w-4" />
                <span>Excluir</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
