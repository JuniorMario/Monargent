const xlsxPopulate = require('xlsx-populate');
const incomeService = require('../services/income.service')
const spreadSheetService = require('../services/spreadsheets.service')
exports.incomeSheets = async(req, res, next) => {
    var workbook =  await xlsxPopulate.fromBlankAsync()

    const bind = await incomeService.getAllIncomes()
    const header = await spreadSheetService.json2Array([{name:"Name"}, {name:"Description"}, {name:"Category"}, {name:"value"}], bind)

    workbook = await spreadSheetService.writeExpenseArray(header, workbook)
    workbook.sheet("Sheet1").range("C2:F2").style("fill", "#4F4F4F");
    workbook.sheet("Sheet1").range("C2:F2").style("bold", true);
        
    return res.json("Check /public.")

}
