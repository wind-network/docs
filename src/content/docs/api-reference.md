# API Reference

wind network provides both HTTP and WebSocket APIs for querying indexed blockchain data.

## HTTP API

The HTTP API allows retrieving indexed data using REST endpoints.

### Base URL

```
http://<indexer-host>:<port>/api/v1
```

### Endpoints

#### Get Account Data

```
GET /accounts/{account_pubkey}
```

Parameters:
- `account_pubkey` (string): The public key of the account to query

Response:
```json
{
  "pubkey": "string",
  "lamports": 0,
  "owner": "string",
  "executable": false,
  "rentEpoch": 0,
  "data": "base64-encoded-data",
  "dataSlice": {
    "offset": 0,
    "length": 0
  }
}
```

#### Get Transaction

```
GET /transactions/{signature}
```

Parameters:
- `signature` (string): The transaction signature

Response:
```json
{
  "signature": "string",
  "slot": 0,
  "err": null,
  "memo": null,
  "blockTime": 0,
  "meta": {
    "err": null,
    "fee": 0,
    "preBalances": [],
    "postBalances": [],
    "innerInstructions": [],
    "logMessages": [],
    "preTokenBalances": [],
    "postTokenBalances": []
  }
}
```

#### Search Transactions

```
GET /transactions/search
```

Query parameters:
- `account` (string): Filter by account public key
- `program` (string): Filter by program ID
- `from_slot` (number): Start slot (inclusive)
- `to_slot` (number): End slot (inclusive)
- `limit` (number): Maximum number of results (default: 100)
- `order` (string): Sort order ("asc" or "desc", default: "desc")

Response:
```json
{
  "items": [
    {
      "signature": "string",
      "slot": 0,
      "blockTime": 0
    }
  ],
  "pagination": {
    "total": 0,
    "limit": 0,
    "offset": 0
  }
}
```

## WebSocket API

The WebSocket API allows for real-time updates and subscription-based access to indexed data.

### Connection

```
ws://<indexer-host>:<port>/ws
```

### Messages

All WebSocket messages follow this JSON format:

```json
{
  "id": "string",
  "type": "string",
  "payload": {}
}
```

### Subscription Types

#### Account Updates

Subscribe to account updates:

```json
{
  "id": "1",
  "type": "subscribe",
  "payload": {
    "type": "account",
    "pubkey": "string"
  }
}
```

#### Program Updates

Subscribe to updates for all accounts owned by a program:

```json
{
  "id": "2",
  "type": "subscribe",
  "payload": {
    "type": "program",
    "pubkey": "string"
  }
}
```

#### Transaction Confirmations

Subscribe to transaction confirmations:

```json
{
  "id": "3",
  "type": "subscribe",
  "payload": {
    "type": "transaction",
    "signature": "string"
  }
}
```

### Unsubscribing

To unsubscribe from a subscription:

```json
{
  "id": "4",
  "type": "unsubscribe",
  "payload": {
    "subscription_id": "string"
  }
}
```

## TypeScript SDK

wind network provides a TypeScript SDK for easy integration with web applications.

### Installation

```bash
npm install @windexer/client
```

### Usage

```typescript
import { WindexerClient } from '@windexer/client';

// Create a new client instance
const client = new WindexerClient({
  httpEndpoint: 'http://localhost:8080/api/v1',
  wsEndpoint: 'ws://localhost:8080/ws'
});

// Query account data
const accountData = await client.getAccount('pubkey');

// Subscribe to account updates
const subscription = client.subscribeToAccount('pubkey', (update) => {
  console.log('Account updated:', update);
});

// Unsubscribe
subscription.unsubscribe();
``` 