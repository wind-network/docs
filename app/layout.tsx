import { baseUrl, createMetadata } from '@/lib/metadata';
import '@/styles/globals.css';
import type { Viewport } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { Body } from './layout.client';
import { Providers } from './providers';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = createMetadata({
  title: {
    template: '%s | Wind Network',
    default: 'Wind Network',
  },
  description: 'A decentralized Solana indexer powered by libp2p and Jito restaking',
  metadataBase: baseUrl,
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#fff' },
  ],
};

// Inline styles to ensure basic styling works regardless of CSS loading
const globalStyles = `
  :root {
    --solana-gradient-from: #9945FF;
    --solana-gradient-to: #14F195;
  }
  
  body {
    background-color: #0A0A0A;
    color: #fff;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }
  
  .container {
    width: 100%;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  @media (min-width: 1536px) {
    .container {
      max-width: 1400px;
    }
  }
  
  .text-gradient {
    background: linear-gradient(90deg, var(--solana-gradient-from), var(--solana-gradient-to));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: bold;
  }
  
  h1, h2, h3, h4 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  
  .rounded-lg {
    border-radius: 0.5rem;
  }
  
  .border {
    border: 1px solid #333;
  }
  
  .bg-blue-500 {
    background-color: #3b82f6;
  }
  
  .hover\\:bg-blue-600:hover {
    background-color: #2563eb;
  }
  
  .text-white {
    color: white;
  }
`;

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.className} dark`}
      suppressHydrationWarning
    >
      <head>
        <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
        <link rel="stylesheet" href="/fallback.css" />
      </head>
      <Body>
        <Providers>{children}</Providers>
      </Body>
    </html>
  );
}
