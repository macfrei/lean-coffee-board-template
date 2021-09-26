const express = require('express')
const { nanoid } = require('nanoid')
const app = express()
const port = 3000

let cards = [{ title: 'What is HTML?', author: 'John Doe', id: '123abc' }]

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

app.patch('/api/cards/:id', (req, res) => {
  const { id } = req.params
  const index = cards.findIndex(card => id === card.id)

  const newCard = { ...cards[index], ...req.body }

  cards = [...cards.slice(0, index), newCard, ...cards.slice(index + 1)]
  res.send(newCard)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
