const db = require('../db/mongo')
const calcService = require('../services/calc.service')

exports.createCategory = async(category) => {
    const result = await db.insertCategory(category)
    return result
}

exports.getCategories = async() => {
    const result = await db.getAllCategories()
    return result
}

exports.findCategory = async(name) => {
    const result = await db.findCategory(name)
    return result
}

exports.deleteCategory = async(id) => {
    const result = await db.deleteCategory(id)
    return result
}

exports.updateCategory = async(name, item) => {
    const result = await db.updateCategory(name, item)
    return result
}