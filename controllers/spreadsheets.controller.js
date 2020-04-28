const xlsxPopulate = require('xlsx-populate');
const incomeService = require('../services/income.service')
const spreadSheetService = require('../services/spreadsheets.service')
const expenseService = require('../services/expense.service')
const calcService = require('../services/calc.service')

exports.incomeSheets = async (req, res, next) => {
    var workbook = await xlsxPopulate.fromBlankAsync()

    const bind = await incomeService.getAllIncomes()
    const header = await spreadSheetService.json2Array([{ name: "Name" }, { name: "Description" }, { name: "Category" }, { name: "value" }], bind)
    workbook = await spreadSheetService.writeExpenseArray(header, workbook)
    workbook.sheet("Sheet1").range("C2:F2").style("fill", "#4F4F4F");
    workbook.sheet("Sheet1").range("C2:F2").style("bold", true);
    workbook.toFileAsync(`./public/spreadsheets/income-${Date.now()}.xlsx`);

    return res.json("Check /public/spreadsheets.")

}

exports.expenseSheets = async (req, res, next) => {
    var workbook = await xlsxPopulate.fromBlankAsync()

    const bind = await expenseService.findAllExpenses()
    const header = await spreadSheetService.json2Array([{ name: "Name" }, { name: "Description" }, { name: "Category" }, { name: "value" }], bind)

    workbook = await spreadSheetService.writeExpenseArray(header, workbook)
    workbook = await spreadSheetService.writeExpenseArray(header, workbook)
    workbook.sheet("Sheet1").range("C2:F2").style("fill", "#4F4F4F");
    workbook.sheet("Sheet1").range("C2:F2").style("bold", true);
    workbook.toFileAsync(`./public/spreadsheets/expense-${Date.now()}.xlsx`);
    return res.json("Check /public/spreadsheets.")

}

exports.generalSheets = async (req, res, next) => {
    var workbook = await xlsxPopulate.fromBlankAsync()

    const bind = [await calcService.calcIncomes(), await calcService.calcExpenses(), await calcService.calcGeneral()]
    const header = [["Incomes","Expenses" , "Left" ], bind]
    workbook = await spreadSheetService.writeGeneral(header, workbook)

    workbook.sheet("Sheet1").range("C2:E2").style("fill", "#4F4F4F");
    workbook.sheet("Sheet1").range("C2:E2").style("bold", true);
    workbook.toFileAsync(`./public/spreadsheets/general-${Date.now()}.xlsx`);
    return res.json("Check /public/spreadsheets")
}

