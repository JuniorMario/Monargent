
exports.calcAll = (values) => {
    let total = 0
    values.filter(each => total += each.value)
    return {total}
}