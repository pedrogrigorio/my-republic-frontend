'use client'

import BunkbedIcon from '@/components/icons/bunkbed-icon'
import Image from 'next/image'

import { useScrollArrows } from './_hooks/useScrollArrows'
import { priceToCurrency } from '@/utils/priceToCurrency'
import { advertisements } from '@/data/advertisements'
import { Button } from '@/components/ui/button'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb'

import {
  Armchair,
  Barbell,
  Bed,
  CaretLeft,
  CaretRight,
  Check,
  Drop,
  Fan,
  Garage,
  GenderFemale,
  GenderMale,
  Heart,
  House,
  Lightning,
  MapPin,
  PawPrint,
  Person,
  ShoppingCart,
  SwimmingPool,
  Toilet,
  Warning,
  WifiHigh,
  X,
} from '@phosphor-icons/react/dist/ssr'
import HouseTag from '@/components/common/house-tag'
import ArrowButton from './_components/arrow-button'
import DetailsSection from './_components/details-section'
import { useMockFetch } from '@/hooks/useMockFetch'
import AdvertisementSkeleton from './_components/advertisement-skeleton'

export default function Advertisement() {
  const { data: ad, isLoading } = useMockFetch(advertisements[0])

  const {
    scrollableContainer,
    rightArrowActive,
    leftArrowActive,
    scrollRight,
    scrollLeft,
  } = useScrollArrows(isLoading)

  if (isLoading || !ad) {
    return <AdvertisementSkeleton />
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
        {/* Main content */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          {/* Image */}
          <div className="group relative aspect-video">
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

            <ArrowButton
              dir="left"
              onClick={scrollLeft}
              active={leftArrowActive}
            />

            <ArrowButton
              dir="right"
              onClick={scrollRight}
              active={rightArrowActive}
            />

            <div
              className="absolute -bottom-8 flex w-full gap-2 overflow-hidden overflow-x-auto scroll-smooth whitespace-nowrap scrollbar-none"
              ref={scrollableContainer}
            >
              <HouseTag text="Misto">
                <GenderMale size={16} />
                <GenderFemale size={16} />
              </HouseTag>

              <HouseTag text="3 estudantes">
                <Person size={16} />
              </HouseTag>

              <HouseTag text="2 quartos">
                <Bed size={16} />
              </HouseTag>

              <HouseTag text="3 banheiros">
                <Toilet size={16} />
              </HouseTag>

              <HouseTag text="Quarto compartilhado">
                <BunkbedIcon size={16} />
              </HouseTag>

              <HouseTag text="Possui animal de estimação">
                <PawPrint size={16} />
              </HouseTag>
            </div>
          </div>

          {/* Advertisement main informations */}
          <div className="mt-8 flex flex-col gap-4 xl:mt-0">
            {/* Title */}
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-bold">{ad.title}</h2>
              <button>
                <Heart size={32} className="text-red-500" weight="fill" />
              </button>
            </div>

            {/* Locale */}
            <div className="mt-1 flex items-center gap-2 font-medium">
              <MapPin weight="fill" size={24} />
              <span>{ad.locale}</span>
            </div>

            {/* Price */}
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

            {/* Vacancies */}
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

            {/* Apply button */}
            <Button className="bg-button-secondary hover:bg-button-secondary-hover">
              Tenho interesse
            </Button>
          </div>
        </div>

        {/* Details sections */}
        <div className="mt-12 xl:mt-14">
          <DetailsSection title="Descrição">
            <p>
              Este quarto que estamos anunciando tem 9 m2 e conta com Cama de
              casal , Armário 2 portas, e banheiro exclusivo. Ele fica em um
              apartamento espaçoso, de 90 m2, e está bem pertinho do metrô Campo
              Belo - linha lilas e de locais como Flavour Lab e Pizzaria do
              Baldoíno. Você poderá morar com até mais 1 pessoa, mas, não se
              preocupe: o valor da sua mensalidade será sempre o mesmo. Para
              facilitar ainda mais a sua vida, você paga todas as contas do mês
              juntas, num boleto único.
            </p>
          </DetailsSection>

          <div className="h-[1px] w-full bg-divisor" />

          <DetailsSection title="Comodidades">
            <div
              className="grid grid-cols-3 gap-y-8"
              style={{
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr)',
              }}
            >
              <div className="flex items-center gap-2">
                <Armchair size={20} />
                Residência mobiliada
              </div>
              <div className="flex items-center gap-2">
                <Garage size={20} />
                Vaga em garagem
              </div>
              <div className="flex items-center gap-2">
                <Fan size={20} />
                Ar condicionado
              </div>
              <div className="flex items-center gap-2">
                <SwimmingPool size={20} />
                Piscina
              </div>
              <div className="flex items-center gap-2">
                <Barbell size={20} />
                Academia
              </div>
              <div className="flex items-center gap-2">
                <ShoppingCart size={20} />
                Mercado próximo
              </div>
            </div>
          </DetailsSection>

          <div className="h-[1px] w-full bg-divisor" />

          <DetailsSection title="Regras">
            <ul>
              <li className="flex gap-2">
                <Check weight="bold" size={24} className="text-gray-500" />
                <span>Moradores podem receber visitas</span>
              </li>
              <li className="flex gap-2">
                <X weight="bold" size={24} className="text-danger" />
                <span>Proibido fumar</span>
              </li>
              <li className="flex gap-2">
                <X weight="bold" size={24} className="text-danger" />
                <span>Proibido bebidas alcóolicas</span>
              </li>
            </ul>
          </DetailsSection>
        </div>
      </div>
    </div>
  )
}
