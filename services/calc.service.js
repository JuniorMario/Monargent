const db = require('../db/mongo')

exports.calcAll = async (values) => {
    let total = 0
    values.filter(each => total += each.value)
    return total
}

exports.calcExpenses = async () => {
    const expenses = await db.findAllExpenses()
    return await this.calcAll(expenses)
}

exports.calcIncomes = async () => {
    const incomes = await db.findAllIncomes()
    return await this.calcAll(incomes)
}

exports.calcGeneral = async () => {
    return await this.calcIncomes() - await this.calcExpenses()
}

