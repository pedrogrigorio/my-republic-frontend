import { advertisementFormSchema } from '@/lib/validations/advertisement'
import { changeNameFormSchema } from '@/lib/validations/change-name'
import { signUpFormSchema } from '@/lib/validations/sign-up'
import { loginFormSchema } from '@/lib/validations/login'
import { z } from 'zod'

export type AdvertisementFormData = z.infer<typeof advertisementFormSchema>

export type LoginFormData = z.infer<typeof loginFormSchema>

export type SignUpFormData = z.infer<typeof signUpFormSchema>

export type ChangeNameFormData = z.infer<typeof changeNameFormSchema>
