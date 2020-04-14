const express = require('express');
const router = express.Router();
const _ = require('lodash')


function parse(name) {
    let [controllerName, methodName] = name.split('@')
    controllerName = controllerName.toLowerCase().replace('controller', '.controller')
  
    const controller = require(`./controllers/${controllerName}.controller`)
    const method = controller[methodName]
  
    if (_.isNil(method) || !_.isFunction(method)) {
      return (req, res, next) => res.status(200).json('Not implemented yet')
    }
    return method
  }
  
console.log('Starting routes...')



// Incomes routes
router.post('/add_income', parse('incomes@insertIncome'))
router.get('/income/:id', parse('incomes@getIncome'))
router.get('/incomes', parse('incomes@getIncomes'))
router.get('/incomes/calc', parse('incomes@calcIncomes'))
router.delete('/incomes/delete/:id', parse('incomes@deleteIncome'))

// Expenses routes
router.post('/add_expense', parse('expenses@insertExpense'))
router.get('/expense/:id', parse('expenses@findExpense'))
router.get('/expenses', parse('expenses@findAllExpenses'))
router.get('/expenses/calc', parse('expenses@calcExpenses'))
router.delete('/expenses/delete/:id', parse('expenses@deleteExpense'))

//Operations routes
router.get('/leftover', parse('operations@calcLeft'))


// View routes
router.get('/', parse('view@index'))
module.exports = router;
