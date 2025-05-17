# Indexing & Retrieving Data

This guide demonstrates how to index Solana blockchain data and retrieve it efficiently using the wIndexer network. Our decentralized indexing solution makes it simple to access blockchain data without relying on centralized RPC providers.

## Prerequisites

- Basic knowledge of Solana blockchain
- Node.js environment (for SDK examples)
- Access to wIndexer network at [test-may-us-01.windnetwork.ai](http://test-may-us-01.windnetwork.ai)

## Using the REST API

### Checking the Network Status

Before indexing or retrieving data, ensure the wIndexer network is operational:

```bash
curl http://test-may-us-01.windnetwork.ai/api/health
```

#### Expected response:
```json
{
  "status": "ok",
  "uptime": 12345,
  "version": "0.1.0"
}
```

### Indexing Transactions
When you submit transactions to the Solana network, Wind Network automatically indexes them. For example, after submitting a transaction, you can track its indexing status:
```bash
# Replace with your transaction signature
export SIGNATURE="your_transaction_signature"

# Check if the transaction has been indexed
curl http://test-may-us-01.windnetwork.ai/indexer1/api/transaction/$SIGNATURE
```

### Retrieving Indexed Data
Once data is indexed, you can retrieve it through various endpoints:
#### Recent Blocks
```bash
curl http://test-may-us-01.windnetwork.ai/indexer1/api/blocks/recent
```
#### Account Information
```bash
# Replace with the account public key
export ACCOUNT="account_public_key"

curl http://test-may-us-01.windnetwork.ai/indexer1/api/account/$ACCOUNT
```
#### Program Accounts
```bash
# Replace with program ID
export PROGRAM_ID="program_id"

curl http://test-may-us-01.windnetwork.ai/indexer1/api/program/$PROGRAM_ID/accounts
```
