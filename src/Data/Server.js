const express = requiere('express')
const app = express()
const { port } = require('./Config')

const apiRouter = require('./Routes/Api')

require('./Db/mongoose')

app.use('/Podwykonawca',apiRouter)

app.listen(port, function () {
  console.log('serwer slucha')
})
