import { IMenuItem } from '@/types/sidebar'
import {
  Gear,
  House,
  Megaphone,
  MagnifyingGlass,
} from '@phosphor-icons/react/dist/ssr'

export const mainMenu: IMenuItem[] = [
  {
    id: 'home',
    label: 'Início',
    path: '/',
    icon: <House size={24} />,
  },
  {
    id: 'ads',
    label: 'Meus anúncios',
    path: '/my-ads',
    icon: <Megaphone size={24} />,
    protected: true,
  },
  {
    id: 'search',
    label: 'Buscar repúblicas',
    path: '/student-housing',
    icon: <MagnifyingGlass size={24} />,
    submenu: [
      {
        id: 'search-ads',
        label: 'Buscar',
        path: '/student-housing/search',
      },
      {
        id: 'my-applications',
        label: 'Minhas aplicações',
        path: '/student-housing/applications',
        protected: true,
      },
    ],
  },
]

export const systemMenu = [
  {
    id: 'settings',
    label: 'Configurações',
    path: '/settings',
    icon: <Gear size={24} />,
    protected: true,
    submenu: [
      {
        id: 'my-account',
        label: 'Minha conta',
        path: '/settings/account',
      },
    ],
  },
]
