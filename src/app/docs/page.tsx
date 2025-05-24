import React from 'react';
import { getDocContent } from '@/lib/docs';
import MDXContent from '@/components/MDXContent';
import TableOfContents from '@/components/TableOfContents';

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate the data every hour

export default async function DocsPage() {
  const content = await getDocContent('introduction');
  
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1">
        <MDXContent content={content} />
      </div>
      {/* Remove the content prop since TableOfContents doesn't accept it */}
      <div className="hidden lg:block lg:w-64 xl:w-72">
        <TableOfContents />
      </div>
    </div>
  );
}