const db = require('../db/mongo')
const calcService = require('../services/calc.service')

exports.calcLeft = async (req, res, next) => {
    let income = 0
    let expense = 0
    db.findAllExpenses((err, docs) => {
        if (err)  {
            res.status(500).json(err)
        }
        else  {
            expense = calcService.calcAll(docs).total
        }
    })

    db.findAllIncomes((err, docs) => {
            if (err)  {
                res.status(500).json(err)
            }
            else {
                income = calcService.calcAll(docs).total
            }
        })
    setTimeout(function(){ res.json({income: income, expenses: expense, left:  income - expense}) }, 1000);

}