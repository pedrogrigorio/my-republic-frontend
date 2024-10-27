'use client'

import Image from 'next/image'
import PhotoPreviewModal from '@/components/modals/photo-preview-modal'

import { ChangeEvent, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useDialog } from '@/hooks/useDialog'
import { Camera, X } from '@phosphor-icons/react/dist/ssr'
import { Input } from '@/components/shadcnui/input'
import { Label } from '@/components/shadcnui/label'

interface ImagePickerProps {
  initialImg?: string
}

export default function ImagePicker({ initialImg }: ImagePickerProps) {
  const [previewFile, setPreviewFile] = useState<string | null>(null)
  const [file, setFile] = useState<string | null>(initialImg ?? null)
  const { setValue, setError, clearErrors, trigger } = useFormContext()
  const photoPreviewDialog = useDialog()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const object = event.target.files.item(0)

      if (!object) return

      const objectUrl = URL.createObjectURL(object)
      setPreviewFile(objectUrl)
      photoPreviewDialog.trigger()
    }
  }

  const onConfirm = async (croppedImage: File) => {
    setValue('picture', croppedImage)
    photoPreviewDialog.dismiss()

    const objectUrl = URL.createObjectURL(croppedImage)
    setFile(objectUrl)
  }

  const removeImg = () => {
    setPreviewFile(null)
    setFile(null)
  }

  useEffect(() => {
    if (!file) {
      setValue('picture', null, { shouldValidate: true })
      setError('picture', {
        type: 'manual',
        message: 'A imagem é obrigatória.',
      })
    } else {
      clearErrors('picture')
    }
  }, [file, setError, setValue, clearErrors, trigger])

  return (
    <div className="flex gap-4">
      {/* Label with style */}
      <Label htmlFor="pictures" className="flex w-fit flex-col">
        <h4>Foto *</h4>

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

      {file && (
        <div className="group relative aspect-video h-40 self-end rounded-xl">
          <button
            type="button"
            onClick={removeImg}
            className="absolute right-1 top-1 z-10 hidden h-6 w-6 items-center justify-center rounded-full bg-gray-800 group-hover:flex"
          >
            <X scale={16} className="text-white" />
          </button>

          <Image
            src={file}
            width={1920}
            height={1080}
            alt="image"
            className="h-full w-full rounded-xl"
          />
        </div>
      )}

      {previewFile && (
        <PhotoPreviewModal
          aspect={16 / 9}
          file={previewFile}
          onConfirm={onConfirm}
          {...photoPreviewDialog.props}
        />
      )}
    </div>
  )
}
