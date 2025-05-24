'use client';

import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import mermaid from 'mermaid';

interface MDXContentProps {
  content: string;
}

// Initialize Mermaid with proper configuration
if (typeof window !== 'undefined') {
  mermaid.initialize({
    startOnLoad: true,
    theme: 'default',
    securityLevel: 'loose',
    fontFamily: 'inherit',
    flowchart: {
      useMaxWidth: true,
      htmlLabels: true,
    },
  });
}

// Define proper type for mermaid render result
interface MermaidRenderResult {
  svg: string;
}

// Mermaid component with proper error handling
const MermaidChart = ({ chart }: { chart: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (ref.current && chart) {
      const renderChart = async () => {
        try {
          setIsLoading(true);
          const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
          
          // Handle both old and new mermaid API versions
          const result = await mermaid.render(id, chart);
          let svgContent: string;
          
          if (typeof result === 'string') {
            svgContent = result;
          } else if (result && typeof result === 'object' && 'svg' in result) {
            svgContent = (result as MermaidRenderResult).svg;
          } else {
            throw new Error('Invalid mermaid render result');
          }
          
          setSvg(svgContent);
        } catch (error) {
          console.error('Mermaid rendering error:', error);
          setSvg(`
            <div class="text-red-500 p-4 border border-red-300 rounded bg-red-50">
              <p class="font-semibold">Error rendering diagram</p>
              <p class="text-sm mt-1">Please check the mermaid syntax</p>
            </div>
          `);
        } finally {
          setIsLoading(false);
        }
      };
      
      renderChart();
    }
  }, [chart]);

  if (isLoading) {
    return (
      <div className="mermaid-container my-6 flex justify-center">
        <div className="text-gray-500 p-4">Loading diagram...</div>
      </div>
    );
  }

  return (
    <div 
      ref={ref} 
      className="mermaid-container my-6 flex justify-center"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

// Enhanced code block component with copy functionality
const CodeBlock = ({ language, children }: { language: string, children: React.ReactNode }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = async () => {
    const code = children?.toString() || '';
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Handle mermaid diagrams
  if (language === 'mermaid') {
    const chart = children?.toString() || '';
    return <MermaidChart chart={chart} />;
  }

  return (
    <div className="relative group rounded-lg my-6">
      <div className="absolute top-0 right-0 bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded-tr-lg rounded-bl-lg font-mono z-10">
        {language}
      </div>
      <pre className="bg-gray-800 text-gray-100 p-4 pt-8 rounded-lg overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        <code className="font-mono text-sm whitespace-pre-wrap">
          {children}
        </code>
      </pre>
      <button 
        className="absolute top-2 right-12 bg-gray-700 hover:bg-gray-600 text-gray-200 p-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-200 z-10"
        title={copied ? "Copied!" : "Copy to clipboard"}
        onClick={handleCopy}
        type="button"
      >
        {copied ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
        )}
      </button>
    </div>
  );
};

// Utility function to generate clean IDs for headings
const generateId = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim()
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
};

