import { AdvertisementFormData } from '@/types/validation-types'
import { priceToCurrency } from './priceToCurrency'
import { Advertisement } from '@/types/advertisement'
import { Amenity } from '@/types/amenity'
import { Rule } from '@/types/rule'

export function transformAdvertisementInitialValues(
  advertisement: Advertisement,
) {
  // Converte rules e amenities para o formato esperado de initialValues
  const transformToBooleans = (items: Amenity[] | Rule[]) =>
    items.reduce((acc: Record<string, boolean>, item) => {
      acc[item.tag] = true
      return acc
    }, {})

  return {
    title: advertisement.title,
    price: advertisement.price ? priceToCurrency(advertisement.price) : '',
    description: advertisement.description,
    stateId: advertisement.state?.id.toString(),
    cityId: advertisement.city?.id.toString(),
    totalSlots: advertisement.totalSlots.toString(),
    occupiedSlots: advertisement.occupiedSlots.toString(),
    bedroomType: advertisement.bedroomType,
    numBathroom: advertisement.numBathroom.toString(),
    numBedroom: advertisement.numBedroom.toString(),
    hasPet: advertisement.hasPet ? 'true' : ('false' as 'true' | 'false'),
    genderPreference: advertisement.genderPreference,
    allowOppositeGender: advertisement.allowOppositeGender || false,
    rules: transformToBooleans(advertisement.rules || []),
    amenities: transformToBooleans(advertisement.amenities || []),
  }
}

export function transformAdvertisementFinalValues(data: AdvertisementFormData) {
  const object = {
    title: data.title,
    price: parseFloat(
      data.price.replace('R$ ', '').replace('.', '').replace(',', '.'),
    ),
    description: data.description,
    stateId: Number(data.stateId),
    cityId: Number(data.cityId),
    hasPet: data.hasPet === 'true',
    genderPreference: data.genderPreference,
    allowOppositeGender: data.allowOppositeGender,
    totalSlots: Number(data.totalSlots),
    occupiedSlots: Number(data.occupiedSlots),
    bedroomType: data.bedroomType,
    numBedroom: Number(data.numBedroom),
    numBathroom: Number(data.numBathroom),
    amenities: data.amenities,
    rules: data.rules,
    picture: data.picture,
  }

  return object
}
