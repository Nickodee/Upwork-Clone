import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div className='px-64 h-screen gap-10 flex flex-col'>
      <div className='py-5 hover:border'>
        <span className=''>Upwork</span>
      </div>

      <div className='flex flex-col gap-52 px-8 py-5 mx-auto items-center justify-between border rounded w-[500px]'>
        <div className='flex flex-col gap-3 w-full items-center'>
          <h1 className='text-[30px]'>Login to Upwork</h1>
          <input className='p-2 border rounded w-full' type='text' placeholder='Username or Email' />
          <button className='text-white w-full rounded bg-green-700 py-3'>Continue</button>
          <div>or</div>
          <div className='w-full bg-blue-500  rounded px-2 py-3 text-white'>
            <span>Continue with google</span>
          </div>
        </div>
        <div className='flex flex-col gap-10 items-center'>
          <div>Don't have an Upwork Account</div>
          <Link href='/pages/Sign-Up' className='text-green-700 border py-3 px-10 rounded'>Sign Up</Link>
        </div>
      </div>

      <div className='bg-black w-full text-white items-center justify-center flex h-32 rounded'>
      © 2015 - 2025 Upwork® Global Inc. • <Link className='hover:underline' href="/">Privacy Policy</Link> • <Link href="/" className='hover:underline'>Cookie Settings</Link>
      </div>
    </div>
  )
}

export default page
