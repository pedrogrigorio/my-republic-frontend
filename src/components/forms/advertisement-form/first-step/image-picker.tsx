'use client'

import ScrollArrowButton from '@/components/ui/scroll-arrow-button'
import Image from 'next/image'

import { Controller, useFormContext } from 'react-hook-form'
import { useScrollArrows } from '@/hooks/useScrollArrows'
import { ChangeEvent } from 'react'
import { Camera, X } from '@phosphor-icons/react/dist/ssr'
import { Input } from '@/components/shadcnui/input'
import { Label } from '@/components/shadcnui/label'

export default function ImagePicker() {
  const {
    scrollableContainer,
    rightArrowActive,
    leftArrowActive,
    scrollRight,
    scrollLeft,
  } = useScrollArrows()

  const { setValue, getValues, control, trigger, clearErrors } =
    useFormContext()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target

    if (target.files) {
      const fileArray = Array.from(target.files)
      const prevFiles = getValues('pictures')

      if (prevFiles.length + fileArray.length > 10) {
        alert('Máximo de 10 arquivos permitidos')
        return
      }

      if (prevFiles) {
        setValue('pictures', prevFiles.concat(fileArray))
      } else {
        setValue('pictures', fileArray)
      }

      clearErrors('pictures')
    }
  }

  const removeImg = (index: number) => {
    const prevFiles = getValues('pictures') as File[]
    const newFilesArray = prevFiles.filter((_, i) => i !== index)

    setValue('pictures', newFilesArray)
    if (newFilesArray.length === 0) {
      trigger('pictures')
    }
  }

  return (
    <Controller
      name="pictures"
      defaultValue={[]}
      control={control}
      render={({ field }) => (
        <div className="flex gap-4">
          <div>
            {/* Label with style */}
            <Label htmlFor="pictures" className="flex w-fit flex-col">
              <div>
                <h4>Fotos *</h4>
                <span className="text-sm font-normal text-primary">
                  No máximo 10 fotos
                </span>
              </div>

              <div className="mt-2 flex h-40 w-48 items-center justify-center rounded-xl border border-dashed bg-white">
                <div className="flex flex-col items-center justify-center">
                  <Camera size={48} />
                  <h4>Adicionar fotos</h4>
                  <span className="text-sm text-primary">JPEG ou PNG</span>
                </div>
              </div>
            </Label>

            {/* Input */}
            <Input
              id="pictures"
              name="pictures"
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleChange}
              multiple
              className="hidden"
            />
          </div>

          {/* Preview pictures */}
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
              {field.value
                .map((file: File) => URL.createObjectURL(file))
                .map((imgUrl: string, index: number) => (
                  <div
                    key={imgUrl}
                    className="group relative aspect-video h-[72px] rounded-xl"
                  >
                    <button
                      onClick={() => removeImg(index)}
                      className="absolute right-1 top-1 z-10 hidden h-6 w-6 items-center justify-center rounded-full bg-gray-800 group-hover:flex"
                    >
                      <X scale={16} className="text-white" />
                    </button>

                    <Image
                      src={imgUrl}
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
      )}
    />
  )
}
