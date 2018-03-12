const express = require('express')
const app = express()
const port = 8080

app.get('/', (request, response) => {
  response.send('Hello from Express!')
})


app.get('/evenDeeper', (request, response) => {



    console.log("Got hit at the end point")


    response.send('WE are even deeper in the routes')
  })




app.listen(port)

console.log("Running on port: " + port)