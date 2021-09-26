const express = require('express')
const Card = require('../models/Card')
const router = express.Router()

router.get('/', (req, res, next) => {
  Card.find()
    .then(response => res.status(200).json(response))
    .catch(error => next({ ...error, statusCode: 404 }))
})

router.post('/', (req, res, next) => {
  Card.create(req.body)
    .then(response => res.status(200).json(response))
    .catch(error => next({ ...error, statusCode: 400 }))
})

router.patch('/:id', (req, res, next) => {
  const { id } = req.params

  Card.findByIdAndUpdate(id, req.body, { new: true })
    .then(response => res.status(200).json(response))
    .catch(error =>
      next({
        ...error,
        statusCode: 404,
        detail: `Could not find question with id: ${id}`,
        message: 'Document not found',
      })
    )
})

router.delete('/:id', (req, res, next) => {
  const { id } = req.params

  Card.findByIdAndDelete(id)
    .then(response => res.status(200).json(response))
    .catch(error => next({ ...error, statusCode: 404 }))
})

module.exports = router
