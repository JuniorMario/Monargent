const db = require('../db/mongo')
const categoryService = require('../services/category.service')

exports.createCategory = async(req, res, next) => {
    categoryService.createCategory(req.body, res)
}

exports.getCategories = async(req, res, next) => {
    categoryService.getCategories(res)
}

exports.findCategory = async(req, res, next) => {
    categoryService.findCategory(req.params.name, res)
}

exports.deleteCategory = async(req, res, next) => {
    categoryService.deleteCategory(req.params.id, res)
}

exports.updateCategory = async(req, res, next) => {
    categoryService.updateCategory(req.params.name, req.body, res)
}