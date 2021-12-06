const express = require('express')

const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/token', (req, res) => {
  res.send('Token')
})

app.get('/options', (req, res) => {
  res.send('Options')
})

app.get('/create', (req, res) => {
  res.send('Create')
})

app.listen(port, () => {
  console.log('App is listenening to port 5000')
})
