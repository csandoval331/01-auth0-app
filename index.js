require('dotenv').config()
const PORT = process.env.PORT
const express = require('express')
const bcrypt = require('bcrypt')
const passport = require('passport')
const {checkAuthenticated, checkNotAuthenticated} = require('./myAuth')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const initializePassport = require('./passport-config')
const register = require('./routes/register')
const login = require('./routes/login')
const app = express()


initializePassport(passport, email => {
    // console.log(email)
    // console.log(app.locals.users.find(email) )
    // console.log("finding user",email, app.locals.users.find( (user) => {user.email == email} ))

    return app.locals.users.find(user => user.email === email)
},
    id => {
        return app.locals.users.find(user => user.id === id)
    }
)

//created temporary user for testing
// const myPassword = bcrypt.hash('carlos', 10)
bcrypt.hash('carlos', 10).then((hashedPassword)=>{
    app.locals.users = [{id:Date.now().toString(), name:'carlos', email: 'carlos', password: hashedPassword}]
    // var temp = app.locals.users.find(user => user.email === 'carlos')
    // console.log(temp)
})



// app.use(express.json() )
app.use(express.urlencoded({extended:false}) )
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize() )
app.use(passport.session() )
app.use(methodOverride('_method'))
app.use('/register', register)
app.use('/login', login)
app.set('view-engin', 'ejs')


app.get('/', checkAuthenticated, (req, res)=>{
    console.log('hello from /index',req.app.locals.users)
    res.render('index.ejs', {name: JSON.stringify(req.user)})
})

app.post('/:msg', (req, res)=>{
    var message = JSON.stringify(req.params)
    message += ', '
    message += JSON.stringify(req.body)
    message += '\n\n'
    // console.log(message)

    res.send(message)
})

app.delete('/logout', (req,res)=>{
    req.logout(err => {
        if(err){return next(err) }
        return res.redirect('/login')
    })
})
//middleware


// function checkNotAuthenticated(req, res, next){
//     if(req.isAuthenticated() ){
//         return res.redirect('/')
//     }
// }
// app.locals.checkNotAuthenticated = checkNotAuthenticated()

app.listen(PORT, (req, res)=>{
    console.log(`Server is on port: ${PORT}`)
})