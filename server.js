const express = require('express')
const cors = require('cors')

const app = express()
const port = 5000

app.use(cors())

const collections = {
  collections: [
    { id: 'collection_1', label: 'The awesome NFTs' },
    { id: 'collection_2', label: 'The Bored Apes' },
    { id: 'collection_3', label: 'Cool Cats' },
    { id: 'collection_4', label: 'Crypto Punks' },
  ],
}

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/token', (req, res) => {
  res.send('Token')
})

app.get('/options', (req, res) => {
  res.json(collections)
})

app.get('/create', (req, res) => {
  res.send('Create')
})

//create an NFT
app.post('/', (req, res) => {
  const newNft = {}
})

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})
