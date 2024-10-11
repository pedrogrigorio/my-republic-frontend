import {
  WashingMachine,
  SwimmingPool,
  ShoppingCart,
  Armchair,
  Barbell,
  Garage,
  Bus,
  Fan,
} from '@phosphor-icons/react/dist/ssr'

export function getIconByTag(tag: string) {
  switch (tag) {
    case 'furnishedResidence':
      return <Armchair size={20} />
    case 'garage':
      return <Garage size={20} />
    case 'airConditioning':
      return <Fan size={20} />
    case 'swimmingPool':
      return <SwimmingPool size={20} />
    case 'gym':
      return <Barbell size={20} />
    case 'nearbyMarket':
      return <ShoppingCart size={20} />
    case 'laundry':
      return <WashingMachine size={20} />
    case 'publicTransportNearby':
      return <Bus size={20} />
    default:
      return null
  }
}
