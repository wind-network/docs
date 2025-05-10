import React from 'react';
import { getBlogPostContent, getAllBlogPosts } from '@/lib/blog';
import MDXContent from '@/components/MDXContent';
import Link from 'next/link';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const content = await getBlogPostContent(slug);
  
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12 max-w-4xl">
      <div className="mb-4 sm:mb-6">
        <Link href="/blog" className="text-[#0090FF] hover:underline text-xs sm:text-sm flex items-center">
          <span className="mr-1">←</span> Back to all posts
        </Link>
      </div>
      
      <article className="bg-white rounded-lg shadow-sm p-4 sm:p-6 md:p-8 overflow-hidden">
        <MDXContent content={content} />
      </article>
    </div>
  );
} 