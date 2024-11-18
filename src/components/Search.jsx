'use client'
import { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsFillMicFill} from 'react-icons/bs'
import { useRouter } from 'next/navigation'
export default function Search() {
    const[input,setInput]=useState('')
    const router = useRouter()
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!input.trim()) return;
        router.push(`/search/web?searchTerm=${input}`);
    }
  return (
    <>
        <form  onSubmit={handleSubmit} className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 py-3 px-3
        rounded-full hover:shadow-md focus-within:shadow-Md transition-shadow sm:max-w-xl lg:max-w-2xl">
            <AiOutlineSearch className='text-xl text-gray-500 mr-3'/>
            <input type="text" className="flex-grow focus:outline-none" 
            onChange={(e)=>setInput(e.target.value)} 
            
            />
            <BsFillMicFill className="text-lg "/>
        </form>
        <div className=" flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4">
            <button type='button' onClick={handleSubmit} className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 focus:outline-non  hover:shadow-md w-36 h-10 transition-shadow">Google Search</button>
             </div>
    </>
  )
}

