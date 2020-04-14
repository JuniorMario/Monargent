const db = require('../db/mongo')
const calcService = require('../services/calc.service')

exports.createCategory = async(category, res) => {
    db.insertCategory(category, (err, result) => {
        if (err) res.status(400).json(err)
        else res.json(result)
    })
}

exports.getCategories = async(res) => {
    db.getAllCategories((err, docs) => {
        if (err)  {
            res.status(500).json(err)
        }
        else  {
            res.json(docs)
        }
    })
}

exports.findCategory = async(name, res) => {
    db.findCategory(name, (err, doc) => {
        if (err) res.status(500).json(err)
        else res.json(doc)
    })
}

exports.deleteCategory = async(id, res) => {
    db.deleteCategory(id, (err, result) => {
        if (err) res.status(500).json(err)
        else res.json({ message: 'Category sucessfully deleted!' })
    })
}

exports.updateCategory = async(name, item, res) => {
    db.updateCategory(name, item, (err, result) => {
        if (err) res.status(400).json(err)
        else res.json("Category sucessfully updated!")
    })
}