import { useEffect, useState } from 'react'
import { getSession } from '@/lib/auth'
import { Session } from '@/types/session'

export function useSession() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession()
      setSession(sessionData)
    }

    fetchSession()
  }, [])

  const refreshSession = async () => {
    const sessionData = await getSession()
    setSession(sessionData)
  }

  return { session, refreshSession }
}
