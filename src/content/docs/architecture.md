# Architecture

wind network's architecture is designed for scalability, reliability, and performance. The system is composed of several interconnected components that work together to provide a comprehensive indexing solution.

## Components

wind network consists of several modular components:

* **Geyser Plugin**: Connects directly to Solana validators to stream real-time data
* **Node Network**: P2P network for data propagation and redundancy
* **Indexers**: Specialized nodes that index and serve data via API
* **Client SDK**: Libraries for interacting with wind network services

## Data Flow

1. **Data Ingestion**: Raw blockchain data is captured through the Geyser plugin interface from Solana validators
2. **Processing**: Data is processed, filtered, and transformed according to indexing rules
3. **Storage**: Processed data is stored in the selected storage backend
4. **Query**: Users access indexed data through the HTTP/WebSocket API or SDK

## Storage Options

wind network supports multiple storage backends to suit different use cases:

### RocksDB (Default)

The default storage option, optimized for high-throughput write operations.

* **Pros**: Fast writes, good for hot storage
* **Cons**: Limited query capabilities
* **Best for**: Real-time data ingestion, recent data access

### Apache Parquet

Columnar storage format optimal for analytics workloads.

* **Pros**: Excellent compression (3-4x better than JSON), high query performance
* **Cons**: Append-only, not suited for frequent updates
* **Best for**: Analytics, cold storage, historical data

### PostgreSQL

Relational database with rich query capabilities.

* **Pros**: SQL queries, excellent for complex analytics, point-in-time recovery
* **Cons**: Higher resource usage, slower writes than specialized options
* **Best for**: Complex queries, local development, transaction analysis

## Hot/Cold Storage Architecture

wind network supports a hot/cold storage architecture:

1. **Hot Storage**: Recent data stored in RocksDB for fast access
2. **Cold Storage**: Historical data archived in Parquet or PostgreSQL

This approach provides the best of both worlds:

* Fast write performance during data ingestion
* Excellent query performance for analytics on historical data 