export default function MDXContent({ content }: MDXContentProps) {
  return (
    <div className="prose max-w-none prose-gray">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Heading components with proper ID generation
          h1: ({ children, ...props }) => {
            const id = generateId(children?.toString() || '');
            return (
              <h1 
                className="text-2xl sm:text-3xl text-[#0090FF] font-bold mb-4 sm:mb-6 border-b pb-2 border-gray-200" 
                id={id}
                {...props}
              >
                {children}
              </h1>
            );
          },
          h2: ({ children, ...props }) => {
            const id = generateId(children?.toString() || '');
            return (
              <h2 
                className="text-xl sm:text-2xl text-black font-bold mt-6 sm:mt-8 mb-3 sm:mb-4" 
                id={id}
                {...props}
              >
                {children}
              </h2>
            );
          },
          h3: ({ children, ...props }) => {
            const id = generateId(children?.toString() || '');
            return (
              <h3 
                className="text-lg sm:text-xl text-black font-bold mt-5 sm:mt-6 mb-2 sm:mb-3" 
                id={id}
                {...props}
              >
                {children}
              </h3>
            );
          },
          h4: ({ children, ...props }) => {
            const id = generateId(children?.toString() || '');
            return (
              <h4 
                className="text-black font-semibold text-base sm:text-lg mt-4 mb-2" 
                id={id}
                {...props}
              >
                {children}
              </h4>
            );
          },
          h5: ({ children, ...props }) => {
            const id = generateId(children?.toString() || '');
            return (
              <h5 
                className="text-black font-semibold text-sm sm:text-base mt-3 mb-2" 
                id={id}
                {...props}
              >
                {children}
              </h5>
            );
          },
          h6: ({ children, ...props }) => {
            const id = generateId(children?.toString() || '');
            return (
              <h6 
                className="text-black font-semibold text-sm mt-3 mb-2" 
                id={id}
                {...props}
              >
                {children}
              </h6>
            );
          },

          // Text components
          p: ({ ...props }) => (
            <p className="mb-3 sm:mb-4 text-black text-sm sm:text-base leading-relaxed" {...props} />
          ),
          
          // List components
          ul: ({ ...props }) => (
            <ul className="list-disc pl-5 sm:pl-6 text-black mb-3 sm:mb-4 text-sm sm:text-base space-y-1" {...props} />
          ),
          ol: ({ ...props }) => (
            <ol className="list-decimal text-black pl-5 sm:pl-6 mb-3 sm:mb-4 text-sm sm:text-base space-y-1" {...props} />
          ),
          li: ({ ...props }) => (
            <li className="text-black text-sm sm:text-base leading-relaxed" {...props} />
          ),

          // Link component
          a: ({ href, children, ...props }) => (
            <a 
              href={href}
              className="text-[#0090FF] hover:underline text-sm sm:text-base font-medium transition-colors duration-200" 
              target={href?.startsWith('http') ? '_blank' : undefined}
              rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              {...props}
            >
              {children}
            </a>
          ),

          // Quote component
          blockquote: ({ ...props }) => (
            <blockquote className="border-l-4 text-black border-gray-300 pl-3 sm:pl-4 italic my-3 sm:my-4 text-sm sm:text-base bg-gray-50 py-2 rounded-r" {...props} />
          ),

          // Table components with enhanced styling
          table: ({ ...props }) => (
            <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg shadow-sm">
              <table className="min-w-full divide-y divide-gray-200" {...props} />
            </div>
          ),
          thead: ({ ...props }) => (
            <thead className="bg-gray-50" {...props} />
          ),
          tbody: ({ ...props }) => (
            <tbody className="bg-white divide-y divide-gray-200" {...props} />
          ),
          tr: ({ ...props }) => (
            <tr className="hover:bg-gray-50 transition-colors duration-150" {...props} />
          ),
          th: ({ ...props }) => (
            <th className="px-4 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200" {...props} />
          ),
          td: ({ ...props }) => (
            <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-100" {...props} />
          ),

          // Code components
          code: ({ className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            
            if (match) {
              const language = match[1];
              return <CodeBlock language={language}>{children}</CodeBlock>;
            }
            
            return (
              <code 
                className="bg-gray-100 px-2 py-1 rounded text-sm text-[#0090FF] font-mono border inline-block"
                {...props}
              >
                {children}
              </code>
            );
          },
          pre: ({ ...props }) => (
            <div className="my-0">
              <pre className="m-0 p-0 bg-transparent" {...props} />
            </div>
          ),

          // Horizontal rule
          hr: () => <hr className="my-6 sm:my-8 border-gray-200" />,

          // Text formatting
          strong: ({ ...props }) => (
            <strong className="font-bold text-black" {...props} />
          ),
          em: ({ ...props }) => (
            <em className="italic text-black" {...props} />
          ),
          del: ({ ...props }) => (
            <del className="line-through text-gray-500" {...props} />
          ),

          // Image component with Next.js Image optimization
          img: ({ src, alt, title, ...props }) => {
            if (!src || typeof src !== 'string') {
              return null;
            }
            
            // Handle external URLs vs local images
            const isExternal = src.startsWith('http') || src.startsWith('//');
            
            if (isExternal) {
              // For external images, use regular img tag with proper handling
              return (
                <div className="my-4 text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={src}
                    alt={alt || ''}
                    title={title}
                    className="max-w-full h-auto rounded-lg shadow-md mx-auto"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      console.error('Failed to load image:', src);
                    }}
                    {...props}
                  />
                  {(alt || title) && (
                    <p className="text-sm text-gray-600 mt-2 italic">
                      {alt || title}
                    </p>
                  )}
                </div>
              );
            }
            
            // For local images, use Next.js Image component
            return (
              <div className="my-4 text-center">
                <Image
                  src={src}
                  alt={alt || ''}
                  title={title}
                  width={800}
                  height={400}
                  className="max-w-full h-auto rounded-lg shadow-md mx-auto"
                  style={{ width: 'auto', height: 'auto' }}
                  onError={() => {
                    console.error('Failed to load image:', src);
                  }}
                />
                {(alt || title) && (
                  <p className="text-sm text-gray-600 mt-2 italic">
                    {alt || title}
                  </p>
                )}
              </div>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}