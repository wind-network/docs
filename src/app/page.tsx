'use client'
// app/page.tsx (or pages/index.tsx)
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import animationData from '../../public/home.json';

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const HomePage: NextPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden font-mono">
      {/* Main content area - takes full width on mobile, 4/5 on larger screens */}
      <div className="relative w-full md:w-4/5 bg-white bg-opacity-100 p-4 sm:p-6 lg:p-10 flex flex-col justify-end text-gray-800 overflow-auto h-auto md:h-screen">
        
        {/* Logo positioned at top left */}
        <div className="absolute top-4 left-4">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={150}
            height={150}
            className="object-contain w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32"
          />
        </div>

        {/* Navigation header */}
        <header className="absolute top-0 right-0 max-h-1/2 px-4 py-4 flex items-center justify-end">
          <nav className="ml-auto">
            <ul className="flex flex-wrap gap-3 sm:gap-6 text-gray-800 text-xs sm:text-sm md:text-base">
              <li>
                <Link href="/docs" className="hover:underline">
                  Docs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/people" className="hover:underline">
                  People
                </Link>
              </li>
              <li>
                <Link href="/qna" className="hover:underline">
                  Q&A
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main content with animation and text */}
        <div className="mt-24 sm:mt-32 md:mt-20 lg:mt-0 pb-6">
          <div className="w-32 h-32 sm:w-48 sm:h-48 mx-auto mb-4 sm:mb-6">
            <Lottie animationData={animationData} loop={true} />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4"> 
            <span className="underline">wind network:</span> A Decentralized Autonomous Incentivized Indexing Layer for Solana
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
          wind network is a new decentralized indexing system built for the high-speed Solana blockchain. It shifts data indexing away from a central point to a network of incentivized participants. By using the Interplanetary Data Machine (IPDM) and the libp2p gossipsub network, wind network aims to create a robust and open-source infrastructure capable of handling Solana&apos;s demanding data flow. The system combines peer-to-peer networking, efficient data processing, and economic rewards to provide reliable, scalable, and decentralized data indexing with high performance, low latency, and strong data consistency and availability.
          </p>
        </div>
      </div>

      {/* Right sidebar - takes full width on mobile, 1/5 on larger screens */}
      <div className="w-full md:w-1/5 bg-[#0090FF] text-white p-4 sm:p-6 lg:p-8 flex flex-col justify-center space-y-4 h-auto md:h-screen overflow-auto">
        <div className="space-y-2">
          <p className="text-xs sm:text-sm">Join our community, have productive conversations, meet great people, engage with us talk about solana. we are waiting for you. join us on </p>
          <Link href="https://t.me/+MznFxMPcIhM3ZDI1" className="underline hover:text-gray-300 text-xs sm:text-sm">
            telegram 
          </Link>
        </div>

        <div className="space-y-2">
          <p className="text-xs sm:text-sm">Our project is completely Open Source project, So If you are dev and wants to contribute to the project, you can find the repository on </p>
          <Link href="https://github.com/wind-network" className="underline hover:text-gray-300 text-xs sm:text-sm">
            Github 
          </Link>
        </div>

        <div className="space-y-2">
          <p className="text-xs sm:text-sm">and find contributing guidelines</p>
          <Link href="https://github.com/wind-network/windexer/blob/main/README.md" className="underline hover:text-gray-300 text-xs sm:text-sm">
            here
          </Link>
        </div>

        <div className="space-y-2">
          <p className="text-xs sm:text-sm">Follow updates on</p>
          <Link href="https://x.com/windnetwork_" className="underline hover:text-gray-300 text-xs sm:text-sm">
            twitter 
          </Link>
        </div>

        <div className="pt-4 space-y-3">
          <Link href="/docs/api-reference" className="block w-full">
            <button className="w-full bg-#0090FF text-white border border-white py-2 px-4 text-center hover:bg-gray-800 transition duration-200 text-xs sm:text-sm">
              API Reference
            </button>
          </Link>
          <Link href="/docs" className="block w-full">
            <button className="w-full bg-#0090FF text-white border border-white py-2 px-4 text-center hover:bg-gray-800 transition duration-200 text-xs sm:text-sm">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;