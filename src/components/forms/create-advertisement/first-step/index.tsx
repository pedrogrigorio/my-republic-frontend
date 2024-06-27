import ImagePicker from './image-picker'

import { useFormContext } from 'react-hook-form'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function FirstStep() {
  const { register } = useFormContext()

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
    </div>
  )
}
