import { useEffect, useState } from 'react'

export function useMockFetch<T>(sampleData: T) {
  const [data, setData] = useState<T>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setData(sampleData)
      setIsLoading(false)
    }, 500)
  }, [sampleData])

  return { data, isLoading }
}
