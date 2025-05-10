import React from 'react';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export default function BlogPage() {
  const posts = getAllBlogPosts();
  
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 max-w-5xl min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-[#0090FF] mb-4 sm:mb-6 md:mb-8">Blog</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {posts.map((post) => (
          <div key={post.slug} className="border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
            <Link href={`/blog/${post.slug}`} className="block">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
            </Link>
            <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">{post.date}</p>
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">{post.excerpt}</p>
            <Link 
              href={`/blog/${post.slug}`}
              className="text-[#0090FF] hover:underline font-medium text-xs sm:text-sm inline-block"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-8 sm:py-12">
          <p className="text-gray-600 text-sm sm:text-base">No blog posts available.</p>
        </div>
      )}
    </div>
  );
} 