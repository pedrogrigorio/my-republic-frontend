import { useEffect, useRef, useState } from 'react'

export function useFileInput() {
  const [previewImages, setPreviewImages] = useState<string[]>([])
  const [files, setFiles] = useState<File[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const inputElement = inputRef.current

    if (inputElement) {
      inputElement.addEventListener('change', handleFileChange)
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener('change', handleFileChange)
      }
    }
  }, [])

  const handleFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement

    if (target.files) {
      const fileArray = Array.from(target.files)
      const previewArray = fileArray.map((file) => URL.createObjectURL(file))

      setFiles((prevFiles) => prevFiles.concat(fileArray))
      setPreviewImages((prevImages) => prevImages.concat(previewArray))
    }
  }

  const removeImg = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index))
    setPreviewImages((prevImages) => prevImages.filter((_, i) => i !== index))
  }

  return {
    inputRef,
    files,
    previewImages,
    removeImg,
  }
}
