const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.use('/api/cards', require('./routes/cards'))

app.use(require('./routes/error'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
