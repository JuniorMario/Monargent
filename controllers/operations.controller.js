const db = require('../db/mongo')
const calcService = require('../services/calc.service')

exports.calcLeft = async (req, res, next) => {

    res.json({ income: await this.calcIncomes(), expenses: await this.calcExpenses(), left: await this.calcIncomes() - await this.calcExpenses() }) 
 

}

exports.calcExpenses = async () => {
    const expenses = await db.findAllExpenses()
    //console.log(expenses)
    console.log(await calcService.calcAll(expenses))
    return  await calcService.calcAll(expenses)
}

exports.calcIncomes = async () => {
    const incomes = await db.findAllIncomes()
    return  await calcService.calcAll(incomes)
}

exports.calcGeneral = async () => {
    return await this.calcIncomes() - await this.calcExpenses()
}