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
    label: 'Seus anúncios',
    path: '/seus-anuncios',
    icon: <Megaphone size={20} />,
  },
  {
    id: 'search',
    label: 'Buscar repúblicas',
    path: '/buscar-republicas',
    icon: <MagnifyingGlass size={20} />,
    submenu: [
      {
        id: 'search-ads',
        label: 'Buscar',
        path: '/buscar-republicas',
      },
      {
        id: 'my-applications',
        label: 'Minhas aplicações',
        path: '/minhas-aplicacoes',
      },
      {
        id: 'favorites',
        label: 'Favoritos',
        path: '/favoritos',
      },
    ],
  },
]

export const systemMenu = [
  {
    id: 'notifications',
    label: 'Notificações',
    icon: <Bell size={20} />,
  },
  {
    id: 'settings',
    label: 'Configurações',
    path: '/configuracoes',
    icon: <Gear size={20} />,
    submenu: [
      {
        id: '/my-account',
        label: 'Minha conta',
        path: '/minha-conta',
      },
    ],
  },
]
