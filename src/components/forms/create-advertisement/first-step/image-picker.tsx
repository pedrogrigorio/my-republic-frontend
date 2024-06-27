'use client'

import ScrollArrowButton from '@/components/common/scroll-arrow-button'
import Image from 'next/image'

import { useScrollArrows } from '@/hooks/useScrollArrows'
import { useFormContext } from 'react-hook-form'
import { useFileInput } from '@/hooks/useFileInput'
import { Camera, X } from '@phosphor-icons/react/dist/ssr'
import { useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function ImagePicker() {
  const { inputRef, files, previewImages, removeImg } = useFileInput()

  const {
    scrollableContainer,
    rightArrowActive,
    leftArrowActive,
    scrollRight,
    scrollLeft,
  } = useScrollArrows()

  const { setValue } = useFormContext()

  useEffect(() => {
    setValue('pictures', files)
  }, [files, setValue])

  return (
    <div className="flex gap-4">
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
              <span className="text-sm text-primary">JPEG ou PNG</span>
            </div>
          </div>
        </Label>

        <Input
          type="file"
          id="pictures"
          multiple
          className="hidden"
          accept="image/png, image/jpeg"
          ref={inputRef}
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
          {previewImages.map((imgUrl, index) => (
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
  )
}
