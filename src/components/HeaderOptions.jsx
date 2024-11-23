'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai"
export default function HeaderOptions() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const searchTerm = searchParams.get('searchTerm')
    const pathName = usePathname()
    const selectTab=(tab)=>{
        router.push(`/search/${tab === "images" ? "image" : "web"}?searchTerm=${searchTerm}`)
    }
  return (
    <div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start
        lg:pl-52 text-gray-700 text-sm">
        <div onClick={()=>selectTab("all")} className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathName === '/search/web' && '!text-blue-600 !border-blue-600'}`}>
            <AiOutlineSearch className="text-md "/>
            <p>All</p>
        </div>
        <div onClick={()=>selectTab("images")} className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathName === '/search/image' && '!text-blue-600 !border-blue-600'}`}>
            <AiOutlineCamera className="text-md "/>
            <p>Images</p>
        </div>
    </div>
  )
}
