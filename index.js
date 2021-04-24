const express = require('express')
const fetch = require('node-fetch').default
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/:url', (req, res) => {
  if (req.params.url) {
    const { url } = req.params

    fetch(url)
      .then((res) => res.text())
      .then((text) => res.send(text))
    .catch(() => res.send('err'))
  } else res.send('fuck you')
})

app.listen(8080)
