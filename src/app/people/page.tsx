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
    name: 'Alex Johnson',
    role: 'Founder & Lead Developer',
    bio: 'Alex has been building in the Solana ecosystem since 2021 and has deep expertise in distributed systems and blockchain technology.',
    links: {
      github: 'https://github.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 2,
    name: 'Sophia Chen',
    role: 'Core Developer',
    bio: 'Sophia specializes in designing and implementing high-performance systems with a focus on reliability and scalability.',
    links: {
      github: 'https://github.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 3,
    name: 'Marcus Taylor',
    role: 'Tokenomics Lead',
    bio: 'With a background in economics and crypto markets, Marcus designs incentive structures that align network participation with long-term value.',
    links: {
      github: 'https://github.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 4,
    name: 'Leila Patel',
    role: 'Community Manager',
    bio: 'Leila brings experience in community building and developer relations from multiple successful Web3 projects.',
    links: {
      github: 'https://github.com',
      twitter: 'https://twitter.com',
    },
  },
];

export default function PeoplePage() {
  return (

      <div className="py-12 bg-white">
        <header className="absolute top-0 right-0 max-h-1/2 px-4 py-4 flex items-center justify-end backdrop-blur-md z-20">
          <nav className="ml-auto">
            <ul className="flex flex-wrap gap-3 sm:gap-6 text-gray-800 text-xs sm:text-sm md:text-base">
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
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#0090FF] mb-2">Our Team</h1>
          <p className="text-gray-600 mb-10">Meet the passionate individuals building Wind Network</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105"
              >
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <PlaceholderAvatar name={member.name} size={110} />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-1">{member.name}</h2>
                  <p className="text-[#0090FF] text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex gap-3">
                    <a 
                      href={member.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      GitHub
                    </a>
                    <a 
                      href={member.links.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-[#0090FF] bg-opacity-10 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h2>
            <p className="text-gray-700 mb-6">
              We're always looking for talented individuals who are passionate about Web3 and decentralized systems.
              Check out our open positions or reach out directly.
            </p>
            <a 
              href="mailto:jobs@windnetwork.example.com" 
              className="inline-block bg-[#0090FF] text-white py-2 px-6 rounded-md hover:bg-opacity-80 transition-colors"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </div>
  );
} 