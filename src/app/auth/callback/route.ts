import { createServer } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

// Define constants for the env vars at the top of the file
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/'

  if (code) {
    // Pass the variables to the function
    const supabase = createServer(supabaseUrl, supabaseKey)
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      return NextResponse.redirect(new URL(next, request.url).toString())
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(new URL('/login?message=Could not verify email', request.url).toString())
}