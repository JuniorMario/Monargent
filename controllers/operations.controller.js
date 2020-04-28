const db = require('../db/mongo')
const calcService = require('../services/calc.service')

exports.calcLeft = async (req, res, next) => {
    return res.json({ income: await calcService.calcIncomes(), expenses: await calcService.calcExpenses(), left: await calcService.calcIncomes() - await calcService.calcExpenses() })

}

