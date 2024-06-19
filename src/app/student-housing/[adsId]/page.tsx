'use client'

import Image from 'next/image'

import {
  Bed,
  CaretLeft,
  CaretRight,
  Drop,
  GenderFemale,
  GenderMale,
  Heart,
  House,
  Lightning,
  MapPin,
  PawPrint,
  Person,
  Toilet,
  Warning,
  WifiHigh,
} from '@phosphor-icons/react/dist/ssr'
import { advertisements } from '@/data/advertisements'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import { priceToCurrency } from '@/utils/priceToCurrency'
import { Button } from '@/components/ui/button'
import BunkbedIcon from '@/components/icons/bunkbed-icon'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export default function Advertisement() {
  const ad = advertisements[0]
  const scrollableContainer = useRef<HTMLDivElement>(null)
  const [leftArrowActive, setLeftArrowActive] = useState(false)
  const [rightArrowActive, setRightArrowActive] = useState(true)

  useEffect(() => {
    if (scrollableContainer.current) {
      const tabsList = scrollableContainer.current
      tabsList.addEventListener('scroll', manageArrows)
    }
  }, [])

  const manageArrows = () => {
    if (scrollableContainer.current) {
      const tabsList = scrollableContainer.current
      if (tabsList.scrollLeft >= 20) {
        setLeftArrowActive(true)
      } else {
        setLeftArrowActive(false)
      }

      const maxScrollValue = tabsList.scrollWidth - tabsList.clientWidth - 20

      if (tabsList.scrollLeft >= maxScrollValue) {
        setRightArrowActive(false)
      } else {
        setRightArrowActive(true)
      }
    }
  }

  const scrollRight = () => {
    if (scrollableContainer.current) {
      scrollableContainer.current.scrollLeft += 200
    }
  }

  const scrollLeft = () => {
    if (scrollableContainer.current) {
      scrollableContainer.current.scrollLeft -= 200
    }
  }

  return (
    <div className='className="h-screen px-12 py-10'>
      <Breadcrumb className="flex h-14 items-center">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/settings/account">
              Buscar repúblicas
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Título da república</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-10 flex flex-col text-strong">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-5 2xl:grid-cols-2">
          <div className="group relative xl:col-span-3 2xl:col-span-1">
            <Image
              src={ad.img_url}
              alt="advertisement_image"
              width={1920}
              height={1080}
              className="h-full w-full rounded-xl"
            />
            <button className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black bg-opacity-75 opacity-0 transition duration-300 group-hover:opacity-100 hover:bg-gray-800">
              <CaretLeft size={24} className="text-white" />
            </button>
            <button className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black bg-opacity-75 opacity-0 transition duration-200 group-hover:opacity-100 hover:bg-gray-800">
              <CaretRight size={24} className="text-white" />
            </button>

            <button
              className={cn(
                'absolute -bottom-8 left-0 z-10  h-[26px] items-center justify-center bg-gradient-to-r from-gray-100 from-75% to-transparent',
                leftArrowActive ? 'flex' : 'hidden',
              )}
              onClick={scrollLeft}
            >
              <div className="flex h-5 w-5 items-center justify-center rounded-full border border-primary bg-white text-strong">
                <CaretLeft size={16} />
              </div>
            </button>

            <button
              className={cn(
                'absolute -bottom-8 right-0 z-10 h-[26px] items-center justify-center bg-gradient-to-l from-gray-100 from-75% to-transparent',
                rightArrowActive ? 'flex' : 'hidden',
              )}
              onClick={scrollRight}
            >
              <div className="flex h-5 w-5 items-center justify-center rounded-full border border-primary bg-white text-strong">
                <CaretRight size={16} />
              </div>
            </button>

            <div
              className="absolute -bottom-8 flex w-full gap-2 overflow-hidden overflow-x-auto scroll-smooth whitespace-nowrap scrollbar-none"
              ref={scrollableContainer}
            >
              <div className="flex items-center gap-2 rounded-[4px] border border-primary bg-gray-100 px-2 py-1">
                <div className="flex items-center justify-center">
                  <GenderMale size={16} />
                  <GenderFemale size={16} />
                </div>
                <span className="text-xs font-medium">Misto</span>
              </div>
              <div className="flex gap-1 rounded-[4px] border border-primary bg-gray-100 p-1">
                <Person size={16} />
                <span className="text-xs font-medium">3 estudantes</span>
              </div>

              <div className="flex gap-1 rounded-[4px] border border-primary bg-gray-100 p-1">
                <Bed size={16} />
                <span className="text-xs font-medium">2 quartos</span>
              </div>

              <div className="flex gap-1 rounded-[4px] border border-primary bg-gray-100 p-1">
                <Toilet size={16} />
                <span className="text-xs font-medium">3 banheiros</span>
              </div>

              <div className="flex gap-1 rounded-[4px] border border-primary bg-gray-100 p-1">
                <BunkbedIcon size={16} />
                <span className="text-xs font-medium">
                  Quarto compartilhado
                </span>
              </div>

              <div className="flex gap-1 rounded-[4px] border border-primary bg-gray-100 p-1">
                <PawPrint size={16} />
                <span className="text-xs font-medium">
                  Possui animal de estimação
                </span>
              </div>

              <div className="flex gap-1 rounded-[4px] border border-primary bg-gray-100 p-1">
                <PawPrint size={16} />
                <span className="text-xs font-medium">
                  Possui animal de estimação
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 xl:col-span-2 xl:mt-0 2xl:col-span-1">
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-bold">{ad.title}</h2>
              <button>
                <Heart size={32} className="text-red-500" weight="fill" />
              </button>
            </div>

            <div className="mt-1 flex items-center gap-2 font-medium">
              <MapPin weight="fill" size={24} />
              <span>{ad.locale}</span>
            </div>

            <div className="flex flex-col gap-4 rounded-xl border border-primary bg-white p-5">
              <h3 className="text-currency">{priceToCurrency(ad.price)}</h3>
              <span className="text-sm font-semibold">Incluso no valor:</span>
              <ul className="text-sm">
                <li className="flex items-center gap-2">
                  <House size={16} />
                  <span>Aluguel</span>
                </li>
                <li className="flex items-center gap-2">
                  <WifiHigh size={16} />
                  <span>Internet</span>
                </li>
                <li className="flex items-center gap-2">
                  <Drop size={16} />
                  <span>Água</span>
                </li>
                <li className="flex items-center gap-2">
                  <Lightning size={16} />
                  <span>Luz</span>
                </li>
              </ul>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center gap-1 rounded-xl border border-primary bg-white px-2">
                  <Person size={16} />
                  1/3
                </div>
                <div className="flex items-center gap-1 text-warning">
                  <Warning weight="fill" />
                  <span className="text-sm font-medium">Restam 2 vagas</span>
                </div>
              </div>
            </div>

            <Button className="bg-button-secondary hover:bg-button-secondary-hover">
              Tenho interesse
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
