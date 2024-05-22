import {
  Bell,
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
    icon: <House size={20} />,
  },
  {
    id: 'ads',
    label: 'Meus anúncios',
    path: '/my-ads',
    icon: <Megaphone size={20} />,
  },
  {
    id: 'search',
    label: 'Buscar repúblicas',
    path: '/student-housing',
    redirectTo: '/student-housing/search',
    icon: <MagnifyingGlass size={20} />,
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
    id: 'notifications',
    label: 'Notificações',
    path: '#',
    icon: <Bell size={20} />,
  },
  {
    id: 'settings',
    label: 'Configurações',
    path: '/settings',
    redirectTo: '/settings/account',
    icon: <Gear size={20} />,
    submenu: [
      {
        id: 'my-account',
        label: 'Minha conta',
        path: '/settings/account',
      },
    ],
  },
]
