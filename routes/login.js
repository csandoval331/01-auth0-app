const express = require('express')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const {checkNotAuthenticated} = require('../myAuth')
const router = express.Router()

router.get('/', checkNotAuthenticated,(req,res)=>{
    res.render('login.ejs')
})

router.post('/', checkNotAuthenticated,passport.authenticate('local', {
    successRedirect:'/',
    failureRedirect: '/login',
    failureFlash: true
}) )


module.exports = router