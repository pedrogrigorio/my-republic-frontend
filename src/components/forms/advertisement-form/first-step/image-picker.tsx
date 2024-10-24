'use client'

import { ChangeEvent, useState } from 'react'
import { Camera } from '@phosphor-icons/react/dist/ssr'
import { Input } from '@/components/shadcnui/input'
import { Label } from '@/components/shadcnui/label'
import { useDialog } from '@/hooks/useDialog'
import PhotoPreviewModal from '@/components/modals/photo-preview-modal'
import { useFormContext } from 'react-hook-form'

export default function ImagePicker() {
  const [file, setFile] = useState<string | null>(null)
  const { setValue } = useFormContext()
  const photoPreviewDialog = useDialog()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const object = event.target.files.item(0)

      if (!object) return

      const objectUrl = URL.createObjectURL(object)
      setFile(objectUrl)
      photoPreviewDialog.trigger()
    }
  }

  const onConfirm = async (croppedImage: File) => {
    setValue('picture', croppedImage)
    photoPreviewDialog.dismiss()
  }

  return (
    <div>
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
        <PhotoPreviewModal
          aspect={16 / 9}
          file={file}
          onConfirm={onConfirm}
          {...photoPreviewDialog.props}
        />
      )}
    </div>
  )
}
