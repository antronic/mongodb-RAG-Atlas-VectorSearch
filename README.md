# MongoDB Atlas Vector Search with RAG sample

## Pre-requisites
- Azure Subscription
- Azure OpenAI with [text-embedding-3-small](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models#embeddings) deployment

## Scenario
- Try to query the MongoDB Atlas Vector search
- This demo doesn't included text generation, it's just a simple query to MongoDB Atlas Vector search by using embbedding from OpenAI to generate the vector and use Atlas Vector search to query the data similiary

## Setup
```bash
export AZURE_OPENAI_ENDPOINT='<API_ENDPOINT>'
export AZURE_OPENAI_KEY='<API_KEY>'
export MONGODB_ATLAS_URI='<MONGODB_ATLAS_URI>'
```

## Run
```bash
node index.js "<search-keyword>"
```