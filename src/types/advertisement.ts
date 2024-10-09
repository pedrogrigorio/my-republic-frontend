import { BedroomType } from './bedroomtype'
import { Gender } from './gender'
import { State } from './state'

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
  // owner: OwnerResponseDto
}
