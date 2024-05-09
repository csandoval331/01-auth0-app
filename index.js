require('dotenv').config()
const PORT = process.env.PORT
const express = require('express')
const register = require('./routes/register')
const login = require('./routes/login')
const app = express()

app.use(express.json() )
// app.use(express.urlencoded())
app.use('/register', register)
app.use('/login', login)
app.set('view-engin', 'ejs')


app.get('/', (req, res)=>{
    res.render('index.ejs', {name: 'Carlos'})
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