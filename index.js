const express = require('express')
const app = express()
const port = 3000

const cards = [{ title: 'What is HTML?', author: 'John Doe' }]

app.use(express.json())

app.get('/api/cards', (req, res) => {
  res.json(cards)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
