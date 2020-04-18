exports.json2Array = async (fields, result) => {
    let out = [];
    let temp = [];
    fields.forEach(item => {
        temp.push(item.name)
    });
    // temp array works as column headers in .xlsx file
    out.push(temp)
    result.forEach(item => {
        out.push([item.name, item.description, item.category,  item.value.toString()])
    })
    return out;
}

exports.writeExpense = async(name, description , category, value, workbook) => {
    workbook.sheet("Sheet1").cell("C2").value([
        [name,description, category, value.toString()],
    ])
    return workbook
}

exports.writeExpenseArray = async (array, workbook) => {
    workbook.sheet("Sheet1").cell("C2").value(array)
    return workbook
}
