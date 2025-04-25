import { cn } from '@/lib/cn';
import { BrainCircuitIcon, ChartBarIcon, BarChart4Icon, DatabaseIcon, LayersIcon, NetworkIcon, ServerIcon, ShieldIcon, ZapIcon } from 'lucide-react';
import type { LinkProps } from 'next/link';
import Link from 'next/link';

export default function DocsPage(): React.ReactElement {
  return (
    <main className="container flex flex-col py-16">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold md:text-5xl mb-4">Wind Network</h1>
        <p className="text-2xl text-fd-muted-foreground mb-8 max-w-3xl mx-auto">
          Data Indexing Infrastructure for <span className="text-gradient">Solana</span> dApps and <span className="text-gradient">AI</span> Applications
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <span className="bg-blue-100 dark:bg-blue-900 py-1 px-3 rounded-full text-sm font-medium">Decentralized Indexing</span>
          <span className="bg-green-100 dark:bg-green-900 py-1 px-3 rounded-full text-sm font-medium">AI Ready Data</span>
          <span className="bg-purple-100 dark:bg-purple-900 py-1 px-3 rounded-full text-sm font-medium">Real-time Streams</span>
          <span className="bg-amber-100 dark:bg-amber-900 py-1 px-3 rounded-full text-sm font-medium">Jito Restaking</span>
        </div>
        <p className="text-fd-muted-foreground max-w-2xl mx-auto mb-8">
          Wind Network is a decentralized data infrastructure that indexes and stores Solana blockchain data in formats optimized for AI applications, enabling LLMs to train on and analyze on-chain data.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/docs/getting-started" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors">
            Get Started
          </Link>
          <Link href="/docs/getting-started" className="border border-border hover:bg-fd-accent/50 font-medium py-2 px-6 rounded-lg transition-colors">
            API Reference
          </Link>
        </div>
      </div>

      {/* AI Enablement Callout */}
      <div className="mb-16 p-8 border border-border rounded-xl bg-gradient-to-r from-blue-50/20 to-purple-50/20 dark:from-blue-950/20 dark:to-purple-950/20">
        <h2 className="text-2xl font-semibold mb-4 text-center">Enabling AI Applications on Solana</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-3">
              <BrainCircuitIcon className="size-6" />
            </div>
            <h3 className="font-medium mb-2">LLM Training Data</h3>
            <p className="text-sm text-fd-muted-foreground">Structured data format ideal for training large language models</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full mb-3">
              <ChartBarIcon className="size-6" />
            </div>
            <h3 className="font-medium mb-2">Analytics Engine</h3>
            <p className="text-sm text-fd-muted-foreground">Data infrastructure for building analytics applications</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full mb-3">
              <DatabaseIcon className="size-6" />
            </div>
            <h3 className="font-medium mb-2">Optimized Storage</h3>
            <p className="text-sm text-fd-muted-foreground">Data structures designed for efficient AI model consumption</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-amber-100 dark:bg-amber-900 rounded-full mb-3">
              <BarChart4Icon className="size-6" />
            </div>
            <h3 className="font-medium mb-2">Data Pipelines</h3>
            <p className="text-sm text-fd-muted-foreground">Streamlined data flows for AI application development</p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <h2 className="text-2xl font-semibold md:text-3xl mb-8 text-center">Unlock the Full Potential of Solana Data</h2>
      <div className="grid grid-cols-1 gap-6 text-left md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Item href="/docs/getting-started">
          <Icon className="bg-blue-100 dark:bg-blue-950">
            <NetworkIcon className="size-full" />
          </Icon>
          <h2 className="mb-2 text-lg font-semibold">Decentralized Architecture</h2>
          <p className="text-sm text-fd-muted-foreground">
            Resilient, censorship-resistant network of nodes for reliable indexing at scale
          </p>
        </Item>

        <Item href="/docs/getting-started">
          <Icon className="bg-green-100 dark:bg-green-950">
            <BrainCircuitIcon className="size-full" />
          </Icon>
          <h2 className="mb-2 text-lg font-semibold">AI-Ready Data</h2>
          <p className="text-sm text-fd-muted-foreground">
            Structured blockchain data optimized for machine learning and AI applications
          </p>
        </Item>

        <Item href="/docs/getting-started">
          <Icon className="bg-purple-100 dark:bg-purple-950">
            <ZapIcon className="size-full" />
          </Icon>
          <h2 className="mb-2 text-lg font-semibold">Real-time Data Streams</h2>
          <p className="text-sm text-fd-muted-foreground">
            High-performance WebSocket API for instant updates and notifications
          </p>
        </Item>

        <Item href="/docs/getting-started">
          <Icon className="bg-green-100 dark:bg-green-950">
            <ServerIcon className="size-full" />
          </Icon>
          <h2 className="mb-2 text-lg font-semibold">Comprehensive API</h2>
          <p className="text-sm text-fd-muted-foreground">
            Rich query capabilities for accounts, transactions, tokens, and programs
          </p>
        </Item>

        <Item href="/docs/getting-started">
          <Icon className="bg-purple-100 dark:bg-purple-950">
            <LayersIcon className="size-full" />
          </Icon>
          <h2 className="mb-2 text-lg font-semibold">Developer-friendly SDK</h2>
          <p className="text-sm text-fd-muted-foreground">
            Easy integration with your Solana applications and data pipelines
          </p>
        </Item>

        <Item href="/docs/getting-started">
          <Icon className="bg-amber-100 dark:bg-amber-950">
            <ShieldIcon className="size-full" />
          </Icon>
          <h2 className="mb-2 text-lg font-semibold">Enterprise-grade Security</h2>
          <p className="text-sm text-fd-muted-foreground">
            Secured by Jito restaking with economic guarantees for data integrity
          </p>
        </Item>
      </div>
      
      {/* Call to Action */}
      <div className="text-center mt-8">
        <h2 className="text-2xl font-semibold mb-4">Ready to Build AI Applications on Solana?</h2>
        <Link 
          href="/docs/getting-started" 
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-colors"
        >
          Start Building Now
        </Link>
      </div>
    </main>
  );
}

function Icon({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <div
      className={cn(
        'mb-2 size-9 rounded-lg border p-1.5 shadow-fd-primary/30',
        className,
      )}
      style={{
        boxShadow: 'inset 0px 8px 8px 0px var(--tw-shadow-color)',
      }}
    >
      {children}
    </div>
  );
}

function Item(
  props: LinkProps & { className?: string; children: React.ReactNode },
): React.ReactElement {
  return (
    <Link
      {...props}
      className={cn(
        'rounded-lg border border-border p-6 shadow-xs transition-all hover:bg-fd-accent bg-fd-accent/30',
        props.className,
      )}
    >
      {props.children}
    </Link>
  );
}
