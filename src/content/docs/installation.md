# Installation

This guide covers the installation and setup process for wIndexer.

## Prerequisites

Before installing wIndexer, ensure you have the following prerequisites:

* Rust 1.70+ and Cargo
* Node.js 16+ and npm/yarn (for TypeScript examples)
* Solana CLI tools
* Git

## Quick Start

### Clone the Repository

```bash
git clone https://github.com/wind-network/windexer.git
cd windexer
```

### Build the Project

```bash
cargo build --workspace
```

## Running wIndexer

### Start a Local Validator with Geyser Plugin

```bash
make run-validator-with-geyser
```

### Start a Node

In a new terminal window:

```bash
make run-node-1
```

### Start an Indexer

In another terminal window:

```bash
make run-indexer-1
```

## Running with Docker

wIndexer also provides Docker images for easy deployment:

```bash
cd deployment/docker
docker compose up -d
```

## Configuration

Example configuration with multiple storage options:

```json
{
  "storage": {
    "storage_type": "rocksdb",     // Primary storage type (rocksdb, parquet, postgres)
    "rocksdb_path": "/path/to/rocksdb",
    "hot_cold_separation": true,   // Enable hot/cold storage separation
    "parquet": {
      "directory": "/path/to/parquet",
      "max_file_size_mb": 256,
      "compression_enabled": true,
      "partition_by_slot": true    // Create separate files by slot ranges
    },
    "postgres": {
      "connection_string": "postgres://user:password@localhost:5432/windexer",
      "create_tables": true,
      "batch_size": 1000,
      "max_connections": 10
    }
  }
}
```

## Testing the Installation

### Generate Test Data

```bash
cd examples/typescript
npm install
npm run generate-data
```

### Query the Indexed Data

```bash
npm run query-windexer
``` 