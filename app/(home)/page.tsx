import { cn } from '@/lib/cn';
import { BrainCircuitIcon, ChartBarIcon, BarChart4Icon, DatabaseIcon, LayersIcon, NetworkIcon, ServerIcon, ShieldIcon, ZapIcon } from 'lucide-react';
import type { LinkProps } from 'next/link';
import Link from 'next/link';

// Direct styles as a fallback in case Tailwind/CSS doesn't load properly
const styles = {
  container: {
    width: '100%',
    maxWidth: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    display: 'flex',
    flexDirection: 'column' as const,
    paddingTop: '4rem',
    paddingBottom: '4rem',
  },
  headerSection: {
    marginBottom: '4rem',
    textAlign: 'center' as const,
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    maxWidth: '48rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'rgba(255,255,255,0.8)',
  },
  tagContainer: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '1rem',
    justifyContent: 'center',
    marginBottom: '2rem',
  },
  tag: {
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: 500,
  },
  blueTag: {
    backgroundColor: 'rgba(59, 130, 246, 0.2)',
  },
  greenTag: {
    backgroundColor: 'rgba(34, 197, 94, 0.2)',
  },
  purpleTag: {
    backgroundColor: 'rgba(168, 85, 247, 0.2)',
  },
  amberTag: {
    backgroundColor: 'rgba(251, 191, 36, 0.2)',
  },
  buttonContainer: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#3b82f6',
    color: 'white',
    fontWeight: 500,
    padding: '0.5rem 1.5rem',
    borderRadius: '0.5rem',
    transition: 'background-color 0.15s',
  },
  secondaryButton: {
    border: '1px solid #333',
    fontWeight: 500,
    padding: '0.5rem 1.5rem',
    borderRadius: '0.5rem',
    transition: 'background-color 0.15s',
  },
  featureSection: {
    padding: '2rem',
    border: '1px solid #333',
    borderRadius: '0.75rem',
    marginBottom: '4rem',
    background: 'linear-gradient(to right, rgba(59, 130, 246, 0.05), rgba(168, 85, 247, 0.05))'
  },
  featureTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: '1rem',
    textAlign: 'center' as const,
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginTop: '1.5rem',
  },
  featureItem: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    textAlign: 'center' as const,
  },
  featureIcon: {
    padding: '0.75rem',
    borderRadius: '9999px',
    marginBottom: '0.75rem',
  },
  featureItemTitle: {
    fontWeight: 500,
    marginBottom: '0.5rem',
  },
  featureItemText: {
    fontSize: '0.875rem',
    color: 'rgba(255,255,255,0.7)',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1.5rem',
    marginBottom: '3rem',
  },
  card: {
    borderRadius: '0.5rem',
    border: '1px solid #333',
    padding: '1.5rem',
    transition: 'all 0.15s',
    background: 'rgba(123, 123, 255, 0.03)',
  },
  cardIcon: {
    marginBottom: '0.5rem',
    width: '2.25rem',
    height: '2.25rem',
    borderRadius: '0.5rem',
    border: '1px solid #333',
    padding: '0.375rem',
    boxShadow: 'inset 0px 8px 8px 0px rgba(123, 123, 255, 0.3)',
  },
  cardTitle: {
    marginBottom: '0.5rem',
    fontSize: '1.125rem',
    fontWeight: 600,
  },
  cardText: {
    fontSize: '0.875rem',
    color: 'rgba(255,255,255,0.7)',
  },
  ctaSection: {
    textAlign: 'center' as const,
    marginTop: '2rem',
  },
  ctaTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: '1rem',
  },
  ctaButton: {
    display: 'inline-block',
    backgroundColor: '#3b82f6',
    color: 'white',
    fontWeight: 500,
    padding: '0.75rem 2rem',
    borderRadius: '0.5rem',
    transition: 'background-color 0.15s',
  },
};

