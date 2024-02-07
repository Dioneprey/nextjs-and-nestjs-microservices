'use client'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'
import { AppBar } from './AppBar'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <AppBar />
      {children}
    </SessionProvider>
  )
}
