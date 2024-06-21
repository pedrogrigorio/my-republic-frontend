import ScrollArrowButton from '@/components/common/scroll-arrow-button'
import apartment from '@/assets/img/apartment.jpg'
import Image from 'next/image'

import { useEffect, useRef } from 'react'
import { useScrollArrows } from '@/hooks/useScrollArrows'
import { Camera, X } from '@phosphor-icons/react/dist/ssr'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface CreateAdvertisementFormProps {
  currentStep: number
}

export default function CreateAdvertisementForm({
  currentStep,
}: CreateAdvertisementFormProps) {
  const inputImg = useRef<HTMLInputElement>(null)

  const {
    scrollableContainer,
    rightArrowActive,
    leftArrowActive,
    scrollRight,
    scrollLeft,
  } = useScrollArrows()

  const removeImg = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  useEffect(() => {
    const handleFileChange = (event: Event) => {
      const target = event.target as HTMLInputElement
      if (target.files) {
        for (let i = 0; i < target.files.length; i++) {
          console.log(target.files[i].name)
        }
      }
    }

    const inputElement = inputImg.current
    if (inputElement) {
      inputElement.addEventListener('change', handleFileChange)
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener('change', handleFileChange)
      }
    }
  }, [])

  return (
    <form className="py-5">
      {currentStep === 1 && (
        <div>
          <div className="flex flex-col items-center">
            <h3>Principais informações</h3>
            <span>Compartilhe algumas informações sobre sua república</span>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="col-span-3 lg:col-span-2">
              <Label htmlFor="title">Título do anúncio *</Label>
              <Input placeholder="Digite o título..." id="title" />
            </div>

            <div className="col-span-3 lg:col-span-1">
              <Label htmlFor="price">Preço (R$) *</Label>
              <Input placeholder="Digite o valor..." id="price" />
            </div>

            <div className="col-span-3">
              <Label htmlFor="description">Descrição</Label>
              <Textarea
                placeholder="Descreva melhor o seu anúncio..."
                id="description"
              />
            </div>

            <div className="col-span-3 lg:col-span-1">
              <Label htmlFor="cep">CEP *</Label>
              <Input placeholder="Digite o CEP..." id="cep" />
            </div>

            <div className="col-span-3 flex gap-4">
              <div>
                <Label htmlFor="pictures" className="flex w-fit flex-col">
                  <div>
                    <h4>Fotos</h4>
                    <span className="text-sm font-normal text-primary">
                      No máximo 10 fotos
                    </span>
                  </div>

                  <div className="mt-2 flex h-40 w-48 items-center justify-center rounded-xl border border-dashed bg-white">
                    <div className="flex flex-col items-center justify-center">
                      <Camera size={48} />
                      <h4>Adicionar fotos</h4>
                      <span className="text-sm text-primary">JPG ou PNG</span>
                    </div>
                  </div>
                </Label>

                <Input
                  type="file"
                  id="pictures"
                  multiple
                  className="hidden"
                  ref={inputImg}
                />
              </div>

              <div className="relative mt-[52px] w-2 flex-1">
                <ScrollArrowButton
                  dir="left"
                  onClick={scrollLeft}
                  arrowSize={24}
                  active={leftArrowActive}
                  className="left-0 top-1/2 h-full -translate-y-1/2 from-0% to-75%"
                />

                <ScrollArrowButton
                  dir="right"
                  onClick={scrollRight}
                  arrowSize={24}
                  active={rightArrowActive}
                  className="right-0 top-1/2 h-full -translate-y-1/2 from-0% to-75%"
                />

                <div
                  className="grid grid-flow-col grid-rows-2 gap-4 overflow-x-auto scroll-smooth scrollbar-none"
                  ref={scrollableContainer}
                  style={{
                    gridTemplateColumns: 'repeat(auto-fill, 128px)',
                  }}
                >
                  {Array.from({ length: 10 }).map((_, index) => (
                    <div
                      key={index}
                      className="group relative aspect-video h-[72px] rounded-xl"
                    >
                      <button
                        onClick={removeImg}
                        className="absolute right-1 top-1 z-10 hidden h-6 w-6 items-center justify-center rounded-full bg-gray-800 group-hover:flex"
                      >
                        <X scale={16} className="text-white" />
                      </button>

                      <Image
                        src={apartment}
                        width={1920}
                        height={1080}
                        alt="image"
                        className="h-full w-full rounded-xl"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
  )
}
