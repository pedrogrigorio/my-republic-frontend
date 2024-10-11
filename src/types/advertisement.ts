import { BedroomType } from './bedroomtype'
import { Amenity } from './amenity'
import { Gender } from './gender'
import { State } from './state'
import { Rule } from './rule'

export interface Advertisement {
  id: number
  title: string
  description: string
  price: number
  genderPreference: Gender
  allowOppositeGender: boolean
  totalSlots: number
  occupiedSlots: number
  bedroomType: BedroomType
  numBedroom: number
  numBathroom: number
  hasPet: boolean
  city: {
    id: number
    name: string
    stateId: number
  }
  state: State
  rules: Rule[]
  amenities: Amenity[]
  // owner: OwnerResponseDto
}
