const db = require('../db/mongo')
const calcService = require('../services/calc.service')

exports.insertIncome = async (req, res, next) => {
    const income = req.body 
   
    db.insertIncome(income, (err, result) => {
        if (err) return err
        else res.json(result)
    }) 
}

exports.getIncome = async (req, res, next) => {
    db.findIncome(req.params.id, (err, doc) => {
        if (err) res.status(500).json(err)
        else res.json(doc)
    })
}

exports.getIncomes = async(req, res, next) => {
    db.findAllIncomes((err, docs) => {
        if (err)  {
            res.status(500).json(err)
        }
        else  {
            res.json(docs)
        }
})
}

exports.deleteIncome = async (req, res, next) => {
    const id = req.params.id
    db.deleteIncome(id, (err, result) => {
        if (err) res.status(500).json(err)
        else res.json({ message: 'Income sucessfully deleted!' })
    })
}

exports.calcIncomes = async (req, res, next) => {
    db.findAllIncomes((err, docs) => {
        if (err)  {
            res.status(500).json(err)
        }
        else {     
            res.json(calcService.calcAll(docs))
        }
    })
}

exports.updateIncome = async (req, res, next) => {
    const updated = req.body
    db.updateIncome(req.params.id, updated, (err, result) => {
        if (err) res.status(400).json(err)
        else res.json("Income sucessfully updated!")
    })
}