

var path = require('path')

exports.index = async(req, res, next) => {
    res.sendFile(path.join(__dirname, '../views', 'index.html'));
}