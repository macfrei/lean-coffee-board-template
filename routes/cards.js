const express = require('express')
const { nanoid } = require('nanoid')
const router = express.Router()

let cards = [{ title: 'What is HTML?', author: 'John Doe', id: '123abc' }]

router.get('/', (req, res) => {
  res.status(200).json(cards)
})

router.post('/', (req, res) => {
  const id = nanoid()
  const newCard = { ...req.body, id }
  cards.push(newCard)

  res.status(200).json(newCard)
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const index = cards.findIndex(card => id === card.id)

  const newCard = { ...cards[index], ...req.body }
  cards = [...cards.slice(0, index), newCard, ...cards.slice(index + 1)]

  res.status(200).send(newCard)
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  cards = cards.filter(card => card.id !== id)

  res.status(200).send(`Card with id: ${id} was deleted.`)
})

module.exports = router
