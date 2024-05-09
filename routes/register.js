const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    // res.send("Hello world")
    res.render('register.ejs')
})

router.post('/', (req,res)=>{
    console.log(req)
    // res.render('register.ejs')
    res.send(200)
})

module.exports = router