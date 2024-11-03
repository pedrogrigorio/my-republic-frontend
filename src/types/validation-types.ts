import { changePasswordFormSchema } from '@/lib/validations/change-password'
import { advertisementFormSchema } from '@/lib/validations/advertisement'
import { changeEmailFormSchema } from '@/lib/validations/change-email'
import { changeNameFormSchema } from '@/lib/validations/change-name'
import { signUpFormSchema } from '@/lib/validations/sign-up'
import { applyFormSchema } from '@/lib/validations/appy'
import { loginFormSchema } from '@/lib/validations/login'
import { z } from 'zod'

export type AdvertisementFormData = z.infer<typeof advertisementFormSchema>

export type ApplyFormData = z.infer<typeof applyFormSchema>

export type LoginFormData = z.infer<typeof loginFormSchema>

export type SignUpFormData = z.infer<typeof signUpFormSchema>

export type ChangeNameFormData = z.infer<typeof changeNameFormSchema>

export type ChangeEmailFormData = z.infer<typeof changeEmailFormSchema>

export type ChangePasswordFormData = z.infer<typeof changePasswordFormSchema>
