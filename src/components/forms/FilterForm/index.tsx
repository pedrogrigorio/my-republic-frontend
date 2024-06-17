import { priceToCurrency } from '@/utils/priceToCurrency'
import * as Slider from '@radix-ui/react-slider'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { amenities } from '@/data/amenities'
import { rules } from '@/data/rules'
import RadioInput from './RadioInput'

const filterFormSchema = z.object({
  priceRange: z.array(z.number()),
  genre: z.string().optional(),
  bedroomType: z.string().optional(),
  petsPresence: z
    .string()
    .transform((v) => v === 'true')
    .optional(),
  numPeople: z
    .string()
    .transform((value) => parseInt(value))
    .optional(),
  numRooms: z
    .string()
    .transform((value) => parseInt(value))
    .optional(),
  numBathrooms: z
    .string()
    .transform((value) => parseInt(value))
    .optional(),
  amenities: z.object(
    Object.fromEntries(amenities.map((amenity) => [amenity.tag, z.boolean()])),
  ),
  rules: z.object(
    Object.fromEntries(rules.map((rule) => [rule.tag, z.boolean()])),
  ),
})

type filterFormData = z.infer<typeof filterFormSchema>

export default function FilterForm() {
  const { register, handleSubmit, control } = useForm<filterFormData>({
    resolver: zodResolver(filterFormSchema),
  })

  const onSubmit = (data: filterFormData) => {
    console.log(data)
  }

  return (
    <form
      className="flex flex-1 flex-col gap-6 overflow-y-auto px-6 py-4 scrollbar-thin"
      onSubmit={handleSubmit(onSubmit)}
      id="filterForm"
    >
      {/* Intervalo de preço */}
      <div className="flex flex-col gap-4">
        <h4>Intervalo de preço</h4>
        <Controller
          name="priceRange"
          control={control}
          defaultValue={[0, 1500]}
          render={({ field }) => (
            <div>
              <Slider.Root
                name={field.name}
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="relative flex w-full touch-none select-none items-center"
                minStepsBetweenThumbs={1}
                min={0}
                max={1500}
                step={50}
              >
                <Slider.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200">
                  <Slider.Range className="absolute h-full bg-green-500" />
                </Slider.Track>
                <Slider.Thumb className="block h-5 w-5 rounded-full bg-green-500 ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
                <Slider.Thumb className="block h-5 w-5 rounded-full bg-green-500 ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
              </Slider.Root>
              <div className="mt-2 flex justify-between">
                <span>{priceToCurrency(field.value[0])}</span>
                <span>{priceToCurrency(field.value[1])}</span>
              </div>
            </div>
          )}
        />
      </div>

      {/* Sobre a república */}
      <div className="flex flex-col gap-2">
        <h4>Sobre a república</h4>
        {/* Preferência de gênero */}
        <div>
          <span className="text-sm">Preferência de gênero</span>
          <Controller
            control={control}
            name="genre"
            render={({ field }) => (
              <RadioGroup.Root
                name={field.name}
                onChange={field.onChange}
                onBlur={field.onBlur}
                className="mt-2 flex gap-4"
              >
                <RadioInput value="male" label="Masculino" />
                <RadioInput value="female" label="Feminino" />
                <RadioInput value="mixed" label="Misto" />
              </RadioGroup.Root>
            )}
          />
        </div>

        {/* Tipo de quarto */}
        <div>
          <span className="text-sm">Tipo de quarto</span>
          <Controller
            control={control}
            name="bedroomType"
            render={({ field }) => (
              <RadioGroup.Root
                name={field.name}
                onChange={field.onChange}
                onBlur={field.onBlur}
                className="mt-2 flex gap-4"
              >
                <RadioInput value="individual" label="Individual" />
                <RadioInput value="shared" label="Compartilhado" />
              </RadioGroup.Root>
            )}
          />
        </div>

        {/* Presença de pets */}
        <div>
          <span className="text-sm">Presença de pets</span>
          <Controller
            control={control}
            name="petsPresence"
            render={({ field }) => (
              <RadioGroup.Root
                name={field.name}
                onChange={field.onChange}
                onBlur={field.onBlur}
                className="mt-2 flex gap-4"
              >
                <RadioInput value="true" label="Possui" />
                <RadioInput value="false" label="Não possui" />
              </RadioGroup.Root>
            )}
          />
        </div>

        {/* Quantidade de pessoas */}
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="font-normal" htmlFor="numPeople">
            Quantidade máxima de pessoas
          </Label>
          <Input
            type="number"
            id="numPeople"
            placeholder="Digite a quantidade..."
            className="focus-visible:ring-0 focus-visible:ring-offset-0"
            {...register('numPeople')}
          />
        </div>

        {/* Quantidade de quartos */}
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="font-normal" htmlFor="numRooms">
            Quantidade máxima de quartos
          </Label>
          <Input
            type="number"
            id="numRooms"
            placeholder="Digite a quantidade..."
            className="focus-visible:ring-0 focus-visible:ring-offset-0"
            {...register('numRooms')}
          />
        </div>

        {/* Quantidade de banheiros */}
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="font-normal" htmlFor="numBathrooms">
            Quantidade máxima de banheiros
          </Label>
          <Input
            type="number"
            id="numBathrooms"
            placeholder="Digite a quantidade..."
            className="focus-visible:ring-0 focus-visible:ring-offset-0"
            {...register('numBathrooms')}
          />
        </div>
      </div>

      {/* Comodidades da república */}
      <div className="flex flex-col gap-2">
        <h4>Comodidades da república</h4>
        <div className="grid grid-cols-2 gap-x-2 gap-y-4">
          {amenities.map((amenity) => (
            <div key={amenity.id} className="flex items-center space-x-2">
              <input
                id={amenity.tag}
                type="checkbox"
                {...register(`amenities.${amenity.tag}`)}
              />
              <label
                htmlFor={amenity.tag}
                className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {amenity.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Regras da república */}
      <div className="flex flex-col gap-2">
        <h4>Regras da república</h4>
        <div className="grid grid-cols-2 gap-x-2 gap-y-4">
          {rules.map((rule) => (
            <div key={rule.id} className="flex items-center space-x-2">
              <input
                id={rule.tag}
                type="checkbox"
                {...register(`rules.${rule.tag}`)}
              />
              <label
                htmlFor={rule.tag}
                className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {rule.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </form>
  )
}
