const express = require('express')

const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/wedding1', (req, res) => {
  res.sendFile(__dirname+'/wedding1.html')
})

app.listen(3000, () => {
  console.log("Example app listening on port 3000")
})