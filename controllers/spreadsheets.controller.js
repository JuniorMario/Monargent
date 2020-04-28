const xlsxPopulate = require('xlsx-populate');
const incomeService = require('../services/income.service')
const spreadSheetService = require('../services/spreadsheets.service')
const expenseService = require('../services/expense.service')

exports.incomeSheets = async (req, res, next) => {
    var workbook = await xlsxPopulate.fromBlankAsync()

    const bind = await incomeService.getAllIncomes()
    const header = await spreadSheetService.json2Array([{ name: "Name" }, { name: "Description" }, { name: "Category" }, { name: "value" }], bind)

    workbook = await spreadSheetService.writeExpenseArray(header, workbook)
    workbook.sheet("Sheet1").range("C2:F2").style("fill", "#4F4F4F");
    workbook.sheet("Sheet1").range("C2:F2").style("bold", true);
    workbook.toFileAsync(`./public/income-${Date.now()}.xlsx`);

    return res.json("Check /public.")

}

exports.expenseSheets = async (req, res, next) => {
    var workbook = await xlsxPopulate.fromBlankAsync()

    const bind = await expenseService.findAllExpenses()
    const header = await spreadSheetService.json2Array([{ name: "Name" }, { name: "Description" }, { name: "Category" }, { name: "value" }], bind)

    workbook = await spreadSheetService.writeExpenseArray(header, workbook)
    workbook = await spreadSheetService.writeExpenseArray(header, workbook)
    workbook.sheet("Sheet1").range("C2:F2").style("fill", "#4F4F4F");
    workbook.sheet("Sheet1").range("C2:F2").style("bold", true);
    workbook.toFileAsync(`./public/expense-${Date.now()}.xlsx`);
    return res.json("Check /public.")

}

exports.generalSheets = async (req, res, next) => {
    var workbook = await xlsxPopulate.fromBlankAsync()

    const bind = await calcService.calcMonth()
    const header = await spreadSheetService.json2Array([{ name: "Entradas" }, { name: "Saídas" }, { name: "Restante" }], bind)

}

