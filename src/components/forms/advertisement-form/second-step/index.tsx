import InputError from '@/components/shadcnui/input-error'

import { Controller, useFormContext } from 'react-hook-form'
import { Input } from '@/components/shadcnui/input'
import { Label } from '@/components/shadcnui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/shadcnui/select'
import { Gender } from '@/types/gender'
import { BedroomType } from '@/types/bedroomtype'

export default function SecondStep() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <div>
      <div className="flex flex-col items-center text-center">
        <h3>Detalhes</h3>
        <span>Precisamos de mais alguns detalhes sobre sua república</span>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-x-4 gap-y-8">
        <div className="col-span-3 lg:col-span-1">
          <Label>Preferência de gênero *</Label>
          <Controller
            name="genderPreference"
            control={control}
            render={({ field }) => (
              <Select
                name={field.name}
                defaultValue={field.value}
                onValueChange={field.onChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o gênero" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={Gender.MIXED}>Misto</SelectItem>
                  <SelectItem value={Gender.MALE}>Masculino</SelectItem>
                  <SelectItem value={Gender.FEMALE}>Feminino</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          <InputError error={errors.genderPreference?.message?.toString()} />
        </div>

        <div className="col-span-3 lg:col-span-1">
          <Label htmlFor="totalSlots">Quantidade total de moradores *</Label>
          <Input
            placeholder="Insira a quantidade total de moradores"
            id="totalSlots"
            type="number"
            {...register('totalSlots')}
          />
          <InputError error={errors.totalSlots?.message?.toString()} />
        </div>

        <div className="col-span-3 lg:col-span-1">
          <Label htmlFor="occupiedSlots">Vagas ocupadas *</Label>
          <Input
            placeholder="Insira a quantidade de vagas ocupadas"
            id="occupiedSlots"
            type="number"
            {...register('occupiedSlots')}
          />
          <InputError error={errors.occupiedSlots?.message?.toString()} />
        </div>

        <div className="col-span-3 lg:col-span-1">
          <Label>Tipo de quarto *</Label>
          <Controller
            name="bedroomType"
            control={control}
            render={({ field }) => (
              <Select
                name={field.name}
                defaultValue={field.value}
                onValueChange={field.onChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo de quarto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={BedroomType.INDIVIDUAL}>
                    Individual
                  </SelectItem>
                  <SelectItem value={BedroomType.SHARED}>
                    Compartilhado
                  </SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          <InputError error={errors.bedroomType?.message?.toString()} />
        </div>

        <div className="col-span-3 lg:col-span-1">
          <Label htmlFor="numBedroom">Quantidade de quartos *</Label>
          <Input
            placeholder="Ex: 3"
            id="numBedroom"
            type="number"
            {...register('numBedroom')}
          />
          <InputError error={errors.numBedroom?.message?.toString()} />
        </div>

        <div className="col-span-3 lg:col-span-1">
          <Label htmlFor="numBathroom">Quantidade de banheiros *</Label>
          <Input
            placeholder="Ex: 2"
            id="numBathroom"
            type="number"
            {...register('numBathroom')}
          />
          <InputError error={errors.numBathroom?.message?.toString()} />
        </div>

        <div className="col-span-3 lg:col-span-1">
          <Label>Possui pet? *</Label>
          <Controller
            name="hasPet"
            control={control}
            render={({ field }) => (
              <Select
                name={field.name}
                defaultValue={field.value}
                onValueChange={field.onChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma opção" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Possui</SelectItem>
                  <SelectItem value="false">Não possui</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          <InputError error={errors.hasPet?.message?.toString()} />
        </div>

        <div className="col-span-3">
          <div className="flex items-center gap-2">
            <input
              id="allowOppositeGender"
              type="checkbox"
              {...register('allowOppositeGender')}
            />
            <label
              htmlFor="allowOppositeGender"
              className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Permitir aplicação do gênero oposto?
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
