import Image from "next/image";
import Link from "next/link";
import SearchBar from "./components/SearchBar";
import AllPdf from "./components/AllPdf";
import Footer from "./components/Footer"; 

export default function Home() {
  return (
    <div className="min-h-screen  bg-white">
      <main className="flex-1">
        {/* Navbar */}
        <div className="flex justify-between items-center p-4 bg-gray-800 ">

          <div className="flex justify-between ml-3">
          <Link href="https://github.com/himanshu-463"><Image width={40} height={40} src="/github.png" alt="github-logo" className="invert"></Image></Link>
          </div>

          <h2 className="text-white font-bold text-2xl">ALL QUESTIONS PAPERS</h2>

          <div className="flex justify-between gap-5 mr-3">
          <Link href="https://github.com/himanshu-463"><Image width={40} height={40} src="/github.png" alt="github-logo" className="invert"></Image></Link>
          <Link href="https://www.linkedin.com/in/himanshu-kumar-34a2363a3/"><Image width={40} height={40} src="/linkedin.png" alt="linkedin-logo" className="invert"></Image></Link>
          </div>

        </div>
      </main>

      <AllPdf/>
{/* 
      <Footer/> */}

    </div>
  );
}
