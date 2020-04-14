const db = require('../db/mongo')
const calcService = require('../services/calc.service')

exports.insertIncome = async(income, res) => {
    db.insertIncome(income, (err, result) => {
        if (err) return err
        else res.json(result)
    }) 
}

exports.getIncome = async(id, res) => {
    db.findIncome(id, (err, doc) => {
        if (err) res.status(500).json(err)
        else res.json(doc)
    })
}

exports.getAllIncomes = async(res) => {
    db.findAllIncomes((err, docs) => {
        if (err)  {
            res.status(500).json(err)
        }
        else  {
            res.json(docs)
        }
    })
}

exports.deleteIncome = async(id, res) => {
    db.deleteIncome(id, (err, result) => {
        if (err) res.status(500).json(err)
        else res.json({ message: 'Income sucessfully deleted!' })
    })
}

exports.calcIncome = async(res) => {
    db.findAllIncomes((err, docs) => {
        if (err)  {
            res.status(500).json(err)
        }
        else {     
            res.json(calcService.calcAll(docs))
        }
    })
}

exports.updateIncome = async(id, item, res) => {
    db.updateIncome(id, item, (err, result) => {
        if (err) res.status(400).json(err)
        else res.json("Income sucessfully updated!")
    })
}
