'use client'

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface TocItem {
  id: string;
  text: string;
  level: number;
  uniqueKey?: string;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Extract headings from the document
  useEffect(() => {
    const extractHeadings = () => {
      const elements = Array.from(document.querySelectorAll('h2, h3'));
      
      const idCounts: {[key: string]: number} = {};
      const textSeen: Set<string> = new Set();
      
      // First pass to collect all the headings
      const rawItems = elements.map((element) => {
        const id = element.id;
        const text = element.textContent || '';
        
        idCounts[id] = (idCounts[id] || 0) + 1;
        
        const uniqueKey = idCounts[id] > 1 ? `${id}-${idCounts[id]}` : id;
        
        return {
          id,
          text,
          level: Number(element.tagName.substring(1)),
          uniqueKey,
        };
      });
      
      // Second pass to filter out duplicate entries by text
      const filteredItems = rawItems.filter(item => {
        // Skip entries with "Documentation" if we've seen it before
        if (item.text.trim() === "Documentation") {
          if (textSeen.has(item.text.trim())) {
            return false;
          }
        }
        
        textSeen.add(item.text.trim());
        return true;
      });
      
      setHeadings(filteredItems);
    };

    extractHeadings();
    
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
      
      const found = headingElements.find((heading) => {
        const rect = heading.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= 200;
      });
      
      if (found) {
        setActiveId(found.id);
      } else if (headingElements.length > 0 && window.scrollY < 200) {
        setActiveId(headingElements[0].id);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headings]);

  // Close mobile menu when clicking a link
  const handleLinkClick = (headingId: string) => {
    document.querySelector(`#${headingId}`)?.scrollIntoView({
      behavior: 'smooth',
    });
    setActiveId(headingId);
    setIsMobileMenuOpen(false);
  };

  if (headings.length === 0) {
    return null;
  }

  const tocContent = (
    <nav className="space-y-1">
      {headings.map((heading) => (
        <a
          key={heading.uniqueKey || `${heading.id}-${heading.text}`}
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
            handleLinkClick(heading.id);
          }}
        >
          {heading.text}
        </a>
      ))}
    </nav>
  );

  return (
    <>
      {/* Desktop sidebar - only visible on large screens */}
      <div className="w-56 hidden lg:block">
        <div className="sticky top-16 pl-4 pt-4">
          <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-3">
            On this page
          </h4>
          {tocContent}
        </div>
      </div>

      {/* Mobile floating button - only visible on smaller screens */}
      <div className="fixed bottom-6 right-6 lg:hidden z-30">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-white text-gray-700 w-12 h-12 rounded-full shadow-lg flex items-center justify-center border border-gray-200"
          aria-label="Table of contents"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </button>
      </div>

      {/* Mobile TOC menu - only visible when activated */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden overflow-hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu content */}
          <div className="absolute right-0 top-0 bottom-0 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-between items-center p-4 border-b">
              <h4 className="font-medium">On this page</h4>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              {tocContent}
            </div>
          </div>
        </div>
      )}
    </>
  );
} 