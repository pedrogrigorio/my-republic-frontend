import AdvertisementCard from './advertisement-card'

import { Advertisement } from '@/types/advertisement'

interface AdvertisementGaleryProps {
  advertisements: Advertisement[]
}

export default function AdvertisementGalery({
  advertisements,
}: AdvertisementGaleryProps) {
  return (
    <ul
      className="mt-8 grid gap-4"
      style={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
      }}
    >
      {advertisements.map((ad) => (
        <li key={ad.id}>
          <AdvertisementCard ad={ad} />
        </li>
      ))}
    </ul>
  )
}
