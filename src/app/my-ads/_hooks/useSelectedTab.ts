import { useState } from 'react'

export function useSelectedTab() {
  const [selectedTab, setSelectedTab] = useState('all')

  const selectAll = () => {
    setSelectedTab('all')
  }

  const selectActive = () => {
    setSelectedTab('active')
  }

  const selectPaused = () => {
    setSelectedTab('paused')
  }

  return { selectedTab, selectAll, selectActive, selectPaused }
}
