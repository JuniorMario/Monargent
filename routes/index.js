const calcService = require('../services/calc.service')
var express = require('express');
var router = express.Router();

/* GET users listing. */

router.post('/add_expense', (req, res) => {
    const expense = req.body 
    global.db.insertExpense(expense, (err, result) => {
        if (err) res.status(500).json(err)
        else res.json(result)
    }) 
})

router.get('/expense/:id', (req, res) =>  
    global.db.findExpense(req.params.id, (err, doc) => {
    if (err) res.status(500).json(err)
    else res.json(doc)
    }))
  
router.get('/expenses', (req, res) => global.
    db.findAllExpenses((err, docs) => {
        if (err)  {
            res.status(500).json(err)
        }
        else  {
            res.json(docs)
        }
    }))

router.get('/expenses/calc', (req, res) => global.
    db.findAllExpenses((err, docs) => {
        if (err)  {
            res.status(500).json(err)
        }
        else {
            res.json(calcService.calcAll(docs))
        }
    }))

router.post('/add_income', (req, res) => {
        const expense = req.body 
        global.db.insertIncome(expense, (err, result) => {
            if (err) res.status(500).json(err)
            else res.json(result)
        }) 
    })


router.get('/income/:id', (req, res) =>  
    global.db.findIncome(req.params.id, (err, doc) => {
    if (err) res.status(500).json(err)
    else res.json(doc)
    }))
  
router.get('/incomes', (req, res) => global.
    db.findAllIncomes((err, docs) => {
        if (err)  {
            res.status(500).json(err)
        }
        else  {
            res.json(docs)
        }
}))

router.get('/incomes/calc', (req, res) => global.
    db.findAllIncomes((err, docs) => {
        if (err)  {
            res.status(500).json(err)
        }
        else {     
            res.json(calcService.calcAll(docs))
        }
    }))


//Calculates the money left after the incomes and expenses
router.get('/leftover', (req, res) => {
    let income = 0
    let expense = 0
    global.db.findAllExpenses((err, docs) => {
        if (err)  {
            res.status(500).json(err)
        }
        else  {
            expense = calcService.calcAll(docs).total
        }
    })

    global.db.findAllIncomes((err, docs) => {
            if (err)  {
                res.status(500).json(err)
            }
            else {
                income = calcService.calcAll(docs).total
            }
        })
    setTimeout(function(){ res.json({income: income, expenses: expense, left:  income - expense}) }, 1000);

    
})

router.delete('/expenses/delete/:id', (req, res) => {
    const id = req.params.id
    global.db.deleteExpense(id, (err, result) => {
        if (err) res.status(500).json(err)
        else res.json({ message: 'Expense sucessfully deleted!' })
    })
})

router.delete('/incomes/delete/:id', (req, res) => {
    const id = req.params.id
    global.db.deleteIncome(id, (err, result) => {
        if (err) res.status(500).json(err)
        else res.json({ message: 'Income sucessfully deleted!' })
    })
})

module.exports = router;
