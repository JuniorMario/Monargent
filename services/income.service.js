const db = require('../db/mongo')
const calcService = require('../services/calc.service')

exports.insertIncome = async(income, res) => {
    const result = await db.insertIncome(income) 
    return result
}

exports.getIncome = async(id) => {
    const result = await db.findIncome(id)
    return result
}

exports.getAllIncomes = async(res) => {
    const result = await db.findAllIncomes()
    return result
}

exports.deleteIncome = async(id, res) => {
    const result = await db.deleteIncome(id)
    return result
}

exports.calcIncomes = async(res) => {
    const result = await db.findAllIncomes()
    console.log('-------->', result)
    return result
}

exports.updateIncome = async(id, item, res) => {
    const result = await db.updateIncome(id, item)
    return result
}
