import ImagePicker from './image-picker'
import InputError from '@/components/shadcnui/input-error'

import { Controller, useFormContext } from 'react-hook-form'
import { currencyMask } from '@/utils/currencyMask'
import { Textarea } from '@/components/shadcnui/textarea'
import { Input } from '@/components/shadcnui/input'
import { Label } from '@/components/shadcnui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/shadcnui/select'
import { useQuery } from '@tanstack/react-query'
import { getCitiesByStateId, getStates } from '@/services/locale-service'
import { State } from '@/types/state'
import { City } from '@/types/city'
import { useEffect, useState } from 'react'
import { Advertisement } from '@/types/advertisement'
import { phoneMask } from '@/utils/phoneMask'

interface FirstStepProps {
  initialValues?: Advertisement
}

export default function FirstStep({ initialValues }: FirstStepProps) {
  const {
    control,
    register,
    resetField,
    formState: { errors },
  } = useFormContext()

  const { data: states, isLoading } = useQuery({
    queryKey: ['get-states'],
    queryFn: getStates,
  })

  const [selectedStateId, setSelectedStateId] = useState<number | null>(null)

  const { data: cities, isLoading: isLoadingCities } = useQuery({
    queryKey: ['get-cities', selectedStateId],
    queryFn: () => getCitiesByStateId(selectedStateId as number),
    enabled: !!selectedStateId,
  })

  useEffect(() => {
    if (initialValues?.state.id) {
      setSelectedStateId(initialValues.state.id)
    }
  }, [initialValues])

  return (
    <div>
      <div className="flex flex-col items-center text-center">
        <p>{errors.root?.message?.toString()}</p>
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
          <Label htmlFor="phone">Telefone</Label>
          <Input
            placeholder="(xx) xxxxx-xxxx"
            id="phone"
            {...register('phone', {
              onChange: phoneMask,
            })}
            className="mt-1"
          />
          <InputError error={errors.phone?.message?.toString()} />
        </div>

        <div className="col-span-3 lg:col-span-1">
          <Label>Estado *</Label>
          <Controller
            name="stateId"
            control={control}
            render={({ field }) => (
              <Select
                name={field.name}
                value={field.value}
                onValueChange={(value) => {
                  field.onChange(value)
                  setSelectedStateId(Number(value))
                  resetField('cityId')
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o estado" />
                </SelectTrigger>
                <SelectContent>
                  {isLoading || !states ? (
                    <SelectItem value="none" disabled>
                      Carregando...
                    </SelectItem>
                  ) : (
                    states
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((state: State) => (
                        <SelectItem key={state.id} value={state.id.toString()}>
                          {state.name}
                        </SelectItem>
                      ))
                  )}
                </SelectContent>
              </Select>
            )}
          />
          <InputError error={errors.stateId?.message?.toString()} />
        </div>

        <div className="col-span-3 lg:col-span-1">
          <Label>Cidade *</Label>
          <Controller
            name="cityId"
            control={control}
            render={({ field }) => (
              <Select
                name={field.name}
                value={field.value}
                onValueChange={field.onChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a cidade" />
                </SelectTrigger>
                <SelectContent>
                  {!cities || isLoadingCities ? (
                    <SelectItem value="none" disabled>
                      Selecione um estado...
                    </SelectItem>
                  ) : (
                    cities
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((city: City) => (
                        <SelectItem key={city.id} value={city.id.toString()}>
                          {city.name}
                        </SelectItem>
                      ))
                  )}
                </SelectContent>
              </Select>
            )}
          />
          <InputError error={errors.cityId?.message?.toString()} />
        </div>

        <div className="col-span-3">
          <ImagePicker initialImg={initialValues?.imgSrc} />
          <InputError error={errors.picture?.message?.toString()} />
        </div>
      </div>
    </div>
  )
}
