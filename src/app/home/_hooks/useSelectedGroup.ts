import { useState } from 'react'

export function useSelectedGroup() {
  const [selectedGroup, setSelectedGroup] = useState('search')

  const selectSearch = () => {
    setSelectedGroup('search')
  }

  const selectAnnounce = () => {
    setSelectedGroup('announce')
  }

  return { selectedGroup, selectSearch, selectAnnounce }
}
