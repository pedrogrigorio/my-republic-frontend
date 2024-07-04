import { advertisementFormSchema } from '@/lib/validations/advertisement'
import { z } from 'zod'

export type AdvertisementFormData = z.infer<typeof advertisementFormSchema>
