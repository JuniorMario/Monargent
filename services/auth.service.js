const db = require('../db/mongo')
const jwt = require('jsonwebtoken')

const tokenSecret = "thisisamotherfuckingsecret"

exports.insertUser = async(user) => {
    const result = await db.insertUser(user)
    return result
}

exports.findUsers = async() => {
    const result = await db.getAllUsers()
    return result
}

exports.getToken = async(profile) => {
    return jwt.sign(profile, tokenSecret)
}
