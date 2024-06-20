import { useEffect, useRef, useState } from 'react'

export function useScrollArrows(isLoading: boolean) {
  const scrollableContainer = useRef<HTMLDivElement>(null)
  const [leftArrowActive, setLeftArrowActive] = useState(false)
  const [rightArrowActive, setRightArrowActive] = useState(true)

  useEffect(() => {
    if (isLoading) {
      return
    }

    const container = scrollableContainer.current

    if (container) {
      container.addEventListener('scroll', manageArrows)
      window.addEventListener('resize', manageArrows)
      manageArrows()
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', manageArrows)
        window.removeEventListener('resize', manageArrows)
      }
    }
  }, [isLoading])

  const manageArrows = () => {
    if (scrollableContainer.current) {
      const tags = scrollableContainer.current
      console.log(tags.scrollWidth, tags.clientWidth)
      const maxScrollValue = tags.scrollWidth - tags.clientWidth

      if (maxScrollValue <= 0) {
        setRightArrowActive(false)
        setLeftArrowActive(false)
        return
      }

      if (tags.scrollLeft >= 20) {
        setLeftArrowActive(true)
      } else {
        setLeftArrowActive(false)
      }

      if (tags.scrollLeft >= maxScrollValue - 20) {
        setRightArrowActive(false)
      } else {
        setRightArrowActive(true)
      }
    }
  }

  const scrollRight = () => {
    if (scrollableContainer.current) {
      scrollableContainer.current.scrollLeft += 200
    }
  }

  const scrollLeft = () => {
    if (scrollableContainer.current) {
      scrollableContainer.current.scrollLeft -= 200
    }
  }

  return {
    scrollableContainer,
    leftArrowActive,
    rightArrowActive,
    scrollRight,
    scrollLeft,
  }
}