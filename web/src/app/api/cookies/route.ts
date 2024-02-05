import { setCookie } from 'cookies-next'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest, res: NextResponse) {
  const { accessToken } = await req.json()

  setCookie('sim', accessToken, { req, res, maxAge: 60 * 60 * 24 })
}
