import React from 'react';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export default function BlogPage() {
  const posts = getAllBlogPosts();
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-3xl font-bold text-[#0090FF] mb-8">Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div key={post.slug} className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
            </Link>
            <p className="text-sm text-gray-500 mb-3">{post.date}</p>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <Link 
              href={`/blog/${post.slug}`}
              className="text-[#0090FF] hover:underline font-medium text-sm"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No blog posts available.</p>
        </div>
      )}
    </div>
  );
} 