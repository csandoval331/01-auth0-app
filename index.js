require('dotenv').config()
const PORT = process.env.PORT
const express = require('express')

const app = express()

app.use(express.json() )
app.get('/', (req, res)=>{
    res.send('Hello world')
})

app.post('/:msg', (req, res)=>{
    var message = JSON.stringify(req.params)
    message += ', '
    message += JSON.stringify(req.body)
    message += '\n\n'
    // console.log(message)

    res.send(message)
})


app.listen(PORT, (req, res)=>{
    console.log(`Server is on port: ${PORT}`)
})