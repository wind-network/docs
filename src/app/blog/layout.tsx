import Link from 'next/link';
import React from 'react';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-#0090FF">
      <div className="flex flex-col">
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
        <main className="flex-1 px-3 sm:px-6 pt-14 sm:pt-16">
          {children}
        </main>
      </div>
    </div>
  );
} 