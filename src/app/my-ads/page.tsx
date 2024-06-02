import SearchInput from '@/components/layout/SearchInput'
import { Button } from '@/components/ui/button'
import { Faders } from '@phosphor-icons/react/dist/ssr'
import MyAdvertisement from './_components/MyAdvertisement'
import { ads } from '@/data/AdData'

export default function MyAds() {
  // return (
  //   <div className="relative h-full w-full">
  //     <div className="absolute top-64 flex w-full flex-col items-center gap-4">
  //       <div className="flex flex-col items-center gap-2">
  //         <h1>Você ainda não possui anúncios</h1>
  //         <h2>Encontre pessoas e forme uma república.</h2>
  //       </div>

  //       <Button className="h-10 bg-button-primary font-medium hover:bg-button-primaryHover">
  //         Criar anúncio
  //       </Button>
  //     </div>
  //   </div>
  // )

  return (
    <div className="h-screen px-12 py-10">
      <SearchInput />
      <div className="mt-10 flex flex-col text-strong">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-bold">Meus anúncios</h2>
            <span>10 resultados encontrados</span>
          </div>
          <Button className="gap-2 bg-button-filter px-6 hover:bg-button-filter-hover">
            <Faders size={24} />
            Filtro
          </Button>
        </div>

        <ul className="overflow-y-auto">
          {ads.map((ad) => (
            <li key={ad.id}>
              <MyAdvertisement advertisement={ad} />

              {/* Divisor */}
              <div className="h-[1px] w-full bg-gray-200" />
            </li>
          ))}
        </ul>

        <Button className="my-3 self-end bg-button-primary hover:bg-button-primary-hover">
          Criar anúncio
        </Button>
      </div>
    </div>
  )
}
