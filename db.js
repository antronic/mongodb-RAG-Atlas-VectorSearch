const mongodb = require('mongodb')

const uri = process.env.MONGODB_ATLAS_URI
const client = new mongodb.MongoClient(uri)

async function main(query) {
  await client.connect()
  const database = client.db('sample_mflix')
  const collection = database.collection('embedded_movies')

  console.log(query)

  const agg = [
    {
      '$vectorSearch': {
        'index': 'vector_index',
        'path': 'plot_embedding',
        queryVector: query,
        'numCandidates': 150,
        'limit': 10
      }
    }, {
      '$project': {
        '_id': 0,
        'plot': 1,
        'title': 1,
        'score': {
          '$meta': 'vectorSearchScore'
        }
      }
    }
  ]

  // perform atlas vector search
  const result = await collection.aggregate(agg).toArray()

  return result
}

exports.db = main