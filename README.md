# MongoDB Atlas Vector Search with RAG sample

## Pre-requisites
- Azure Subscription
- Azure OpenAI with [text-embedding-3-small](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models#embeddings) deployment

## Setup
```bash
export API_ENDPOINT='<API_ENDPOINT>'
export API_KEY='<API_KEY>'
export MONGODB_ATLAS_URI='<MONGODB_ATLAS_URI>'
```

## Run
```bash
node index.js "<search-keyword>"
```