const mongoClient = require("mongodb").MongoClient
const ObjectId = require("mongodb").ObjectId


mongoClient.connect("mongodb://localhost:27018/datab")
    .then(conn => global.conn = conn.db("datab"))
    .catch(err => console.log(err))

function findAllExpenses(callback) {
    global.conn.collection('expenses').find().toArray(callback)
}

function findExpense(id, callback) {
    global.conn.collection('expenses').findOne(new ObjectId(id), callback)
}

function  findAllIncomes(callback) {
    global.conn.collection('incomes').find().toArray(callback)
}

function findIncome(id, callback) {
    global.conn.collection('incomes').findOne(new ObjectId(id), callback)
}

function findCategory(name, callback) {
    global.conn.collection('categories').findOne({name: name}, callback)
}

function  getAllCategories(callback) {
    global.conn.collection('categories').find().toArray(callback)
}

function insertExpense(expense, callback) {
    global.conn.collection('expenses').insert(expense, callback)
}
function insertIncome(expense, callback) {
    global.conn.collection('incomes').insert(expense, callback)
}

function insertCategory(expense, callback) {
    global.conn.collection('categories').insert(expense, callback)
}

function patchCustomer(id, updates, callback) {
    global.conn.collection('customers').update({ _id: new ObjectId(id) }, { $set: updates }, callback)
}

function updateCustomer(id, customer, callback) {
    global.conn.collection('customers').update({ _id: new ObjectId(id) }, customer, callback)
}


function updateCategory(name, item, callback) {
    global.conn.collection('categories').update({name : name}, { $set: item }, callback)
}


function updateIncome(id, item, callback) {
    global.conn.collection('incomes').update({_id : new ObjectId(id)}, { $set: item }, callback)
}

function updateExpense(id, item, callback) {
    global.conn.collection('expenses').update({ _id : new ObjectId(id)}, { $set: item }, callback)
}

function deleteExpense(id, callback) {
    global.conn.collection('expenses').deleteOne({ _id: new ObjectId(id) }, callback)
}

function deleteIncome(id, callback) {
    global.conn.collection('incomes').deleteOne({ _id: new ObjectId(id) }, callback)
}

function deleteCategory(id, callback) {
    global.conn.collection('categories').deleteOne({ _id: new ObjectId(id) }, callback)
}
module.exports = {
    findAllExpenses, findExpense,
    insertExpense, updateCustomer,
    patchCustomer, deleteExpense, deleteIncome,
    insertIncome, findIncome, findAllIncomes, insertCategory,
    getAllCategories, findCategory, deleteCategory, updateCategory,
    updateIncome, updateExpense
}