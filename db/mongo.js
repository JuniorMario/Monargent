const mongoClient = require("mongodb").MongoClient
const ObjectId = require("mongodb").ObjectId


mongoClient.connect("mongodb://monargent.herokuapp.com:27017/datab")
    .then(conn => global.conn = conn.db("datab")) 
    .catch(err => console.log(err))
  
exports.findAllExpenses  = async() => {
    return  await global.conn.collection('expenses').find().toArray()
} 

exports.findExpense = async(id) => {
    return  await global.conn.collection('expenses').findOne(new ObjectId(id))
}

exports.findAllIncomes = async() => {
    return  await global.conn.collection('incomes').find().toArray() 
}

exports.findIncome = async(id) => {
    return  await global.conn.collection('incomes').findOne(new ObjectId(id))
}

exports.findCategory = async(name) => {
    return  await global.conn.collection('categories').findOne({name: name})
}

exports.getAllCategories = async() => {
    return  await global.conn.collection('categories').find().toArray()
}

exports.insertExpense = async(expense) => {
    return  await global.conn.collection('expenses').insert(expense)
}
exports.insertIncome = async(expense) => {
    return  await global.conn.collection('incomes').insert(expense)
}

exports.insertCategory = async(expense) =>  {
    return  await global.conn.collection('categories').insert(expense)
}

exports.insertUser = async(user) =>  {
    return  await global.conn.collection('users').insert(user)
}

exports.getAllUsers = async() => {
    return  await global.conn.collection('users').find().toArray()
}
exports.patchCustomer = async(id, updates) => {
    return  await global.conn.collection('customers').update({ _id: new ObjectId(id) }, { $set: updates }, callback)
}

exports.updateCustomer = async(id, customer) => {
    return  await global.conn.collection('customers').update({ _id: new ObjectId(id) }, customer)
}


exports.updateCategory = async(name, item) => {
    return  await global.conn.collection('categories').update({name : name}, { $set: item })
}


exports.updateIncome = async(id, item) => {
    return  await global.conn.collection('incomes').update({_id : new ObjectId(id)}, { $set: item })
}

exports.updateExpense = async (id, item) => {
    return  await global.conn.collection('expenses').update({ _id : new ObjectId(id)}, { $set: item })
}

exports.deleteExpense = async(id) => {
    return  await global.conn.collection('expenses').deleteOne({ _id: new ObjectId(id) })
}

exports.deleteIncome = async(id, callback) => {
    return  await global.conn.collection('incomes').deleteOne({ _id: new ObjectId(id) })
}

exports.deleteCategory = async(id) => {
    return  await global.conn.collection('categories').deleteOne({ _id: new ObjectId(id) })
}
