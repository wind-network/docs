'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// FAQ data
const faqs = [
  {
    id: 1,
    question: "What is Wind Network?",
    answer: "Wind Network is a decentralized autonomous incentivized indexing layer for Solana. It provides high-performance data indexing capabilities through a network of incentivized participants rather than relying on centralized infrastructure."
  },
  {
    id: 2,
    question: "How does Wind Network differ from other indexing solutions?",
    answer: "Wind Network is specifically designed for Solana's high-throughput blockchain, with a focus on decentralization. Unlike centralized indexers, Wind Network distributes the indexing workload across a network of participants who are incentivized for their contributions."
  },
  {
    id: 3,
    question: "How can I use Wind Network in my project?",
    answer: "Wind Network provides APIs and SDKs that make it easy to integrate with your application. You can query indexed data, subscribe to real-time updates, and access historical data. Check our documentation for detailed integration guides."
  },
  {
    id: 4,
    question: "Can I become a node operator in the Wind Network?",
    answer: "Yes, Wind Network is designed to be open for participation. Node operators can contribute resources to the network and earn rewards. The technical requirements and setup process are documented in our guides."
  },
  {
    id: 5,
    question: "Is Wind Network open source?",
    answer: "Yes, Wind Network is completely open source. You can find our repositories on GitHub, and we welcome contributions from the community. Check our contribution guidelines to get started."
  },
  {
    id: 6,
    question: "How does Wind Network ensure data consistency?",
    answer: "Wind Network uses a combination of consensus mechanisms and data verification protocols to ensure that indexed data remains consistent across the network. Multiple nodes validate each piece of data before it's considered confirmed."
  },
  {
    id: 7,
    question: "What types of data can Wind Network index?",
    answer: "Wind Network can index a wide range of Solana blockchain data, including transactions, program events, token transfers, NFT activities, and more. Custom indexing schemes can also be developed for specific use cases."
  },
  {
    id: 8,
    question: "How does Wind Network handle network upgrades and changes?",
    answer: "Wind Network is designed with adaptability in mind. The network can be upgraded through governance processes, and the indexing architecture can evolve to accommodate changes in the Solana blockchain itself."
  }
];

export default function QnaPage() {
  const [openId, setOpenId] = useState<number | null>(null);
  
  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };
  
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
      <div className="container mx-auto px-4 max-w-4xl ">
        <h1 className="text-3xl font-bold text-[#0090FF] mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 mb-10">
            Find answers to common questions about Wind Network. If you can't find what you're looking for, 
            please reach out to our community on <a href="https://t.me/+MznFxMPcIhM3ZDI1" className="text-[#0090FF] hover:underline">Telegram</a>.
          </p>
          
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div 
                key={faq.id} 
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 focus:outline-none"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-gray-500 transition-transform ${openId === faq.id ? 'transform rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openId === faq.id && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Have More Questions?</h2>
            <p className="text-gray-700 mb-6">
              Our documentation covers many technical topics in depth. You can also join our community channels
              where our team and other community members can help answer your questions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/docs" 
                className="bg-[#0090FF] text-white py-2 px-6 rounded-md hover:bg-opacity-80 transition-colors"
              >
                Read the Docs
              </Link>
              <a 
                href="https://t.me/+MznFxMPcIhM3ZDI1" 
                className="bg-white text-[#0090FF] border border-[#0090FF] py-2 px-6 rounded-md hover:bg-[#0090FF] hover:bg-opacity-10 transition-colors"
              >
                Join our Community
              </a>
            </div>
          </div>
        </div>
      </div>
  );
} 