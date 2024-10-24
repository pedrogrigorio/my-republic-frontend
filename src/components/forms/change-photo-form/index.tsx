import PhotoPreviewModal from '@/components/modals/photo-preview-modal'

import { ChangeEvent, useState } from 'react'
import { useDialog } from '@/hooks/useDialog'
import { Camera } from '@phosphor-icons/react/dist/ssr'
import { Input } from '@/components/shadcnui/input'
import { Label } from '@/components/shadcnui/label'
import { changePhoto } from '@/services/user-service'
import { useQueryClient } from '@tanstack/react-query'

export default function ChangePhotoForm() {
  const photoPreviewDialog = useDialog()
  const [file, setFile] = useState<string | null>(null)
  const queryClient = useQueryClient()

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
    photoPreviewDialog.dismiss()

    await changePhoto(croppedImage)

    queryClient.invalidateQueries({
      queryKey: ['get-user-profile'],
    })
  }

  return (
    <form>
      <Label
        htmlFor="pictures"
        className="absolute bottom-0 right-0 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-black to-gray-400"
      >
        <Camera size={32} className="text-white" />
      </Label>
      <Input
        id="pictures"
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleChange}
        className="hidden"
      />

      {file && (
        <PhotoPreviewModal
          aspect={1}
          file={file}
          onConfirm={onConfirm}
          {...photoPreviewDialog.props}
        />
      )}
    </form>
  )
}
