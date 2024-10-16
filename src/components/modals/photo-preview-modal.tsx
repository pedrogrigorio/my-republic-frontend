import { Button } from '../shadcnui/button'
import Cropper, { Area } from 'react-easy-crop'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/shadcnui/dialog'
import { useState } from 'react'
import { getCroppedImg } from '@/utils/getCroppedImg'

interface PhotoPreviewModalProps {
  open: boolean
  file: string
  onOpenChange: (value: boolean) => void
  onConfirm: (croppedImage: File) => void
}

export default function PhotoPreviewModal({
  open,
  file,
  onConfirm,
  onOpenChange,
}: PhotoPreviewModalProps) {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)

  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }

  const handleConfirm = async () => {
    if (!croppedAreaPixels) return

    const croppedImageBase64 = await getCroppedImg(file, croppedAreaPixels)

    if (!croppedImageBase64) return

    const response = await fetch(croppedImageBase64)
    const blob = await response.blob()

    const croppedImageFile = new File([blob], 'cropped-image.jpg', {
      type: 'image/jpeg',
    })

    onConfirm(croppedImageFile)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader className="px-6">
          <DialogTitle>Selecione a região da foto</DialogTitle>
        </DialogHeader>
        <div className="h-[1px] w-full bg-divisor" />

        <div className="relative h-96">
          <Cropper
            image={file}
            crop={crop}
            zoom={zoom}
            aspect={1}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </div>

        <DialogFooter className="px-6">
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              Cancelar
            </Button>
          </DialogClose>
          <Button
            type="submit"
            className="bg-button-primary px-8 hover:bg-button-primary-hover"
            onClick={handleConfirm}
          >
            Confirmar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
