'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';


// Dynamically import the PlaceholderAvatar component
const PlaceholderAvatar = dynamic(() => import('./PlaceholderAvatar'), { ssr: false });

// Placeholder data for team members - replace with real data
const teamMembers = [
  {
    id: 1,
    name: 'Vivek Pal',
    role: 'Founder & Lead Developer',
    bio: 'Vivek has been building in the Solana ecosystem since 2022 and has deep expertise in distributed systems and blockchain technology.',
    links: {
      github: 'https://github.com/vivekpal1',
      twitter: 'https://twitter.com/vivekpal0x',
    },
  },
  {
    id: 2,
    name: 'Shivam Kumar',
    role: 'DevOps Developer',
    bio: 'Shivam specializes in infrastrcutre and deplyement tools.',
    links: {
      github: 'https://github.com',
      twitter: 'https://twitter.com',
    },
  },
];

export default function PeoplePage() {
  return (
    <div className="min-h-screen bg-white pb-12">
      <header className="sticky top-0 right-0 w-full px-4 py-4 flex items-center justify-end backdrop-blur-md z-20">
        <nav className="ml-auto">
          <ul className="flex flex-wrap gap-2 sm:gap-4 md:gap-6 text-gray-800 text-xs sm:text-sm md:text-base">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
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
      <div className="container mx-auto px-4 pt-14 sm:pt-16">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#0090FF] mb-1 sm:mb-2">Our Team</h1>
        <p className="text-gray-600 mb-6 sm:mb-10 text-sm sm:text-base">Meet the passionate individuals building Wind Network</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105"
            >
              <div className="bg-gray-200 h-36 sm:h-40 md:h-44 lg:h-48 flex items-center justify-center">
                <PlaceholderAvatar name={member.name} size={90} />
              </div>
              <div className="p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold mb-1">{member.name}</h2>
                <p className="text-[#0090FF] text-xs sm:text-sm mb-2 sm:mb-3">{member.role}</p>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">{member.bio}</p>
                <div className="flex gap-3">
                  <a 
                    href={member.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm"
                  >
                    GitHub
                  </a>
                  <a 
                    href={member.links.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 sm:mt-16 bg-[#0090FF] bg-opacity-10 p-4 sm:p-8 rounded-lg">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">Join Our Team</h2>
          <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
            We&apos;re always looking for talented individuals who are passionate about Web3 and decentralized systems.
            Check out our open positions or reach out directly.
          </p>
          <a 
            href="mailto:vivek@windnetwork.ai" 
            className="inline-block bg-[#0090FF] text-white py-2 px-4 sm:px-6 rounded-md hover:bg-opacity-80 transition-colors text-sm sm:text-base"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </div>
  );
} 