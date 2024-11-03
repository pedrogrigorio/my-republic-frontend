import { ApplicationStatus } from './application-status'
import { BaseAdvertisement } from './base-advertisement'

export interface Application {
  id: number
  status: ApplicationStatus
  createdAt: Date
  message: string
  applicant: {
    id: number
    name: string
    imgSrc: string
  }
  advertisement: BaseAdvertisement
}
