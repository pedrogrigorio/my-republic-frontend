import persona from '@/assets/img/persona.png'

export const notifications = [
  {
    id: 0,
    img_url: persona,
    type: 0,
    user: 'João da Silva',
    ad: 'República Quixadá',
    body: 'Olá, tudo bem? Tenho interesse no seu anúncio de república e gostaria de saber se você ainda tem vagas.',
    date: '2023-03-07 12:12:00',
    isRead: false,
  },
  {
    id: 1,
    img_url: null,
    type: 1,
    user: null,
    ad: 'República Quixadá',
    body: 'Não perca tempo e faça sua aplicação agora mesmo!',
    date: '2023-03-07 12:12:00',
    isRead: false,
  },
  {
    id: 2,
    img_url: null,
    type: 2,
    user: null,
    ad: 'República Quixadá',
    body: 'Número máximo de pessoas atingido.',
    date: '2023-03-07 12:12:00',
    isRead: false,
  },
  {
    id: 3,
    img_url: persona,
    type: 0,
    user: 'João da Silva',
    ad: 'República Quixadá',
    body: 'Olá, tudo bem? Tenho interesse no seu anúncio de república. Você ainda tem vagas?',
    date: '2023-03-08 12:12:00',
    isRead: false,
  },
  {
    id: 4,
    img_url: null,
    type: 1,
    user: null,
    ad: 'República Quixadá',
    body: 'Não perca tempo e faça sua aplicação agora mesmo!',
    date: '2023-03-08 12:12:00',
    isRead: false,
  },
  {
    id: 5,
    img_url: null,
    type: 2,
    user: null,
    ad: 'República Quixadá',
    body: 'Número máximo de pessoas atingido.',
    date: '2023-03-08 12:12:00',
    isRead: false,
  },
  {
    id: 6,
    img_url: persona,
    type: 0,
    user: 'João da Silva',
    ad: 'República Quixadá',
    body: 'Olá, tudo bem? Tenho interesse no seu anúncio de república. Você ainda tem vagas?',
    date: '2023-03-09 12:12:00',
    isRead: false,
  },
  {
    id: 7,
    img_url: null,
    type: 1,
    user: null,
    ad: 'República Quixadá',
    body: 'Não perca tempo e faça sua aplicação agora mesmo!',
    date: '2023-03-09 12:12:00',
    isRead: false,
  },
  {
    id: 8,
    img_url: null,
    type: 2,
    user: null,
    ad: 'República Quixadá',
    body: 'Número máximo de pessoas atingido.',
    date: '2023-03-09 12:12:00',
    isRead: false,
  },
]

const groupNotificationsByDate = (notifications: Notification[]) => {
  const grouped = notifications.reduce((acc, notification) => {
    const date = notification.date.split(' ')[0]
    if (!acc[date]) {
      acc[date] = []
    }
    acc[date].push(notification)
    return acc
  }, {})

  return Object.keys(grouped).map((date) => ({
    date,
    notifications: grouped[date],
  }))
}

export const notificationsGroupedByDate =
  groupNotificationsByDate(notifications)
