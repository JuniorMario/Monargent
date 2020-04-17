const db = require('../db/mongo')
const calcService = require('../services/calc.service')

exports.insertExpense = async(expense) => {
    const response = db.insertExpense(expense)
    return response 
}

exports.findExpense = async (id) => {
    const response = await db.findExpense(id)
    return response
}

exports.findAllExpenses = async () => { 
    const response =  await db.findAllExpenses()
    return response
}

exports.deleteExpense = async(id) => {
    const response = await global.db.deleteExpense(id)
    return response
}


exports.calcExpenses = async() => {
    const response = await db.findAllExpenses()
    const calc = calcService.calcAll(response)
    return calc
}

exports.updateExpense = async(id, item) => {
    const response = await db.updateExpense(id, item)
    return response
}