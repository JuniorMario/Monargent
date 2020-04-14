const db = require('../db/mongo')
const expenseService = require('../services/expense.service')
exports.insertExpense = async(req, res, next) => {
    const expense = req.body 
    expenseService.insertExpense(expense, res)
  
}

exports.findExpense = async(req, res, next) => {
    expenseService.findExpense(req.params.id, res)
}

exports.findAllExpenses = async (req, res, next) => {
    expenseService.findAllExpenses(res)
}

exports.deleteExpense = async(req, res, next) => {
    expenseService.deleteExpense(req.params.id, res)
}

exports.calcExpenses = async (req, res, next) => {
    expenseService.calcExpenses(res)
}

exports.updateExpense = async (req, res, next) => {
    expenseService.updateExpense(req.params.id, req.body, res)
}