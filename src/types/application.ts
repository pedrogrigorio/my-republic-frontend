import { ApplicationStatus } from './application-status'
import { BaseAdvertisement } from './base-advertisement'

export interface Application {
  id: number
  status: ApplicationStatus
  createdAt: Date
  applicantId: number
  advertisement: BaseAdvertisement
}
