import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { IMenuItem } from '@/types/sidebar'

const useSubmenuState = (item: IMenuItem, sidebarIsOpen: boolean) => {
  const [isSubmenuActive, setIsSubmenuActive] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsSubmenuActive(false)
  }, [sidebarIsOpen])

  const isActive =
    item.path === '/'
      ? pathname === item.path
      : pathname === item.path || pathname.startsWith(`${item.path}/`)

  const toggleSubmenu = () => {
    setIsSubmenuActive((prev) => !prev)
  }

  return {
    isSubmenuActive,
    isActive,
    pathname,
    toggleSubmenu,
  }
}

export default useSubmenuState
