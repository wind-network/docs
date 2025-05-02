'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Define the sidebar items
const sidebarItems = [
  { title: 'Introduction', href: '/docs' },
  { title: 'Architecture', href: '/docs/architecture' },
  { title: 'Installation', href: '/docs/installation' },
  { title: 'API Reference', href: '/docs/api-reference' },
  { title: 'Examples', href: '/docs/examples' },
];

export default function DocsSidebar() {
  const pathname = usePathname();
  
  return (
    <div className="h-screen overflow-hidden lg:block w-64 border-r h-screen border-gray-200">
      <div className="flex flex-col p-4">
        <h2 className="text-lg font-bold mb-4">Documentation</h2>
        <Link className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50" href="/">Home</Link>
        <nav className="space-y-1">
          {sidebarItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              className={`block px-3 py-2 text-sm ${
                pathname === item.href
                  ? 'bg-gray-100 text-blue-600 font-medium'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
} 