export default function DocsPage(): React.ReactElement {
  return (
    <main className="container flex flex-col py-16" style={styles.container}>
      {/* Hero Section */}
      <div className="mb-16 text-center" style={styles.headerSection}>
        <h1 className="text-4xl font-bold md:text-5xl mb-4" style={styles.title}>Wind Network</h1>
        <p className="text-2xl text-fd-muted-foreground mb-8 max-w-3xl mx-auto" style={styles.subtitle}>
          Data Indexing Infrastructure for <span className="text-gradient">Solana</span> dApps and <span className="text-gradient">AI</span> Applications
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-8" style={styles.tagContainer}>
          <span className="bg-blue-100 dark:bg-blue-900 py-1 px-3 rounded-full text-sm font-medium" style={{...styles.tag, ...styles.blueTag}}>Decentralized Indexing</span>
          <span className="bg-green-100 dark:bg-green-900 py-1 px-3 rounded-full text-sm font-medium" style={{...styles.tag, ...styles.greenTag}}>AI Ready Data</span>
          <span className="bg-purple-100 dark:bg-purple-900 py-1 px-3 rounded-full text-sm font-medium" style={{...styles.tag, ...styles.purpleTag}}>Real-time Streams</span>
          <span className="bg-amber-100 dark:bg-amber-900 py-1 px-3 rounded-full text-sm font-medium" style={{...styles.tag, ...styles.amberTag}}>Jito Restaking</span>
        </div>
        <p className="text-fd-muted-foreground max-w-2xl mx-auto mb-8" style={{color: 'rgba(255,255,255,0.7)', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto', marginBottom: '2rem'}}>
          Wind Network is a decentralized data infrastructure that indexes and stores Solana blockchain data in formats optimized for AI applications, enabling LLMs to train on and analyze on-chain data.
        </p>
        <div className="flex gap-4 justify-center" style={styles.buttonContainer}>
          <Link href="/docs/getting-started" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors" style={styles.primaryButton}>
            Get Started
          </Link>
          <Link href="/docs/getting-started" className="border border-border hover:bg-fd-accent/50 font-medium py-2 px-6 rounded-lg transition-colors" style={styles.secondaryButton}>
            API Reference
          </Link>
        </div>
      </div>

      {/* AI Enablement Callout */}
      <div className="mb-16 p-8 border border-border rounded-xl bg-gradient-to-r from-blue-50/20 to-purple-50/20 dark:from-blue-950/20 dark:to-purple-950/20" style={styles.featureSection}>
        <h2 className="text-2xl font-semibold mb-4 text-center" style={styles.featureTitle}>Enabling AI Applications on Solana</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6" style={styles.featureGrid}>
          <div className="flex flex-col items-center text-center" style={styles.featureItem}>
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-3" style={{...styles.featureIcon, backgroundColor: 'rgba(59, 130, 246, 0.2)'}}>
              <BrainCircuitIcon className="size-6" style={{width: '1.5rem', height: '1.5rem'}} />
            </div>
            <h3 className="font-medium mb-2" style={styles.featureItemTitle}>LLM Training Data</h3>
            <p className="text-sm text-fd-muted-foreground" style={styles.featureItemText}>Structured data format ideal for training large language models</p>
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
      <h2 className="text-2xl font-semibold md:text-3xl mb-8 text-center" style={{fontSize: '1.875rem', fontWeight: 600, marginBottom: '2rem', textAlign: 'center'}}>Unlock the Full Potential of Solana Data</h2>
      <div className="grid grid-cols-1 gap-6 text-left md:grid-cols-2 lg:grid-cols-3 mb-12" style={styles.cardGrid}>
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
      <div className="text-center mt-8" style={styles.ctaSection}>
        <h2 className="text-2xl font-semibold mb-4" style={styles.ctaTitle}>Ready to Build AI Applications on Solana?</h2>
        <Link 
          href="/docs/getting-started" 
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-colors"
          style={styles.ctaButton}
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
        marginBottom: '0.5rem',
        width: '2.25rem',
        height: '2.25rem',
        borderRadius: '0.5rem',
        border: '1px solid #333',
        padding: '0.375rem',
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
      style={{
        borderRadius: '0.5rem',
        border: '1px solid #333',
        padding: '1.5rem',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        transition: 'all 0.15s',
        backgroundColor: 'rgba(123, 123, 255, 0.03)',
      }}
    >
      {props.children}
    </Link>
  );
}
