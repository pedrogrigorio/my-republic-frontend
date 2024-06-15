import { priceToCurrency } from '@/utils/priceToCurrency'
import * as Slider from '@radix-ui/react-slider'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

interface Rule {
  id: number
  tag: string
  name: string
}

const rules: Rule[] = [
  { id: 1, tag: 'noSmoking', name: 'Proibido fumar' },
  { id: 2, tag: 'noAlcohol', name: 'Proibido bebidas alcóolicas' },
  { id: 3, tag: 'noParties', name: 'Proibido festas' },
  { id: 4, tag: 'noPets', name: 'Proibido animais de estimação' },
  { id: 5, tag: 'noNoiseAfter10', name: 'Proibido barulho após às 22h' },
  { id: 6, tag: 'noUncleanAreas', name: 'Proibido deixar áreas comuns sujas' },
  { id: 7, tag: 'noSharingKeys', name: 'Proibido compartilhar chaves' },
  { id: 8, tag: 'noOvernightGuests', name: 'Proibido convidados pernoitarem' },
]

interface Amenity {
  id: number
  tag: string
  name: string
}

const amenities: Amenity[] = [
  { id: 1, tag: 'furnishedResidence', name: 'Residência mobiliada' },
  { id: 2, tag: 'garage', name: 'Vaga em garagem' },
  { id: 3, tag: 'airConditioning', name: 'Ar condicionado' },
  { id: 4, tag: 'swimmingPool', name: 'Piscina' },
  { id: 5, tag: 'gym', name: 'Academia' },
  { id: 6, tag: 'nearbyMarket', name: 'Mercado próximo' },
  { id: 7, tag: 'laundry', name: 'Lavanderia' },
  { id: 8, tag: 'publicTransportNearby', name: 'Transporte público próximo' },
]

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
                <div className="flex items-center">
                  <RadioGroup.Item
                    className="flex h-8 w-24 items-center justify-center rounded-lg border border-primary bg-white data-[state='checked']:border-strong data-[state='checked']:font-medium"
                    value="male"
                  >
                    <span className="text-sm">Masculino</span>
                  </RadioGroup.Item>
                </div>
                <div className="flex items-center">
                  <RadioGroup.Item
                    className="flex h-8 w-24 items-center justify-center rounded-lg border border-primary bg-white data-[state='checked']:border-strong data-[state='checked']:font-medium"
                    value="female"
                  >
                    <span className="text-sm">Feminino</span>
                  </RadioGroup.Item>
                </div>
                <div className="flex items-center">
                  <RadioGroup.Item
                    className="flex h-8 w-24 items-center justify-center rounded-lg border border-primary bg-white data-[state='checked']:border-strong data-[state='checked']:font-medium"
                    value="mixed"
                  >
                    <span className="text-sm">Misto</span>
                  </RadioGroup.Item>
                </div>
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
                <div className="flex items-center">
                  <RadioGroup.Item
                    className="flex h-8 w-32 items-center justify-center rounded-lg border border-primary bg-white data-[state='checked']:border-strong data-[state='checked']:font-medium"
                    value="individual"
                  >
                    <span className="text-sm">Individual</span>
                  </RadioGroup.Item>
                </div>
                <div className="flex items-center">
                  <RadioGroup.Item
                    className="flex h-8 w-32 items-center justify-center rounded-lg border border-primary bg-white data-[state='checked']:border-strong data-[state='checked']:font-medium"
                    value="shared"
                  >
                    <span className="text-sm">Compartilhado</span>
                  </RadioGroup.Item>
                </div>
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
                <div className="flex items-center">
                  <RadioGroup.Item
                    className="flex h-8 w-32 items-center justify-center rounded-lg border border-primary bg-white data-[state='checked']:border-strong data-[state='checked']:font-medium"
                    value="true"
                  >
                    <span className="text-sm">Possui</span>
                  </RadioGroup.Item>
                </div>
                <div className="flex items-center">
                  <RadioGroup.Item
                    className="flex h-8 w-32 items-center justify-center rounded-lg border border-primary bg-white data-[state='checked']:border-strong data-[state='checked']:font-medium"
                    value="false"
                  >
                    <span className="text-sm">Não possui</span>
                  </RadioGroup.Item>
                </div>
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
