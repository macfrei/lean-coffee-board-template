const express = require('express')
const { nanoid } = require('nanoid')
const router = express.Router()

let cards = [{ title: 'What is HTML?', author: 'John Doe', id: '123abc' }]

router.get('/', (req, res, next) => {
  res.status(200).json(cards)
})

router.post('/', (req, res, next) => {
  const id = nanoid()
  const newCard = { ...req.body, id }
  cards.push(newCard)

  res.status(200).json(newCard)
})

router.patch('/:id', (req, res, next) => {
  const { id } = req.params
  const card = cards.find(card => card.id === id)

  if (card) {
    const index = cards.findIndex(card => id === card.id)

    const newCard = { ...cards[index], ...req.body }
    cards = [...cards.slice(0, index), newCard, ...cards.slice(index + 1)]

    res.status(200).send(newCard)
  } else {
    next({
      statusCode: 404,
      detail: `Could not find question with id: ${id}`,
      message: 'Document not found',
    })
  }
})

router.delete('/:id', (req, res, next) => {
  const { id } = req.params
  const card = cards.find(card => card.id === id)

  if (card) {
    cards = cards.filter(card => card.id !== id)

    res.status(200).send(`Card with id: ${id} was deleted.`)
  } else {
    next({
      statusCode: 404,
      detail: `Could not find question with id: ${id}`,
      message: 'Document not found',
    })
  }
})

module.exports = router
