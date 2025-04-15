import {SignUp } from '@clerk/nextjs'
import React from 'react'

export default function SignUpPage() {
  return (
    <div className='h-screen w-full grid place-items-center'>
        <SignUp/>
    </div>
  )
}
