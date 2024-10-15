import { ReactNode } from 'react'

export interface ISubmenuItem {
  id: string
  label: string
  path: string
  protected?: boolean
}

export interface IMenuItem {
  id: string
  label: string
  icon: ReactNode
  path: string
  submenu?: ISubmenuItem[]
  protected?: boolean
}
