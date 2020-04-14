const db = require('../db/mongo')
const calcService = require('../services/calc.service')
const incomeService = require('../services/income.service')
exports.insertIncome = async (req, res, next) => { 
    incomeService.insertIncome(req.body, res)
}

exports.getIncome = async (req, res, next) => {
    incomeService.getIncome(req.params.id, res)
}

exports.getIncomes = async(req, res, next) => {
    incomeService.getAllIncomes(res)
}

exports.deleteIncome = async (req, res, next) => {
    incomeService.deleteIncome(req.params.id, res)
}

exports.calcIncomes = async (req, res, next) => {
    incomeService.calcIncome(res)
}

exports.updateIncome = async (req, res, next) => {
    incomeService.updateIncome(req.params.id, req.body, res)

}