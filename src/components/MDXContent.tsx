import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MDXContentProps {
  content: string;
}

export default function MDXContent({ content }: MDXContentProps) {
  return (
    <div className="prose max-w-none prose-gray">
      <ReactMarkdown
        components={{
          h1: ({ ...props }) => (
            <h1 className="text-3xl text-[#0090FF] font-bold mb-6 border-b pb-2 border-gray-200" {...props} />
          ),
          h2: ({ ...props }) => {
            const id = props.children?.toString().toLowerCase().replace(/\s+/g, '-');
            return <h2 className="text-2xl text-black font-bold mt-8 mb-4" id={id as string} {...props} />;
          },
          h3: ({ ...props }) => {
            const id = props.children?.toString().toLowerCase().replace(/\s+/g, '-');
            return <h3 className="text-xl text-black font-bold mt-6 mb-3" id={id as string} {...props} />;
          },
          p: ({ ...props }) => <p className="mb-4 text-black" {...props} />,
          h4: ({ ...props }) => <h4 className="ext-black" {...props} />,
          ul: ({ ...props }) => <ul className="list-disc pl-6 text-black mb-4" {...props} />,
          ol: ({ ...props }) => <ol className="list-decimal text-black pl-6 mb-4" {...props} />,
          li: ({ ...props }) => <li className="mb-1 text-black" {...props} />,
          a: ({ ...props }) => (
            <a className="text-blue-600 hover:underline" {...props} />
          ),
          blockquote: ({ ...props }) => (
            <blockquote className="border-l-4 text-black border-gray-300 pl-4 italic my-4" {...props} />
          ),
          table: ({ ...props }) => (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y text-black divide-gray-300 my-4" {...props} />
            </div>
          ),
          thead: ({ ...props }) => <thead className="bg-gray-100 text-black" {...props} />,
          tbody: ({ ...props }) => <tbody className="divide-y text-black divide-gray-200" {...props} />,
          tr: ({ ...props }) => <tr {...props} />,
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
              return (
                <pre className="bg-gray-800 text-white p-4 overflow-x-auto my-4">
                  <code {...props}>{children}</code>
                </pre>
              );
            }
            
            return (
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm" {...props}>
                {children}
              </code>
            );
          },
          pre: ({ ...props }) => (
            <div className="overflow-auto my-4">
              <pre {...props} />
            </div>
          ),
          hr: () => <hr className="my-8 border-gray-200" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
} 