const authServices = require('../services/auth.service')
const {ProfileValidator} = require('../validators')

exports.registerUser = async(req, res, next) => {
    const {
        value,
        error,
      } = ProfileValidator.validate(req.body)
    if (error) {
        res.status('401').json('Um ou mais campos são inválidos')
    }
    const result = await authServices.insertUser(value)
    return res.json(result)
}

exports.loginUser = async(req, res, next) => {
   let counter = 0;
   const users = await authServices.findUsers()
   const logged = users.filter(user => {
       counter += 1
       if (user.email === req.body.email) {
           if (user.password === req.body.password) {
               req.profile = req.body
               req.profile.id = counter
               return true
           }
       }
    })

    if (logged){
        req.session.token = await authServices.getToken(req.profile)
        req.session.save()
        res.json(req.session.token)
    }

    

}