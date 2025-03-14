import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const isAuthenticated = req.cookies.get('auth_token')
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/home', req.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/'],
}
