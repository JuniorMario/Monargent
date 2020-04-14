const db = require('../db/mongo')


exports.createCategory = async(req, res, next) => {
    const category = req.body
    db.insertCategory(category, (err, result) => {
        if (err) res.status(400).json(err)
        else res.json(result)
    })
}

exports.getCategories = async(req, res, next) => {
    db.getAllCategories((err, docs) => {
        if (err)  {
            res.status(500).json(err)
        }
        else  {
            res.json(docs)
        }
    })
}

exports.findCategory = async(req, res, next) => {
    db.findCategory(req.params.name, (err, doc) => {
        if (err) res.status(500).json(err)
        else res.json(doc)
        })
}

exports.deleteCategory = async(req, res, next) => {
    const id = req.params.id
    db.deleteCategory(id, (err, result) => {
        if (err) res.status(500).json(err)
        else res.json({ message: 'Category sucessfully deleted!' })
    })
}

exports.updateCategory = async(req, res, next) => {
    const updated = req.body
    db.updateCategory(req.params.name, updated, (err, result) => {
        if (err) res.status(400).json(err)
        else res.json("Category sucessfully updated!")
    })
}