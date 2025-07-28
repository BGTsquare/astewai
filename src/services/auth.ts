'use server' // <-- Mark this as a file containing Server Actions

import { createServer } from '@/lib/supabase'
import { type EmailOtpType } from '@supabase/supabase-js'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

// Sign in with email and password
export async function signIn(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const supabase = createServer()

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    // We could return a more specific error message here
    return redirect('/login?message=Could not authenticate user')
  }

  revalidatePath('/', 'layout') // Re-render the whole layout to reflect login state
  redirect('/')
}

// Sign up with email and password
export async function signUp(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const supabase = createServer()

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      // This will be used to create the user profile in a later step
      // emailRedirectTo: 'http://localhost:3000/auth/callback',
    },
  })

  if (error) {
    return redirect('/login?message=Could not create user')
  }

  // For now, we'll just redirect to a success page.
  // In a real app, you'd likely redirect to a "check your email" page.
  return redirect('/login?message=Check email to continue sign in process')
}

// Sign out the current user
export async function signOut() {
    const supabase = createServer()
    await supabase.auth.signOut()
    revalidatePath('/', 'layout')
    redirect('/login')
}