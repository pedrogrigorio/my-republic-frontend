import { Area } from 'react-easy-crop'

const createImage = (url: string) => {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', reject)
    image.src = url
  })
}

export const getCroppedImg = async (imageSrc: string, pixelCrop: Area) => {
  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  if (!ctx) return null

  // Define as dimensões do canvas
  canvas.width = pixelCrop.width
  canvas.height = pixelCrop.height

  // Desenha a imagem cortada no canvas
  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height,
  )

  // Retorna o canvas como uma imagem base64
  return new Promise<string>((resolve) => {
    canvas.toBlob((blob) => {
      if (!blob) return
      const url = URL.createObjectURL(blob)
      resolve(url)
    }, 'image/jpeg')
  })
}
