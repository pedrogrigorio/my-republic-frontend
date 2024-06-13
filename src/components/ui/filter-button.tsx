import { Faders } from '@phosphor-icons/react/dist/ssr'
import { Button } from './button'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import * as Slider from '@radix-ui/react-slider'
import { useState } from 'react'
import { priceToCurrency } from '@/utils/priceToCurrency'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { Checkbox } from './checkbox'
import { Label } from './label'
import { Input } from './input'

export default function FilterButton() {
  const [priceRange, setPriceRange] = useState<number[]>([0, 1500])

  return (
    <Popover>
      <PopoverTrigger>
        <Button className="flex gap-2 bg-button-filter px-6 hover:bg-button-filter-hover">
          <Faders size={20} />
          Filtro
        </Button>
      </PopoverTrigger>
      <PopoverContent className="mr-16 flex h-[65vh] w-[572px] flex-col rounded-3xl p-0">
        {/* Header */}
        <div className="px-6 pb-4 pt-8 font-medium text-strong">
          <h3>Notificações</h3>
        </div>

        {/* Divisor */}
        <div className="h-[1px] w-full bg-divisor"></div>

        {/* Conteúdo */}
        <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-6 py-4 scrollbar-thin">
          {/* Intervalo de preço */}
          <div className="flex flex-col gap-2">
            <h4>Intervalo de preço</h4>
            <Slider.Root
              defaultValue={[0, 1500]}
              className="relative flex w-full touch-none select-none items-center"
              minStepsBetweenThumbs={1}
              min={0}
              max={1500}
              step={50}
              onValueChange={(value) => setPriceRange(value)}
            >
              <Slider.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200">
                <Slider.Range className="absolute h-full bg-green-500" />
              </Slider.Track>
              <Slider.Thumb className="block h-5 w-5 rounded-full bg-green-500 ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
              <Slider.Thumb className="block h-5 w-5 rounded-full bg-green-500 ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
            </Slider.Root>
            <div className="flex justify-between">
              <span>{priceToCurrency(priceRange[0])}</span>
              <span>{priceToCurrency(priceRange[1])}</span>
            </div>
          </div>

          {/* Sobre a república */}
          <div className="flex flex-col gap-2">
            <h4>Sobre a república</h4>
            {/* Preferência de gênero */}
            <div>
              <span className="text-sm">Preferência de gênero</span>
              <RadioGroup.Root
                className="mt-2 flex gap-4"
                aria-label="View density"
              >
                <div className="flex items-center">
                  <RadioGroup.Item
                    className="data-[state='checked']:border-strong flex h-8 w-24 items-center justify-center rounded-lg border border-primary bg-white data-[state='checked']:font-medium"
                    value="male"
                  >
                    <span className="text-sm">Masculino</span>
                  </RadioGroup.Item>
                </div>
                <div className="flex items-center">
                  <RadioGroup.Item
                    className="data-[state='checked']:border-strong flex h-8 w-24 items-center justify-center rounded-lg border border-primary bg-white data-[state='checked']:font-medium"
                    value="female"
                  >
                    <span className="text-sm">Feminino</span>
                  </RadioGroup.Item>
                </div>
                <div className="flex items-center">
                  <RadioGroup.Item
                    className="data-[state='checked']:border-strong flex h-8 w-24 items-center justify-center rounded-lg border border-primary bg-white data-[state='checked']:font-medium"
                    value="mixed"
                  >
                    <span className="text-sm">Misto</span>
                  </RadioGroup.Item>
                </div>
              </RadioGroup.Root>
            </div>

            {/* Tipo de quarto */}
            <div>
              <span className="text-sm">Tipo de quarto</span>
              <RadioGroup.Root
                className="mt-2 flex gap-4"
                aria-label="View density"
              >
                <div className="flex items-center">
                  <RadioGroup.Item
                    className="data-[state='checked']:border-strong flex h-8 w-32 items-center justify-center rounded-lg border border-primary bg-white data-[state='checked']:font-medium"
                    value="individual"
                  >
                    <span className="text-sm">Individual</span>
                  </RadioGroup.Item>
                </div>
                <div className="flex items-center">
                  <RadioGroup.Item
                    className="data-[state='checked']:border-strong flex h-8 w-32 items-center justify-center rounded-lg border border-primary bg-white data-[state='checked']:font-medium"
                    value="shared"
                  >
                    <span className="text-sm">Compartilhado</span>
                  </RadioGroup.Item>
                </div>
              </RadioGroup.Root>
            </div>

            {/* Presença de pets */}
            <div>
              <span className="text-sm">Presença de pets</span>
              <RadioGroup.Root
                className="mt-2 flex gap-4"
                aria-label="View density"
              >
                <div className="flex items-center">
                  <RadioGroup.Item
                    className="data-[state='checked']:border-strong flex h-8 w-32 items-center justify-center rounded-lg border border-primary bg-white data-[state='checked']:font-medium"
                    value="true"
                  >
                    <span className="text-sm">Possui</span>
                  </RadioGroup.Item>
                </div>
                <div className="flex items-center">
                  <RadioGroup.Item
                    className="data-[state='checked']:border-strong flex h-8 w-32 items-center justify-center rounded-lg border border-primary bg-white data-[state='checked']:font-medium"
                    value="false"
                  >
                    <span className="text-sm">Não possui</span>
                  </RadioGroup.Item>
                </div>
              </RadioGroup.Root>
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label className="font-normal" htmlFor="numPeople">
                Quantidade de pessoas
              </Label>
              <Input
                type="number"
                id="numPeople"
                placeholder="Digite a quantidade..."
                className="focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label className="font-normal" htmlFor="numRooms">
                Quantidade de quartos
              </Label>
              <Input
                type="number"
                id="numRooms"
                placeholder="Digite a quantidade..."
                className="focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label className="font-normal" htmlFor="numBathrooms">
                Quantidade de banheiros
              </Label>
              <Input
                type="number"
                id="numBathrooms"
                placeholder="Digite a quantidade..."
                className="focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>

          {/* Comodidades da república */}
          <div className="flex flex-col gap-2">
            <h4>Comodidades da república</h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="noSmoking" />
                <label
                  htmlFor="noSmoking"
                  className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Proibido fumar
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="noAlcohol" />
                <label
                  htmlFor="noAlcohol"
                  className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Proibido bebidas alcóolicas
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="noParties" />
                <label
                  htmlFor="noParties"
                  className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Proibido festas
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="noPets" />
                <label
                  htmlFor="noPets"
                  className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Proibido animais de estimação
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="noNoiseAfter10" />
                <label
                  htmlFor="noNoiseAfter10"
                  className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Proibido barulho após às 22h
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="noUncleanAreas" />
                <label
                  htmlFor="noUncleanAreas"
                  className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Proibido deixar áreas comuns sujas
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="noSharingKeys" />
                <label
                  htmlFor="noSharingKeys"
                  className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Proibido compartilhar chaves
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="noOvernightGuests" />
                <label
                  htmlFor="noOvernightGuests"
                  className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Proibido convidados pernoitarem
                </label>
              </div>
            </div>
          </div>

          {/* Regras da república */}
          <div className="flex flex-col gap-2">
            <h4>Regras da república</h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="noSmoking" />
                <label
                  htmlFor="noSmoking"
                  className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Proibido fumar
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="noAlcohol" />
                <label
                  htmlFor="noAlcohol"
                  className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Proibido bebidas alcóolicas
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="noParties" />
                <label
                  htmlFor="noParties"
                  className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Proibido festas
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="noPets" />
                <label
                  htmlFor="noPets"
                  className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Proibido animais de estimação
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="noNoiseAfter10" />
                <label
                  htmlFor="noNoiseAfter10"
                  className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Proibido barulho após às 22h
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="noUncleanAreas" />
                <label
                  htmlFor="noUncleanAreas"
                  className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Proibido deixar áreas comuns sujas
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="noSharingKeys" />
                <label
                  htmlFor="noSharingKeys"
                  className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Proibido compartilhar chaves
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="noOvernightGuests" />
                <label
                  htmlFor="noOvernightGuests"
                  className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Proibido convidados pernoitarem
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="h-[1px] w-full bg-divisor" />

        {/* Botões */}
        <div className="flex justify-end gap-2 px-6 pb-6 pt-4">
          <Button variant="ghost">Cancelar</Button>
          <Button className="bg-button-filter hover:bg-button-filter-hover">
            Aplicar
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
