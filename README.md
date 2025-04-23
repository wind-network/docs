# Wind Network

Wind Network is a decentralized data indexing and storage infrastructure for Solana that enables the development of advanced AI applications. Our platform processes and indexes blockchain data in real-time through a distributed network of nodes, providing structured data formats optimized for machine learning models and LLMs to train on Solana data.

## Key Features

- **AI-Ready Data Formats**: Structured blockchain data optimized for machine learning models and LLMs
- **Decentralized Architecture**: Powered by libp2p for robust peer-to-peer communication
- **Real-time Data Streams**: Process and index Solana blockchain data as it happens
- **LLM Training Data**: High-quality datasets for training language models on blockchain activity
- **Analytics Infrastructure**: Foundation for building custom analytics and insight applications
- **Enhanced Security**: Protected by Jito restaking with economic guarantees for data integrity
- **High Performance**: Optimized for throughput and low latency
- **Horizontal Scaling**: Distributed design for unlimited scalability

## AI Application Use Cases

- **DeFi Analytics Tools**: Build applications that analyze market data, monitor liquidity, and track transactions
- **NFT Intelligence**: Create tools for collection analytics, rarity insights, and trading pattern detection
- **Gaming Analytics**: Develop applications for player behavior analysis and in-game economy monitoring
- **Developer Platforms**: Build tools for smart contract usage metrics and network health monitoring
- **Research Applications**: Enable historical data analysis, trend identification, and market intelligence

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
- **crates/windexer-indexer**: Data indexing and formatting for AI consumption
- **crates/windexer-analytics**: Data pipelines for analytics applications

## Documentation

Our documentation is built using [Fumadocs](https://fumadocs.vercel.app) and provides comprehensive guides on:

- Network architecture
- Data formats for AI
- API reference
- Getting started guides
- Security model

## License

This project is licensed under the terms of the license included in the repository.
