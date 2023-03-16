const express = require('express')
const cors = require('cors');
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('testing')
})

app.use(express.json())
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use('/', require('./api/routes/routes'))

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})

