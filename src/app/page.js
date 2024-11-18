import HomeHeader from "@/components/HomeHeader";
import Search from "@/components/Search";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <HomeHeader/>
      <div className="flex flex-col items-center mt-24">
        <Image className=""
            src="https://flagpalette.com/wp-content/uploads/2024/06/google-logo.png" alt="Google logo"
            width={300}
            height={100}
            priority
            style={{width:"auto"}}
        />
        <Search/>
      </div>
    </>
  )
}
