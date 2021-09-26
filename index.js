const express = require('express')
const { nanoid } = require('nanoid')
const app = express()
const port = 3000

let cards = [{ title: 'What is HTML?', author: 'John Doe', id: '123abc' }]

app.use(express.json())

app.get('/api/cards', (req, res) => {
  res.status(200).json(cards)
})

app.post('/api/cards', (req, res) => {
  const id = nanoid()
  const newCard = { ...req.body, id }
  cards.push(newCard)

  res.status(200).json(newCard)
})

app.patch('/api/cards/:id', (req, res) => {
  const { id } = req.params
  const index = cards.findIndex(card => id === card.id)

  const newCard = { ...cards[index], ...req.body }
  cards = [...cards.slice(0, index), newCard, ...cards.slice(index + 1)]

  res.status(200).send(newCard)
})

app.delete('/api/cards/:id', (req, res) => {
  const { id } = req.params
  cards = cards.filter(card => card.id !== id)

  res.status(200).send(`Card with id: ${id} was deleted.`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
