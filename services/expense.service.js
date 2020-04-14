const db = require('../db/mongo')
const calcService = require('../services/calc.service')

exports.insertExpense = async(expense, res) => {
    db.insertExpense(expense, (err, result) => {
        if (err) res.status(400).json(err)
        else  res.json(result)
    }) 
}

exports.findExpense = async (id, res) => {
    db.findExpense(id, (err, doc) => {
        if (err) res.status(500).json(err)
        else res.json(doc)
        })
}

exports.findAllExpenses = async(res) => {
    db.findAllExpenses((err, docs) => {
        if (err)  {
            res.status(500).json(err)
        }
        else  {
            res.json(docs)
        }
    })
}

exports.deleteExpense = async(id, res) => {
    global.db.deleteExpense(id, (err, result) => {
        if (err) res.status(500).json(err)
        else res.json({ message: 'Expense sucessfully deleted!' })
    })
}


exports.calcExpenses = async(res) => {
    db.findAllExpenses((err, docs) => {
        if (err)  {
            res.status(500).json(err)
        }
        else {
            res.json(calcService.calcAll(docs))
        }
    })
}

exports.updateExpense = async(id, item, res) => {
    db.updateExpense(id, item, (err, result) => {
        if (err) res.status(400).json(err)
        else res.json("Expense sucessfully updated!")
    })
}