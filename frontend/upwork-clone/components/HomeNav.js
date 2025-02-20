import React from 'react'
import Link from 'next/link'
import { RiArrowDropDownLine } from "react-icons/ri";

function HomeNav() {
    return (
        <div className='w-full border-b border'>
            <nav className='py-5 w-full justify-between flex px-64'>
                <div className='flex flex-row gap-5 items-center'>
                    <div>Upwork</div>
                    <div className='flex flex-row gap-5 items-center'>
                        <ul className='flex flex-row gap-5 items-center'>
                            <li className='cursor-pointer hover:text-green-700 flex items-center'>Find Talent <RiArrowDropDownLine size={24}/></li>
                            <li className='cursor-pointer hover:text-green-700 flex items-center'>Find Work <RiArrowDropDownLine size={24}/></li>
                            <li className='cursor-pointer hover:text-green-700 flex items-center'>About Upwork <RiArrowDropDownLine size={24}/></li>
                            <li className='cursor-pointer hover:text-green-700 flex items-center'>Whats New <RiArrowDropDownLine size={24}/></li>
                        </ul>
                        <ul className='flex flex-row gap-5 items-center'>
                            <li className='cursor-pointer'>
                                <Link href="/" className='hover:text-green-700'>Enteprice</Link>
                            </li>
                            <li className='cursor-pointer'>
                                <Link href="/" className='hover:text-green-700'>Pricing</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <div className='border p-1 rounded-full items-center'><input className='outline-none p-1' placeholder='search' /></div>
                    <Link href="/pages/Login">Login</Link>
                    <Link href="/pages/Sign-Up" className='text-white py-2 px-5 bg-green-700 rounded'>Signup</Link>
                </div>
            </nav>
        </div>
    )
}

export default HomeNav
