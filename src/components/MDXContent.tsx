'use client';

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface MDXContentProps {
  content: string;
}

// Separate client component for the copy button functionality
const CodeBlock = ({ language, children }: { language: string, children: React.ReactNode }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    const code = children?.toString() || '';
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className="relative group rounded-lg my-6">
      <div className="absolute top-0 right-0 bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded-tr-lg rounded-bl-lg font-mono">
        {language}
      </div>
      <pre className="bg-gray-800 text-gray-100 p-4 pt-8 rounded-lg overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        <code className="font-mono text-sm">
          {children}
        </code>
      </pre>
      <button 
        className="absolute top-2 right-12 bg-gray-700 text-gray-200 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
        title={copied ? "Copied!" : "Copy to clipboard"}
        onClick={handleCopy}
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

export default function MDXContent({ content }: MDXContentProps) {
  return (
    <div className="prose max-w-none prose-gray">
      <ReactMarkdown
        components={{
          h1: ({ ...props }) => (
            <h1 className="text-2xl sm:text-3xl text-[#0090FF] font-bold mb-4 sm:mb-6 border-b pb-2 border-gray-200" {...props} />
          ),
          h2: ({ ...props }) => {
            const id = props.children?.toString().toLowerCase().replace(/\s+/g, '-');
            return <h2 className="text-xl sm:text-2xl text-black font-bold mt-6 sm:mt-8 mb-3 sm:mb-4" id={id as string} {...props} />;
          },
          h3: ({ ...props }) => {
            const id = props.children?.toString().toLowerCase().replace(/\s+/g, '-');
            return <h3 className="text-lg sm:text-xl text-black font-bold mt-5 sm:mt-6 mb-2 sm:mb-3" id={id as string} {...props} />;
          },
          p: ({ ...props }) => <p className="mb-3 sm:mb-4 text-black text-sm sm:text-base" {...props} />,
          h4: ({ ...props }) => <h4 className="text-black font-semibold text-base sm:text-lg" {...props} />,
          ul: ({ ...props }) => <ul className="list-disc pl-5 sm:pl-6 text-black mb-3 sm:mb-4 text-sm sm:text-base" {...props} />,
          ol: ({ ...props }) => <ol className="list-decimal text-black pl-5 sm:pl-6 mb-3 sm:mb-4 text-sm sm:text-base" {...props} />,
          li: ({ ...props }) => <li className="mb-1 text-black text-sm sm:text-base" {...props} />,
          a: ({ ...props }) => (
            <a className="text-[#0090FF] hover:underline text-sm sm:text-base" {...props} />
          ),
          blockquote: ({ ...props }) => (
            <blockquote className="border-l-4 text-black border-gray-300 pl-3 sm:pl-4 italic my-3 sm:my-4 text-sm sm:text-base bg-gray-50 py-2 rounded-r" {...props} />
          ),
          table: ({ ...props }) => (
            <div className="overflow-x-auto -mx-4 sm:mx-0 my-6 border rounded shadow-sm">
              <table className="min-w-full divide-y text-black divide-gray-300 my-0" {...props} />
            </div>
          ),
          thead: ({ ...props }) => <thead className="bg-gray-100 text-black" {...props} />,
          tbody: ({ ...props }) => <tbody className="divide-y text-black divide-gray-200 bg-white" {...props} />,
          tr: ({ ...props }) => <tr className="hover:bg-gray-50" {...props} />,
          th: ({ ...props }) => (
            <th
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              {...props}
            />
          ),
          td: ({ ...props }) => (
            <td className="px-3 py-4 text-sm text-gray-500" {...props} />
          ),
          code: ({ className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            
            if (match) {
              const language = match[1];
              return <CodeBlock language={language}>{children}</CodeBlock>;
            }
            
            return (
              <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm text-[#0090FF] font-mono" {...props}>
                {children}
              </code>
            );
          },
          pre: ({ ...props }) => (
            <div className="my-0">
              <pre className="m-0 p-0 bg-transparent" {...props} />
            </div>
          ),
          hr: () => <hr className="my-6 sm:my-8 border-gray-200" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
} 