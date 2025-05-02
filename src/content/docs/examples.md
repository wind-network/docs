# Examples

This section provides examples of how to use wIndexer in various scenarios.

## TypeScript Examples

### Query Indexed Data

```typescript
import { WindexerClient } from '@windexer/client';

async function queryAccounts() {
  const client = new WindexerClient({
    httpEndpoint: 'http://localhost:8080/api/v1',
  });

  // Query a specific account
  const account = await client.getAccount('someAccountPublicKey');
  console.log('Account data:', account);

  // Query transactions for a specific account
  const transactions = await client.searchTransactions({
    account: 'someAccountPublicKey',
    limit: 10,
  });
  console.log('Recent transactions:', transactions);
}

queryAccounts().catch(console.error);
```

### Subscribe to Real-time Updates

```typescript
import { WindexerClient } from '@windexer/client';

function subscribeToUpdates() {
  const client = new WindexerClient({
    wsEndpoint: 'ws://localhost:8080/ws',
  });

  // Subscribe to account updates
  const accountSubscription = client.subscribeToAccount('someAccountPublicKey', (update) => {
    console.log('Account updated:', update);
  });

  // Subscribe to program updates
  const programSubscription = client.subscribeToProgram('someProgramId', (update) => {
    console.log('Program account updated:', update);
  });

  // Cleanup subscriptions when done
  setTimeout(() => {
    accountSubscription.unsubscribe();
    programSubscription.unsubscribe();
    client.disconnect();
  }, 60000);
}

subscribeToUpdates();
```

### Generate Test Transactions

```typescript
import { Connection, Keypair, SystemProgram, Transaction } from '@solana/web3.js';

async function generateTestTransactions() {
  const connection = new Connection('http://localhost:8899', 'confirmed');
  const payer = Keypair.generate();
  
  // Fund the payer account
  const airdropSignature = await connection.requestAirdrop(payer.publicKey, 1000000000);
  await connection.confirmTransaction(airdropSignature);
  
  // Generate 10 test transactions
  for (let i = 0; i < 10; i++) {
    const recipient = Keypair.generate();
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: payer.publicKey,
        toPubkey: recipient.publicKey,
        lamports: 1000000,
      })
    );
    
    const signature = await connection.sendTransaction(transaction, [payer]);
    console.log(`Transaction ${i + 1} sent with signature:`, signature);
  }
}

generateTestTransactions().catch(console.error);
```

## Python Examples

### Query Account Data

```python
import requests
import json

def query_account(pubkey):
    response = requests.get(f"http://localhost:8080/api/v1/accounts/{pubkey}")
    if response.status_code == 200:
        return response.json()
    else:
        return None

account_data = query_account("someAccountPublicKey")
print(json.dumps(account_data, indent=2))
```

### Search Transactions

```python
import requests
import json

def search_transactions(params):
    response = requests.get("http://localhost:8080/api/v1/transactions/search", params=params)
    if response.status_code == 200:
        return response.json()
    else:
        return None

# Search transactions for a specific account
transactions = search_transactions({
    "account": "someAccountPublicKey",
    "limit": 10,
    "order": "desc"
})

print(json.dumps(transactions, indent=2))
```

## Rust Examples

### Custom Indexer Plugin

```rust
use windexer::plugin::{Plugin, PluginConfig};
use windexer::types::{Account, Transaction};

struct CustomIndexer;

impl Plugin for CustomIndexer {
    fn name(&self) -> &str {
        "custom-indexer"
    }

    fn on_account_update(&self, account: &Account) {
        // Process account update
        println!("Account updated: {}", account.pubkey);
    }

    fn on_transaction(&self, transaction: &Transaction) {
        // Process transaction
        println!("Transaction processed: {}", transaction.signature);
    }
}

fn main() {
    let config = PluginConfig::default();
    let plugin = CustomIndexer;
    
    // Register the plugin with wIndexer
    windexer::register_plugin(plugin, config);
}
``` 