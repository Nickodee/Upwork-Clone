'use client'

import React, { useState } from 'react';
import { BsPersonWorkspace } from "react-icons/bs";
import { LiaPersonBoothSolid } from "react-icons/lia";

function Page() {
  const [selected, setSelected] = useState(null);

  return (
    <div className='px-64'>
      <div className='py-5 hover:border'>
        <span className=''>Upwork</span>
      </div>
      <div className='flex flex-col items-center mt-6 gap-6'>
        <h1 className='text-[30px]'>Join as Client or Freelancer</h1>
        <div className='flex gap-16'>
          {/* Client Selection */}
          <div 
            className={`w-[230px] cursor-pointer border p-2 flex flex-col gap-5 rounded ${selected === 'client' ? 'border-green-700' : ''}`}
            onClick={() => setSelected('client')}
          >
            <div className='flex justify-between items-center'>
              <LiaPersonBoothSolid size={28} />
              {selected === 'client' ? (
                <div className='h-5 w-5 rounded-full border-green-700 border flex justify-center items-center'>
                  <div className='h-3 w-3 rounded-full bg-green-700'></div>
                </div>
              ) : (
                <div className='h-5 w-5 rounded-full border'></div>
              )}
            </div>
            <h1 className='text-[25px] leading-7'>I'm a Client hiring for a Project</h1>
          </div>
          
          {/* Freelancer Selection */}
          <div 
            className={`w-[230px] cursor-pointer border p-2 flex flex-col gap-5 rounded ${selected === 'freelancer' ? 'border-green-700' : ''}`}
            onClick={() => setSelected('freelancer')}
          >
            <div className='flex justify-between items-center'>
              <BsPersonWorkspace size={28} />
              {selected === 'freelancer' ? (
                <div className='h-5 w-5 rounded-full border-green-700 border flex justify-center items-center'>
                  <div className='h-3 w-3 rounded-full bg-green-700'></div>
                </div>
              ) : (
                <div className='h-5 w-5 rounded-full border'></div>
              )}
            </div>
            <h1 className='text-[25px] leading-7'>I'm a Freelancer looking for work</h1>
          </div>
        </div>
        
        {/* Buttons */}
        <div>
          {selected === 'freelancer' && (
            <button className='py-3 px-10 rounded bg-green-700 text-white text-center'>Apply as a Freelancer</button>
          )}
          {selected === 'client' && (
            <button className='py-3 px-10 rounded bg-green-700 text-white text-center'>Join as Client</button>
          )}
          {selected === null && (
            <button className='py-3 px-10 rounded bg-gray-200 text-white text-center'>Create Account</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
