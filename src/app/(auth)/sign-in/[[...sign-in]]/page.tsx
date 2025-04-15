import { SignIn } from '@clerk/nextjs'
import React from 'react'

export default function SignInPage() {
  return (
    <div className='h-screen w-full grid place-items-center'>
        <SignIn/>
    </div>
  )
}
