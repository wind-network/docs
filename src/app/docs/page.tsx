import React from 'react';
import { getDocContent } from '@/lib/docs';
import MDXContent from '@/components/MDXContent';

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate the data every hour

export default async function DocsPage() {
  const content = await getDocContent('introduction');
  
  return <MDXContent content={content} />;
} 