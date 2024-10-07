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
            name="genre"
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
                  <SelectItem value="mixed">Misto</SelectItem>
                  <SelectItem value="male">Masculino</SelectItem>
                  <SelectItem value="female">Feminino</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          <InputError error={errors.genre?.message?.toString()} />
        </div>

        <div className="col-span-3 lg:col-span-1">
          <Label htmlFor="numPeople">Quantidade total de moradores *</Label>
          <Input
            placeholder="Insira a quantidade total de moradores"
            id="numPeople"
            type="number"
            {...register('numPeople')}
          />
          <InputError error={errors.numPeople?.message?.toString()} />
        </div>

        <div className="col-span-3 lg:col-span-1">
          <Label htmlFor="occupiedVacancies">Vagas ocupadas *</Label>
          <Input
            placeholder="Insira a quantidade de vagas ocupadas"
            id="occupiedVacancies"
            type="number"
            {...register('occupiedVacancies')}
          />
          <InputError error={errors.occupiedVacancies?.message?.toString()} />
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
                  <SelectItem value="individual">Individual</SelectItem>
                  <SelectItem value="shared">Compartilhado</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          <InputError error={errors.bedroomType?.message?.toString()} />
        </div>

        <div className="col-span-3 lg:col-span-1">
          <Label htmlFor="numRooms">Quantidade de quartos *</Label>
          <Input
            placeholder="Ex: 3"
            id="numRooms"
            type="number"
            {...register('numRooms')}
          />
          <InputError error={errors.numRooms?.message?.toString()} />
        </div>

        <div className="col-span-3 lg:col-span-1">
          <Label htmlFor="numBathrooms">Quantidade de banheiros *</Label>
          <Input
            placeholder="Ex: 2"
            id="numBathrooms"
            type="number"
            {...register('numBathrooms')}
          />
          <InputError error={errors.numBathrooms?.message?.toString()} />
        </div>

        <div className="col-span-3 lg:col-span-1">
          <Label>Possui pet? *</Label>
          <Controller
            name="petsPresence"
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
          <InputError error={errors.petsPresence?.message?.toString()} />
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
