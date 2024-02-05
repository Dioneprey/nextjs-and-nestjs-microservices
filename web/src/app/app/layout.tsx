import { cookies } from 'next/headers'

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
  const accessToken = session?.accessToken ?? ''

  console.log(cookies().get('lab-01-cookie'))

  if (!session) {
    redirect('/api/auth/login')
  } else {
    await fetch('http://localhost:3000/api/cookies', {
      method: 'POST',
      body: JSON.stringify({ accessToken }),
    })
    return <div>{children}</div>
  }
}
