import React from 'react';
import DocsSidebar from '@/components/DocsSidebar';
import TableOfContents from '@/components/TableOfContents';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-#0090FF">
      <div className="flex">
        <DocsSidebar />
        <main className="flex-1 px-6 py-8">
          
          {children}
        </main>
        <TableOfContents />
      </div>
    </div>
  );
} 