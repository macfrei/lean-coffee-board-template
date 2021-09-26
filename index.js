const express = require('express')
const { nanoid } = require('nanoid')
const app = express()
const port = 3000

const cards = [{ title: 'What is HTML?', author: 'John Doe', id: '123abc' }]

app.use(express.json())

app.get('/api/cards', (req, res) => {
  res.json(cards)
})

app.post('/api/cards', (req, res) => {
  const id = nanoid()
  const newCard = { ...req.body, id }

  cards.push(newCard)
  res.json(newCard)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
