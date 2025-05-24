import React from 'react';
import { getDocContent, getAllDocs } from '@/lib/docs';
import MDXContent from '@/components/MDXContent';
import TableOfContents from '@/components/TableOfContents';

interface DocsPageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate the data every hour

export async function generateStaticParams() {
  const slugs = getAllDocs();
  return slugs.map((slug) => ({ slug }));
}

export default async function DocsPage({ params }: DocsPageProps) {
  const { slug } = await params;
  const content = await getDocContent(slug);
  
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