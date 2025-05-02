'use client'

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const pathname = usePathname();

  // Extract headings from the document
  useEffect(() => {
    const extractHeadings = () => {
      const elements = Array.from(document.querySelectorAll('h2, h3')).map((element) => ({
        id: element.id,
        text: element.textContent || '',
        level: Number(element.tagName.substring(1)),
      }));
      
      setHeadings(elements);
    };

    extractHeadings();
    
    // Re-extract headings when content changes
    const observer = new MutationObserver(extractHeadings);
    observer.observe(document.querySelector('main') || document.body, {
      childList: true,
      subtree: true,
    });
    
    return () => observer.disconnect();
  }, [pathname]);

  // Track the active heading based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const headingElements = Array.from(document.querySelectorAll('h2, h3'));
      
      // Find the heading that is currently at the top of the viewport
      const found = headingElements.find((heading) => {
        const rect = heading.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= 200;
      });
      
      if (found) {
        setActiveId(found.id);
      } else if (headingElements.length > 0 && window.scrollY < 200) {
        // If we're at the top of the page, select the first heading
        setActiveId(headingElements[0].id);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call once on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="w-56 hidden lg:block">
      <div className="sticky top-16 pl-4 pt-4">
        <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-3">
          On this page
        </h4>
        <nav className="space-y-1">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={`block text-sm py-1 ${
                heading.level === 3 ? 'pl-4' : ''
              } ${
                activeId === heading.id
                  ? 'text-blue-600 font-medium'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(`#${heading.id}`)?.scrollIntoView({
                  behavior: 'smooth',
                });
                setActiveId(heading.id);
              }}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
} 