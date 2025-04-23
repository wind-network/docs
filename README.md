# Wind Network

Wind Network is a decentralized Solana indexer application built in Rust that leverages libp2p for peer-to-peer networking and Jito restaking for validator security. The indexer processes blockchain data in real-time through a distributed network of nodes using Solana's Geyser plugin interface.

## Key Features

- **Decentralized Architecture**: Powered by libp2p for robust peer-to-peer communication
- **Real-time Indexing**: Process Solana blockchain data as it happens
- **Jito Restaking**: Enhanced security through validator restaking
- **High Performance**: Optimized for throughput and low latency
- **Horizontal Scaling**: Distributed design for scalability

## Getting Started

Run the development server for the documentation site:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- **crates/windexer-api**: Public API interfaces and types
- **crates/windexer-common**: Shared utilities and common types
- **crates/windexer-geyser**: Solana Geyser plugin implementation
- **crates/windexer-jito-staking**: Jito restaking and NCN integration
- **crates/windexer-network**: libp2p networking and consensus
- **crates/windexer-store**: Data persistence and caching layer

## Documentation

Our documentation is built using [Fumadocs](https://fumadocs.vercel.app) and provides comprehensive guides on:

- Network architecture
- API reference
- Getting started guides
- Security model

## License

This project is licensed under the terms of the license included in the repository.
