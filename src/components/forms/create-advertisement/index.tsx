'use client'

import ImagePicker from './image-picker'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { z } from 'zod'

interface CreateAdvertisementFormProps {
  currentStep: number
}

const advertisementFormSchema = z.object({
  title: z.string(),
  price: z.string(),
  description: z.string(),
  cep: z.string(),
  pictures: z
    .array(z.instanceof(File))
    .min(1, 'Pelo menos uma imagem é necessária'),
})

type AdvertisementFormData = z.infer<typeof advertisementFormSchema>

export default function CreateAdvertisementForm({
  currentStep,
}: CreateAdvertisementFormProps) {
  const createAdForm = useForm<AdvertisementFormData>({
    resolver: zodResolver(advertisementFormSchema),
  })

  const { register, handleSubmit } = createAdForm

  const onSubmit = (data: AdvertisementFormData) => {
    console.log(data)
  }

  return (
    <FormProvider {...createAdForm}>
      <form onSubmit={handleSubmit(onSubmit)} className="py-5">
        {currentStep === 1 && (
          <div>
            <div className="flex flex-col items-center">
              <h3>Principais informações</h3>
              <span>Compartilhe algumas informações sobre sua república</span>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="col-span-3 lg:col-span-2">
                <Label htmlFor="title">Título do anúncio *</Label>
                <Input
                  placeholder="Digite o título..."
                  id="title"
                  {...register('title')}
                />
              </div>

              <div className="col-span-3 lg:col-span-1">
                <Label htmlFor="price">Preço (R$) *</Label>
                <Input
                  placeholder="Digite o valor..."
                  id="price"
                  type="number"
                  {...register('price')}
                />
              </div>

              <div className="col-span-3">
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  placeholder="Descreva melhor o seu anúncio..."
                  id="description"
                  {...register('description')}
                />
              </div>

              <div className="col-span-3 lg:col-span-1">
                <Label htmlFor="cep">CEP *</Label>
                <Input
                  placeholder="Digite o CEP..."
                  id="cep"
                  type="number"
                  {...register('cep')}
                />
              </div>

              <div className="col-span-3">
                <ImagePicker />
              </div>
            </div>
            <Button type="submit">Submit test</Button>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <div></div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <div></div>
          </div>
        )}

        {currentStep === 4 && (
          <div>
            <div></div>
          </div>
        )}

        {currentStep === 5 && (
          <div>
            <div></div>
          </div>
        )}
      </form>
    </FormProvider>
  )
}
