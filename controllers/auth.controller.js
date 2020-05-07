const authServices = require('../services/auth.service')
const { ProfileValidator } = require('../validators')

exports.registerUser = async (req, res, next) => {
    const {
        value,
        error,
    } = ProfileValidator.validate(req.body)

    if (error) {
        return res.status('401').json('Um ou mais campos são inválidos')
    }
    await authServices.insertUser(value)
    return res.json('Cadastrado com sucesso!')
}

exports.loginUser = async (req, res, next) => {
    const users = await authServices.findUsers()
    const [resp] = users.filter(user => user.email === req.body.email && user.password === req.body.password)
    if (resp) {
        req.profile = req.body
        req.profile.id = resp.id
        req.session.token = await authServices.getToken(req.profile)
        req.session.save()
        return res.json(req.session.token)
    }
   return res.json('Não foi possível fazer o login.')

}

exports.login = async (req, res, next) => {
    res.render("login", { msg: "" })
}

exports.register = async (req, res, next) => {
    res.render("register", { msg: "" })
    return res.json(result)
}