import Link from 'next/link';
import React from 'react';


export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-#0090FF">
    <div className="flex">
      <main className="flex-1 px-6 py-8">
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
        {children}
      </main>
    </div>
  </div>
  );
} 