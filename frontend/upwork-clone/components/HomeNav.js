import React from 'react'
import Link from 'next/link'

function HomeNav() {
    return (
        <div className='w-full border-b border'>
            <nav className='py-5 w-full justify-between flex px-64'>
                <div>Upwork</div>
                <div className='flex gap-5 items-center'>
                    <div className='border p-1 rounded-full items-center'><input className='outline-none p-1' placeholder='search' /></div>
                    <Link href="/pages/Login">Login</Link>
                    <Link href="/pages/Sign-Up" className='text-white py-2 px-5 bg-green-700 rounded'>Signup</Link>
                    <div>sggahfshaafh</div>
                </div>
            </nav>
        </div>
    )
}

export default HomeNav
