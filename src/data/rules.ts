import { Rule } from '@/types/rules'

export const rules: Rule[] = [
  { id: 1, tag: 'noSmoking', name: 'Proibido fumar' },
  { id: 2, tag: 'noAlcohol', name: 'Proibido bebidas alcóolicas' },
  { id: 3, tag: 'noParties', name: 'Proibido festas' },
  { id: 4, tag: 'noPets', name: 'Proibido animais de estimação' },
  { id: 5, tag: 'noNoiseAfter10', name: 'Proibido barulho após às 22h' },
  { id: 6, tag: 'noUncleanAreas', name: 'Proibido deixar áreas comuns sujas' },
  { id: 7, tag: 'noSharingKeys', name: 'Proibido compartilhar chaves' },
  { id: 8, tag: 'noOvernightGuests', name: 'Proibido convidados pernoitarem' },
]
