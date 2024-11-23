import Webresults from "@/components/Webresults";
import Link from "next/link";


export default async function WebSearchPage({searchParams}) {
  const startIndex=(await searchParams).start || '1'
  const searchTerm =(await searchParams).searchTerm
  await new Promise((resolve)=> setTimeout(resolve,1000))
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchTerm}&start=${startIndex}`)
  if(!response.ok)throw new Error("Something went wrong")
  const data = await response.json()
  const results = data.items;
  if(!results){
    return(
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found for {searchTerm}</h1>
        <p className="">Try searching for something else {' '}
          <Link href='/' className="text-blue-500">
          Home
          </Link>
        </p>
      </div>
    )
  } 
  return (
    <div className="">
      <div className="">
        {results && <Webresults results = {data}/> }
      </div>
    </div>
  )
}
