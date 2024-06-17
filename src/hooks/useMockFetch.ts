import { useEffect, useState } from 'react'

export function useMockFetch<T>(sampleData: T, dependency: boolean = true) {
  const [data, setData] = useState<T>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    if (dependency) {
      setTimeout(() => {
        setData(sampleData)
        setIsLoading(false)
      }, 500)
    }
  }, [sampleData, dependency])

  return { data, isLoading }
}
