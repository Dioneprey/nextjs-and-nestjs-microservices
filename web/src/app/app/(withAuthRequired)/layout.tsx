'use client'
import { useSession } from 'next-auth/react'
import '../../globals.css'
import { redirect } from 'next/navigation'

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  const { status } = useSession()

  if (status === 'unauthenticated') {
    redirect('/app')
  } else {
    return <div>{children}</div>
  }
}
