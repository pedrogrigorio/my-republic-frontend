import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Advertisement } from '@/types/advertisement'
import { priceToCurrency } from '@/utils/priceToCurrency'
import {
  Bed,
  CaretLeft,
  CaretRight,
  GenderFemale,
  GenderMale,
  Heart,
  MapPin,
  Person,
  Toilet,
} from '@phosphor-icons/react/dist/ssr'

import Image from 'next/image'

interface AdvertisementCardProps {
  ad: Advertisement
}

export default function AdvertisementCard({ ad }: AdvertisementCardProps) {
  return (
    <div className="group flex flex-col rounded-xl bg-white shadow-custom">
      <div className="relative">
        <Image
          src={ad.img_url}
          alt="advertisement_image"
          width={692}
          height={372}
          className="h-full w-full rounded-t-xl"
        />
        <button className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black bg-opacity-75 opacity-0 transition duration-300 group-hover:opacity-100 hover:bg-gray-800">
          <CaretLeft size={24} className="text-white" />
        </button>
        <button className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black bg-opacity-75 opacity-0 transition duration-200 group-hover:opacity-100 hover:bg-gray-800">
          <CaretRight size={24} className="text-white" />
        </button>
        <button className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black bg-opacity-75 opacity-0 transition duration-300 group-hover:opacity-100 hover:bg-gray-800">
          <Heart
            size={24}
            className={`${ad.isFavorite ? 'text-red-500' : 'text-white'}`}
            weight={`${ad.isFavorite ? 'fill' : 'regular'}`}
          />
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <h3 className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-lg">
                  {ad.title}
                </h3>
              </TooltipTrigger>
              <TooltipContent>
                <p>{ad.title}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <span className="font-semibold text-currency">
            {priceToCurrency(ad.price)}
          </span>
        </div>

        <div className="mt-1 flex items-center gap-1 text-sm">
          <MapPin weight="fill" size={20} />
          <span>{ad.locale}</span>
        </div>

        <div className="mt-6 flex justify-between">
          <div className="flex w-fit items-center gap-2 rounded-[4px] border border-primary bg-gray-100 px-2 py-1">
            <div className="flex items-center justify-center">
              <GenderMale size={16} />
              <GenderFemale size={16} />
            </div>
            <span className="text-xs font-medium">Misto</span>
          </div>

          <div className="flex gap-2">
            <div className="flex w-fit gap-1 rounded-[4px] border border-primary bg-gray-100 p-1">
              <Person size={16} />
              <span className="text-xs font-medium">1/3</span>
            </div>

            <div className="flex w-fit gap-1 rounded-[4px] border border-primary bg-gray-100 p-1">
              <Bed size={16} />
              <span className="text-xs font-medium">1/3</span>
            </div>

            <div className="flex w-fit gap-1 rounded-[4px] border border-primary bg-gray-100 p-1">
              <Toilet size={16} />
              <span className="text-xs font-medium">1/3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
