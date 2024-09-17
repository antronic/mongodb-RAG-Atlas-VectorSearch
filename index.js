const axios = require('axios')
const fs = require('fs')

const { db } = require('./db')
const {writeText}=require('./write-file')

const endpoint = prcoess.env.AZURE_OPENAI_ENDPOINT
const key = process.env.API_KEY

async function main() {
  const input = process.argv[2]
  // console.log(input)

  const result = await axios.post(endpoint, {
    model: 'text-embedding-3-small',
    input,
  }, {
    headers: {
      'api-key': key
      }
  })

  console.log(result.data)

  const data = result.data.data[0].embedding
  writeText(JSON.stringify((data)))

  const vectorSearchResult = await db(data)
  console.log(vectorSearchResult)

  process.exit(0)
}

main()
