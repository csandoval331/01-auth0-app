const express = require('express')
const bcrypt = require('bcrypt')
const {checkNotAuthenticated}= require('../myAuth')
const router = express.Router()

// function checkNotAuthenticated(req, res, next){
//     if(req.isAuthenticated() ){
//         return res.redirect('/')
//     }
// }

router.get('/', checkNotAuthenticated ,(req,res)=>{
    // console.log(req.app)
    res.render('register.ejs')
})

router.post('/', checkNotAuthenticated,async (req,res)=>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        req.app.locals.users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })

    } 
    catch (error) {
        
    }
    res.render('register.ejs')
    // res.send(200)
})

module.exports = router