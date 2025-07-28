'use server'

import { createServer } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function signIn(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const supabase = createServer()

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    console.error('Sign In Error:', error)
    return redirect('/login?message=Could not authenticate user')
  }

  return redirect('/')
}

export async function signUp(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const supabase = createServer()

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  })

  if (error) {
    console.error('Sign Up Error:', error)
    return redirect('/login?message=Could not create user')
  }

  return redirect('/login?message=Check email to continue sign in process')
}

export async function signOut() {
  const supabase = createServer()
  await supabase.auth.signOut()
  return redirect('/')
}