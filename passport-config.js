const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

function initialize(passport, getUserByEmail, getUserById){
    // we will call this function from /login in order to determin user login is correct
    const authenticateUser = async (email, password, done)=>{
        const user = getUserByEmail(email)
        console.log(email, user)
        
        if(user == null){ //no user was found
            return done(null, false, {message: 'no user with that email found'})
        }
        try{
            if(await bcrypt.compare(password, user.password) ){
                return done(null, user)
            }
            else{
                return done(null, false, {message: 'password is incorrect'})
            }
        }
        catch(e){
            return done(e)
        }
    }

    passport.use(new localStrategy({usernameField: 'email'}, authenticateUser ))

    passport.serializeUser((user, done) => done(null, user.id) )

    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id) )
    })
}

module.exports = initialize

// module.exports.checkAuthenticated = function(req,res,next){
//     console.log('isAuthenticated', req.isAuthenticated() )
//     if(req.isAuthenticated() ){
//         return next()
//     }

//     res.redirect('/login')
// }