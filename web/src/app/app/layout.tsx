import { getSession } from '@auth0/nextjs-auth0'
import '../globals.css'
import { NextRequest, NextResponse } from 'next/server'
import { redirect } from 'next/navigation'

interface AppLayoutProps {
  request: NextRequest
  response: NextResponse
  children: React.ReactNode
}

export default async function AppLayout({
  request,
  response,
  children,
}: AppLayoutProps) {
  const session = await getSession(request, response)
  
  if (!session) {
    redirect('/api/auth/login')
  } else {
    return <div>{children}</div>
  }
}
