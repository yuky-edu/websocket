import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express()
const port = process.env.WS_PORT || process.env.WS_PORT
app.use(cors())

const server = app.listen(port, () => {
  console.log(`server running on :${port}`)
})

app.get('/', (req, res) => {
  res.send("yuky ws server is running")
})


var io = require('socket.io')(server, {
  cors: {
    origin: process.env.WS_CORS_ORIGIN
  }
})

io.on('connect', (socket)=>{
  socket.on('ws', (data) => {
    /*
    data {
      channel,
      data
    }
    */
    io.emit(data.channel, data.data)
  })
})
