
exports.calcAll = async (values) => {
    let total = 0
    values.filter(each => total += each.value)
    return total
}

exports.calcMonth = () => {

}