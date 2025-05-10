import fs from 'fs';
import path from 'path';

// Base path for blog files
const blogDirectory = path.join(process.cwd(), 'src/content/blog');

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  excerpt: string;
}

// Get the content of a blog post
export async function getBlogPostContent(slug?: string): Promise<string> {
  try {
    const targetSlug = slug || 'getting-started';
    const fullPath = path.join(blogDirectory, `${targetSlug}.md`);
    
    if (fs.existsSync(fullPath)) {
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      return fileContents;
    } else {
      console.warn(`Blog post not found: ${fullPath}`);
      return '# 404 - Blog Post Not Found\n\nSorry, the requested blog post could not be found.';
    }
  } catch (error) {
    console.error('Error reading blog post:', error);
    return '# Error\n\nThere was an error loading this blog post.';
  }
}

// Get all available blog posts with metadata
export function getAllBlogPosts(): BlogPost[] {
  try {
    const fileNames = fs.readdirSync(blogDirectory);
    const allPostsData = fileNames
      .filter(filename => filename.endsWith('.md'))
      .map(filename => {
        // Remove ".md" from file name to get slug
        const slug = filename.replace(/\.md$/, '');
        
        // Read markdown file as string
        const fullPath = path.join(blogDirectory, filename);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        // Extract metadata from markdown content
        const title = extractTitle(fileContents) || slug;
        const date = extractDate(fileContents) || 'Unknown date';
        const excerpt = extractExcerpt(fileContents);
        
        return {
          slug,
          title,
          date,
          content: fileContents,
          excerpt
        };
      });
      
    // Sort posts by date
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (error) {
    console.error('Error reading blog directory:', error);
    return [];
  }
}

// Helper function to extract title from markdown content
function extractTitle(content: string): string | null {
  const titleMatch = content.match(/^# (.*?)$/m);
  return titleMatch ? titleMatch[1] : null;
}

// Helper function to extract date from markdown content
function extractDate(content: string): string | null {
  const dateMatch = content.match(/\*Published on (.*?)\*/);
  return dateMatch ? dateMatch[1] : null;
}

// Helper function to extract excerpt from markdown content
function extractExcerpt(content: string, maxLength = 150): string {
  // Remove title and date
  const contentWithoutTitle = content.replace(/^# .*$/m, '').replace(/\*Published on .*?\*/m, '');
  
  // Get first paragraph
  const paragraphMatch = contentWithoutTitle.match(/[^\n]+/);
  if (!paragraphMatch) return '';
  
  let excerpt = paragraphMatch[0].trim();
  
  // Truncate if needed
  if (excerpt.length > maxLength) {
    excerpt = excerpt.substring(0, maxLength) + '...';
  }
  
  return excerpt;
} 