'use client'

import { z } from 'zod'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { toast } from 'sonner'
import FormFeilds from './FormFeilds'
import { useRouter } from 'next/navigation'

// Form type for deciding between sign-in and sign-up
type FormType = 'sign-in' | 'sign-up'

// Zod schema based on form type
const authFormSchema = (type: FormType) =>
  z.object({
    name: type === 'sign-up'
      ? z.string().min(3, 'Name must be at least 3 characters')
      : z.string().optional(),
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
  })

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter()
  const formSchema = authFormSchema(type)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  // Submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === 'sign-in') {
        toast.success('Account signed in successfully!')
        router.push('/dashboard') // ✅ Go to dashboard after login
        console.log('Signing in with values:', values)
      } else {
        toast.success('Account created successfully!')
        router.push('/sign-in') // ✅ Redirect to login after sign-up
        console.log('Creating account with values:', values)
      }
    } catch (error) {
      toast.error('Error submitting form. Please try again.')
      console.error('Error submitting form:', error)
    }
  }

  const isSignIn = type === 'sign-in'
  const isSignUp = type === 'sign-up'

  return (
    <div className="card-border lg:min-w-[566px] md:min-w-[400px] sm:min-w-[300px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <img src="/logo.svg" alt="logo" height={32} width={38} />
          <h2 className="text-primary-100">InterView-Prep</h2>
        </div>
        <h3>Practice Job Interview With the Interview Prep</h3>

        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
            {isSignUp && (
              <FormFeilds
                control={form.control}
                name="name"
                label="Name"
                placeholder="Enter your name"
              />
            )}

            <FormFeilds
              control={form.control}
              name="email"
              label="Email"
              placeholder="Enter your email"
            />

            <FormFeilds
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
            />

            <Button className="btn" type="submit">
              {isSignIn ? 'Sign in' : 'Create An Account'}
            </Button>
          </form>
        </FormProvider>

        <p className="text-center">
          {isSignIn ? "Don't have an account?" : 'Already have an account?'}{' '}
          <Link
            href={isSignIn ? '/sign-up' : '/sign-in'}
            className="font-bold text-user-primary ml-1"
          >
            {isSignIn ? 'Sign up' : 'Sign in'}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default AuthForm
