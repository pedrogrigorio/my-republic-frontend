import ImagePicker from './image-picker'
import InputError from '@/components/ui/input-error'

import { useFormContext } from 'react-hook-form'
import { currencyMask } from '@/utils/currencyMask'
import { zipCodeMask } from '@/utils/zipCodeMask'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function FirstStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div>
      <div className="flex flex-col items-center text-center">
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
          <InputError error={errors.title?.message?.toString()} />
        </div>

        <div className="col-span-3 lg:col-span-1">
          <Label htmlFor="price">Preço (R$) *</Label>
          <Input
            placeholder="Digite o valor..."
            id="price"
            {...register('price', {
              onChange: currencyMask,
            })}
          />
          <InputError error={errors.price?.message?.toString()} />
        </div>

        <div className="col-span-3">
          <Label htmlFor="description">Descrição *</Label>
          <Textarea
            placeholder="Descreva melhor o seu anúncio..."
            id="description"
            {...register('description')}
          />
          <InputError error={errors.description?.message?.toString()} />
        </div>

        <div className="col-span-3 lg:col-span-1">
          <Label htmlFor="cep">CEP *</Label>
          <Input
            placeholder="Digite o CEP..."
            id="cep"
            {...register('cep', { onChange: zipCodeMask })}
          />
          <InputError error={errors.cep?.message?.toString()} />
        </div>

        <div className="col-span-3">
          <ImagePicker />
          <InputError error={errors.pictures?.message?.toString()} />
        </div>
      </div>
    </div>
  )
}
