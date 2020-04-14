const db = require('../db/mongo')
const calcService = require('../services/calc.service')

exports.insertExpense = async(req, res, next) => {
    const expense = req.body 
    db.insertExpense(expense, (err, result) => {
        if (err) res.status(500).json(err)
        else res.json(result)
    }) 
}

exports.findExpense = async(req, res, next) => {
    db.findExpense(req.params.id, (err, doc) => {
        if (err) res.status(500).json(err)
        else res.json(doc)
        })
}

exports.findAllExpenses = async (req, res, next) => {
    db.findAllExpenses((err, docs) => {
        if (err)  {
            res.status(500).json(err)
        }
        else  {
            res.json(docs)
        }
    })
}

exports.deleteExpense = async(req, res, next) => {
    const id = req.params.id
    global.db.deleteExpense(id, (err, result) => {
        if (err) res.status(500).json(err)
        else res.json({ message: 'Expense sucessfully deleted!' })
    })
}

exports.calcExpenses = async (req, res, next) => {
    db.findAllExpenses((err, docs) => {
        if (err)  {
            res.status(500).json(err)
        }
        else {
            res.json(calcService.calcAll(docs))
        }
    })
}

