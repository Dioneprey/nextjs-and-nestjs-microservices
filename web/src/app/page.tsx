import { getSession } from '@auth0/nextjs-auth0'
import { redirect } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server'

export default async function App(
  request: NextRequest,
  response: NextResponse,
) {
  const session = await getSession(request, response)
  
  if (!session) {
    redirect('/api/auth/login')
  } else {
    redirect('/app')
  }
}
