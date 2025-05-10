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
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <Link href="/blog" className="text-[#0090FF] hover:underline text-sm">
          ← Back to all posts
        </Link>
      </div>
      
      <article className="bg-white rounded-lg shadow-sm p-6 md:p-8">
        <MDXContent content={content} />
      </article>
    </div>
  );
} 