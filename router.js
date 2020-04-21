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
router.get('/add_income', parse('incomes@renderAdd'))
router.get('/income/:id', parse('incomes@getIncome'))
router.get('/incomes', parse('incomes@getIncomes'))
router.get('/incomes/calc', parse('incomes@calcIncomes'))
router.delete('/incomes/delete/:id', parse('incomes@deleteIncome'))
router.put('/income/:id', parse('incomes@updateIncome'))

// Expenses routes
router.post('/add_expense', parse('expenses@insertExpense'))
router.get('/add_expense', parse('expenses@renderAdd'))
router.get('/expense/:id', parse('expenses@findExpense'))
router.get('/expenses', parse('expenses@findAllExpenses'))
router.get('/expenses/calc', parse('expenses@calcExpenses'))
router.delete('/expenses/delete/:id', parse('expenses@deleteExpense'))
router.put('/expense/:id', parse('expenses@updateExpense'))

//Operations routes
router.get('/leftover', parse('operations@calcLeft'))

//Category routes 
router.post('/category', parse('categories@createCategory'))
router.get('/categories', parse('categories@getCategories'))
router.get('/category/:name', parse('categories@findCategory'))
router.delete('/category/:id', parse('categories@deleteCategory'))
router.put('/category/:name', parse('categories@updateCategory'))

// View routes
router.get('/', parse('view@index'))

//Spreadsheets routes
router.get('/spreadsheets/incomes', parse('spreadsheets@incomeSheets'))
router.get('/spreadsheets/expenses', parse('spreadsheets@expenseSheets'))

//Auth routes 
router.post('/auth/register', parse('auth@registerUser'))
router.post('/auth/login', parse('auth@loginUser'))
router.get('/auth/login', parse('auth@login'))

module.exports = router;
