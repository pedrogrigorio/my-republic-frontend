import {
  Gear,
  House,
  MagnifyingGlass,
  Megaphone,
} from '@phosphor-icons/react/dist/ssr'

export const mainMenu = [
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
      },
      {
        id: 'favorites',
        label: 'Favoritos',
        path: '/student-housing/favorites',
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
    submenu: [
      {
        id: 'my-account',
        label: 'Minha conta',
        path: '/settings/account',
      },
    ],
  },
]
