# API Referance

## Overview
This documentation covers all available endpoints, their parameters, and response formats.

## Base URL

All API endpoints are accessible through the following base URL:
```
http://test-may-us-01.windnetwork.ai:3000/api
```

## Authentication

Currently, the API does not require authentication for public endpoints.

## API Endpoints

### Health & Status

#### Health Check
```http
GET /health
```
Returns the health status of the API server.

**Response:**
```json
{
    "status": "ok",
    "version": "1.0.0",
    "timestamp": "2024-03-21T12:00:00Z"
}
```

#### Service Status
```http
GET /status
```
Returns detailed status information about the service.

**Response:**
```json
{
    "status": "running",
    "uptime": "24h",
    "version": "1.0.0",
    "node_info": {
        "node_id": "node-0",
        "node_type": "indexer",
        "peer_count": 5
    }
}
```

#### Metrics
```http
GET /metrics
```
Returns service metrics in Prometheus format.

### Block Endpoints

#### Latest Block
```http
GET /blocks/latest
```
Returns information about the latest processed block.

**Response:**
```json
{
    "slot": 123456789,
    "blockhash": "hash123...",
    "parent_slot": 123456788,
    "timestamp": "2024-03-21T12:00:00Z",
    "transactions": 150
}
```

#### Block by Slot
```http
GET /blocks/{slot}
```
Returns information about a specific block by slot number.

**Parameters:**
- `slot` (path parameter): The slot number to query

### Transaction Endpoints

#### Transaction by Signature
```http
GET /transaction/{signature}
```
Returns detailed information about a specific transaction.

**Parameters:**
- `signature` (path parameter): The transaction signature to query

**Response:**
```json
{
    "signature": "sig123...",
    "slot": 123456789,
    "success": true,
    "fee": 5000,
    "accounts": ["acc1...", "acc2..."],
    "timestamp": "2024-03-21T12:00:00Z"
}
```

#### Recent Transactions
```http
GET /transactions/recent
```
Returns a list of recent transactions.

**Query Parameters:**
- `limit` (optional): Number of transactions to return (default: 100)
- `before` (optional): Return transactions before this signature
- `after` (optional): Return transactions after this signature

### Account Endpoints

#### Account Information
```http
GET /account/{pubkey}
```
Returns detailed information about a specific account.

**Parameters:**
- `pubkey` (path parameter): The account public key to query

**Response:**
```json
{
    "pubkey": "pubkey123...",
    "lamports": 1000000000,
    "owner": "owner123...",
    "executable": false,
    "rent_epoch": 123
}
```

#### Account Balance
```http
GET /account/{pubkey}/balance
```
Returns the current balance of an account.

**Parameters:**
- `pubkey` (path parameter): The account public key to query

#### Account Tokens
```http
GET /account/{pubkey}/tokens
```
Returns all tokens owned by an account.

**Parameters:**
- `pubkey` (path parameter): The account public key to query

#### Program Accounts
```http
GET /accounts/program/{program_id}
```
Returns all accounts owned by a specific program.

**Parameters:**
- `program_id` (path parameter): The program ID to query

### WebSocket Endpoints

#### Account Updates
```http
WS /ws/accounts
```
WebSocket endpoint for real-time account updates.

**Message Format:**
```json
{
    "type": "account_update",
    "pubkey": "pubkey123...",
    "lamports": 1000000000,
    "timestamp": "2024-03-21T12:00:00Z"
}
```

## Error Responses

All endpoints may return the following error responses:

### 400 Bad Request
```json
{
    "error": "Invalid request parameters",
    "details": "Detailed error message"
}
```

### 404 Not Found
```json
{
    "error": "Resource not found",
    "details": "The requested resource does not exist"
}
```

### 500 Internal Server Error
```json
{
    "error": "Internal server error",
    "details": "An unexpected error occurred"
}
```

## Rate Limiting

The API implements rate limiting to ensure fair usage. Current limits:
- 100 requests per minute per IP address
- 1000 requests per hour per IP address

Rate limit headers are included in all responses:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1616323200
```

## Best Practices

1. **Error Handling**: Always implement proper error handling for API responses
2. **Rate Limiting**: Implement exponential backoff when hitting rate limits
3. **WebSocket**: Use WebSocket connections for real-time data instead of polling
4. **Caching**: Cache responses when appropriate to reduce API calls

## Examples

### TypeScript Example
```typescript
import { WindClient } from '@windnetwork/sdk';

const client = new WindClient('http://test-may-us-01.windnetwork.ai:3000/api');

// Get latest block
const latestBlock = await client.getLatestBlock();

// Get account information
const accountInfo = await client.getAccount('pubkey123...');

// Subscribe to account updates
client.subscribeToAccounts((update) => {
    console.log('Account update:', update);
});
```

### Python Example
```python
import requests

BASE_URL = 'http://test-may-us-01.windnetwork.ai:3000/api'

# Get latest block
response = requests.get(f'{BASE_URL}/blocks/latest')
latest_block = response.json()

# Get account information
response = requests.get(f'{BASE_URL}/account/pubkey123...')
account_info = response.json()
```

## Support

For API support or to report issues, please contact:
- Email: vivek@windnetwork.ai
- Telegram Group (Early acess and support): [@wind_network](https://t.me/wind_network)