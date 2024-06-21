import { useEffect, useRef, useState } from 'react'

export function useFileInput() {
  const [uploadedImages, setUploadedImages] = useState<string[]>([])
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
      const fileArray = Array.from(target.files).map((file) =>
        URL.createObjectURL(file),
      )

      setUploadedImages((prevImages) => prevImages.concat(fileArray))
    }
  }

  const removeImg = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return {
    inputRef,
    uploadedImages,
    removeImg,
  }
}
