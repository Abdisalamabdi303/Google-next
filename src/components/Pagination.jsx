'use client'

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { BsChevronLeft,BsChevronRight } from "react-icons/bs"
export default function Pagination() {
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const searchTerm = searchParams.get('searchTerm')
    const startIndex = +searchParams.get('start') || 1
  return (
    <div className="text-blue-700 flex px-10 pb-4 justify-between sm:justify-start
    sm:space-x-44 sm:px-0">
        {
            startIndex >= 10 && (
                <Link href={`${pathName}?searchTerm=${searchTerm}&start=${startIndex - 10}`}>
                    <div className="flex flex-col items-center cursor-pointer hover:underline">
                        <BsChevronLeft className="h-6"/>
                        <p>Previous</p>
                    </div>
                </Link>
            )
        }
        {
            startIndex <= 90 && (
                <Link href={`${pathName}?searchTerm=${searchTerm}&start=${startIndex + 10}`}>
                    <div className="flex flex-col items-center cursor-pointer hover:underline">
                        <BsChevronRight className="h-6"/>
                        <p>Next</p>
                    </div>
                </Link>
            )
        }
    </div>
  )
}
