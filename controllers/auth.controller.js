const authServices = require('../services/auth.service')
const {ProfileValidator} = require('../validators')

exports.registerUser = async(req, res, next) => {
    const {
        value,
        error,
      } = ProfileValidator.validate(req.body)

    if (error) {
          console.log(error)
          return res.status('401').json('Um ou mais campos são inválidos')
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
        return res.json(req.session.token)
    }
    return res.json("A senha e o email não coincidem")

    

}

exports.login = async(req, res, next) => {
    res.render("login", {msg: ""})
}

exports.register = async(req, res, next) => {
    res.render("register", {msg: ""})
    return res.json(result)
}