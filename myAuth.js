module.exports.checkNotAuthenticated = function(req, res, next){
    if(req.isAuthenticated() ){
        return res.redirect('/')
    }
    return next()
}

module.exports.checkAuthenticated = function(req,res,next){
    console.log('isAuthenticated', req.isAuthenticated() )
    if(req.isAuthenticated() ){
        return next()
    }

    res.redirect('/login')
}