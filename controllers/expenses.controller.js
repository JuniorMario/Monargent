const db = require('../db/mongo')
const expenseService = require('../services/expense.service')
exports.insertExpense = async(req, res, next) => {
    const result = await expenseService.insertExpense(req.body)
    //res.render("expense", {msg: "Expense was successfully added!"})
    return res.json('Saída adicionada com sucesso!')
}

exports.renderAdd = async(req, res, next) => {
    res.render('expense', {msg:""})
}
exports.findExpense = async(req, res, next) => {
    const result = await expenseService.findExpense(req.params.id, res)
    return res.json(result)
}

exports.findAllExpenses = async (req, res, next) => {
    const result =  await expenseService.findAllExpenses()
    res.json(result)
}

exports.deleteExpense = async(req, res, next) => {
    const {result} = await expenseService.deleteExpense(req.params.id)
    if (result.n == 0) {
        res.status('401').json('Não foi possível deletar a expense.')
    }
    res.json('Expense deletada com sucesso!')
}

exports.calcExpenses = async (req, res, next) => {
    const result = await expenseService.calcExpenses()
    return res.json(result)
}

exports.updateExpense = async (req, res, next) => {
    const {result} = await expenseService.updateExpense(req.params.id, req.body)
    if (result.nModified == 0) {
        res.status('401').json('Não foi possível atualizar a expense.')
    }

    res.json("Expense atualizada com sucesso.")
}