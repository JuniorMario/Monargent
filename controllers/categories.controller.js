const db = require('../db/mongo')
const categoryService = require('../services/category.service')

exports.createCategory = async(req, res, next) => {
    const result = await categoryService.createCategory(req.body)
    return res.json(result)
}

exports.getCategories = async(req, res, next) => {
    const result = await  categoryService.getCategories()
    return res.json(result)
}

exports.findCategory = async(req, res, next) => {
    const result = await categoryService.findCategory(req.params.name)
    return res.json(result)
}

exports.deleteCategory = async(req, res, next) => {
    const {result} = await categoryService.deleteCategory(req.params.id)
    if (result.n == 0) {
        res.status('401').json('Não foi possível deletar a Category.')
    }
    res.json('Category deletada com sucesso!')
}

exports.updateCategory = async(req, res, next) => {
    const {result} = await categoryService.updateCategory(req.params.name, req.body, res)
    if (result.n == 0) {
        res.status('401').json('Não foi possível atualizar a Category.')
    }
    res.json('Category atualizada com sucesso!')
}