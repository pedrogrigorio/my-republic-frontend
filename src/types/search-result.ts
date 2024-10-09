import { Advertisement } from './advertisement'
import { City } from './city'

export interface SearchResult {
  total: number
  city: City
  advertisements: Advertisement[]
}
