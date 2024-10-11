'use client'

import AdvertisementSkeleton from './_components/advertisement-skeleton'
import ScrollArrowButton from '../../../components/ui/scroll-arrow-button'
import DetailsSection from './_components/details-section'
import BunkbedIcon from '@/components/icons/bunkbed-icon'
import ApplyModal from '@/components/modals/apply-modal'
import Breadcrumb from '@/components/ui/breadcrumb'
import HouseTag from '@/components/ui/house-tag'
import Image from 'next/image'

import { Advertisement as TAdvertisement } from '@/types/advertisement'
import { getAdvertisementById } from '@/services/advertisement-sevice'
import { useScrollArrows } from '@/hooks/useScrollArrows'
import { priceToCurrency } from '@/utils/priceToCurrency'
import { getIconByTag } from '@/utils/getIconByTag'
import { BedroomType } from '@/types/bedroomtype'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { Button } from '@/components/shadcnui/button'
import { Gender } from '@/types/gender'
import { Page } from '@/components/layout/page'
import {
  GenderFemale,
  CaretRight,
  GenderMale,
  CaretLeft,
  PawPrint,
  Warning,
  MapPin,
  Person,
  Toilet,
  Bed,
  X,
} from '@phosphor-icons/react/dist/ssr'

export default function Advertisement() {
  const { adId } = useParams()

  const { data: ad, isLoading } = useQuery<TAdvertisement>({
    queryKey: ['get-advertisement'],
    queryFn: () => getAdvertisementById(adId as string),
  })

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
    <Page.Container>
      <Page.Header>
        <Breadcrumb
          currentPage="Título da república"
          parents={[{ name: 'Buscar repúblicas', path: '/student-housing' }]}
        />
      </Page.Header>

      <Page.Content>
        {/* Main content */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          {/* Image */}
          <div className="group relative aspect-video">
            <Image
              // src={ad.img_url}
              src="/images/apartment.jpg"
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

            <ScrollArrowButton
              dir="left"
              onClick={scrollLeft}
              arrowSize={16}
              active={leftArrowActive}
              className="-bottom-8 h-[26px]"
            />

            <ScrollArrowButton
              dir="right"
              onClick={scrollRight}
              arrowSize={16}
              active={rightArrowActive}
              className="-bottom-8 h-[26px]"
            />

            <div
              className="absolute -bottom-8 flex w-full gap-2 overflow-hidden overflow-x-auto scroll-smooth whitespace-nowrap scrollbar-none"
              ref={scrollableContainer}
            >
              <HouseTag
                text={
                  ad.genderPreference === Gender.MIXED
                    ? 'Misto'
                    : ad.genderPreference === Gender.FEMALE
                      ? 'Feminino'
                      : 'Masculino'
                }
              >
                {ad.genderPreference !== Gender.FEMALE && (
                  <GenderMale size={16} />
                )}

                {ad.genderPreference !== Gender.MALE && (
                  <GenderFemale size={16} />
                )}
              </HouseTag>

              <HouseTag text={`${ad.totalSlots} estudantes`}>
                <Person size={16} />
              </HouseTag>

              <HouseTag text={`${ad.numBedroom} quarto(s)`}>
                <Bed size={16} />
              </HouseTag>

              <HouseTag text={`${ad.numBathroom} banheiro(s)`}>
                <Toilet size={16} />
              </HouseTag>

              {ad.bedroomType === BedroomType.INDIVIDUAL ? (
                <HouseTag text="Quarto individual">
                  <Bed size={16} />
                </HouseTag>
              ) : (
                <HouseTag text="Quarto compartilhado">
                  <BunkbedIcon size={16} />
                </HouseTag>
              )}

              {ad.hasPet && (
                <HouseTag text="Possui animal de estimação">
                  <PawPrint size={16} />
                </HouseTag>
              )}
            </div>
          </div>

          {/* Advertisement main informations */}
          <div className="mt-8 flex flex-col gap-4 xl:mt-0">
            {/* Title */}
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-bold">{ad.title}</h2>
            </div>

            {/* Locale */}
            <div className="mt-1 flex items-center gap-2 font-medium">
              <MapPin weight="fill" size={24} />
              <span>
                {ad.city.name}, {ad.state.uf.toUpperCase()}
              </span>
            </div>

            {/* Price */}
            <div className="flex flex-col gap-4 rounded-xl border border-primary bg-white p-5 py-8">
              <span className="text-sm font-semibold">Aluguel:</span>
              <h3 className="text-currency">{priceToCurrency(ad.price)}</h3>
            </div>

            {/* Vacancies */}
            <div className="flex-1">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center gap-1 rounded-xl border border-primary bg-white px-2">
                  <Person size={16} />
                  {ad.occupiedSlots} / {ad.totalSlots}
                </div>
                {ad.totalSlots - ad.occupiedSlots < 3 && (
                  <div className="flex items-center gap-1 text-warning">
                    <Warning weight="fill" />
                    <span className="text-sm font-medium">Restam 2 vagas</span>
                  </div>
                )}
              </div>
            </div>

            {/* Apply button */}
            <ApplyModal>
              <Button className="bg-button-secondary hover:bg-button-secondary-hover">
                Tenho interesse
              </Button>
            </ApplyModal>
          </div>
        </div>

        {/* Details sections */}
        <div className="mt-12 xl:mt-14">
          {/* Description */}
          <DetailsSection title="Descrição">
            <p>{ad.description}</p>
          </DetailsSection>

          <div className="h-[1px] w-full bg-divisor" />

          {/* Amenities */}
          <DetailsSection title="Comodidades">
            <div
              className="grid grid-cols-3 gap-y-8"
              style={{
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr)',
              }}
            >
              {ad.amenities.map((amenity) => (
                <div key={amenity.id} className="flex items-center gap-2">
                  {getIconByTag(amenity.tag)}
                  {amenity.value}
                </div>
              ))}
            </div>
          </DetailsSection>

          <div className="h-[1px] w-full bg-divisor" />

          {/* Rules */}
          <DetailsSection title="Regras">
            <ul>
              {ad.rules.map((rule) => (
                <li key={rule.id} className="flex gap-2">
                  <X weight="bold" size={24} className="text-danger" />
                  <span>{rule.value}</span>
                </li>
              ))}
            </ul>
          </DetailsSection>
        </div>
      </Page.Content>
    </Page.Container>
  )
}
