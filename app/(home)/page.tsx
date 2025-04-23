import { cn } from '@/lib/cn';
import { LayersIcon, NetworkIcon, ServerIcon, ShieldIcon } from 'lucide-react';
import type { LinkProps } from 'next/link';
import Link from 'next/link';

export default function DocsPage(): React.ReactElement {
  return (
    <main className="container flex flex-col py-16">
      <h1 className="text-2xl font-semibold md:text-3xl">Wind Network</h1>
      <p className="text-fd-muted-foreground text-lg mt-1">
        A decentralized Solana indexer powered by libp2p and Jito restaking
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 text-left md:grid-cols-2">
        <Item href="/docs/ui">
          <Icon className="bg-blue-100 dark:bg-blue-950">
            <NetworkIcon className="size-full" />
          </Icon>
          <h2 className="mb-2 text-lg font-semibold">Network Architecture</h2>
          <p className="text-sm text-fd-muted-foreground">
            Learn about Wind Network's decentralized architecture built on libp2p
          </p>
        </Item>

        <Item href="/docs/openapi">
          <Icon className="bg-green-100 dark:bg-green-950">
            <ServerIcon className="size-full" />
          </Icon>
          <h2 className="mb-2 text-lg font-semibold">API Reference</h2>
          <p className="text-sm text-fd-muted-foreground">
            Explore Wind Network's API for accessing indexed Solana data
          </p>
        </Item>

        <Item href="/docs/getting-started">
          <Icon className="bg-purple-100 dark:bg-purple-950">
            <LayersIcon className="size-full" />
          </Icon>
          <h2 className="mb-2 text-lg font-semibold">Getting Started</h2>
          <p className="text-sm text-fd-muted-foreground">
            Set up and run your own Wind Network node
          </p>
        </Item>

        <Item href="/docs/security">
          <Icon className="bg-amber-100 dark:bg-amber-950">
            <ShieldIcon className="size-full" />
          </Icon>
          <h2 className="mb-2 text-lg font-semibold">Security & Staking</h2>
          <p className="text-sm text-fd-muted-foreground">
            Learn about our security model with Jito restaking for validators
          </p>
        </Item>
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
