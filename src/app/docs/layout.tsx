import React from 'react';
import DocsSidebar from '@/components/DocsSidebar';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-#0090FF">
      <div className="flex flex-col md:flex-row">
        <DocsSidebar />
        <main className="flex-1 px-4 sm:px-6 py-6 sm:py-8 overflow-x-hidden">
          {children}
        </main>
        {/* Remove TableOfContents from layout since it needs content prop */}
      </div>
    </div>
  );
}