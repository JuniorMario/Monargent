const Joi = require('joi')

exports.ProfileValidator = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.number().integer().required(),
    password: Joi.string().min(1).max(255).required(),
  }).options({ stripUnknown: true })

