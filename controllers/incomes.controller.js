const incomeService = require('../services/income.service')
const path = require('path')

exports.insertIncome = async (req, res, next) => { 
    const result = await incomeService.insertIncome(req.body)
    res.render("income", {msg: "Income was successfully added!"})
    return res.json(result)
}

exports.renderAdd = async(req, res, next) => {
    res.render('income', {msg:""})
}
exports.getIncome = async (req, res, next) => {
    const result = await incomeService.getIncome(req.params.id)
    return res.json(result)
}

exports.getIncomes = async(req, res, next) => {
    const result = await incomeService.getAllIncomes()
    return res.json(result)
}

exports.deleteIncome = async (req, res, next) => {
    const {result} = await incomeService.deleteIncome(req.params.id)
    if (result.n === 0) {
        return res.status(401).json('Não foi possível deletar o Income.')
    }
    return res.json('Income deletado com sucesso!')
}

exports.calcIncomes = async (req, res, next) => {
    const result = await incomeService.calcIncome()
    return res.json(result)
}

exports.updateIncome = async (req, res, next) => {
    const {result} = await incomeService.updateIncome(req.params.id, req.body)
    if (result.nModified === 0) {
        return res.status(401).json('Não foi possível atualizar o Income.')
    }
    return res.json('Income atualizado com sucesso!')

}