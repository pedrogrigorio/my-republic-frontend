import { advertisementFormSchema } from '@/lib/validations/advertisement'
import { loginFormSchema } from '@/lib/validations/login'
import { signUpFormSchema } from '@/lib/validations/sign-up'
import { z } from 'zod'

export type AdvertisementFormData = z.infer<typeof advertisementFormSchema>

export type LoginFormData = z.infer<typeof loginFormSchema>

export type SignUpFormData = z.infer<typeof signUpFormSchema>
