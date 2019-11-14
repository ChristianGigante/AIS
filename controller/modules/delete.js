let models = require('../../model/item');
let response = { error: false, success: false };

let deleteAllItems = (req, res) => {
    models.Item.deleteMany()
        .then(data => {
            response.success = true
            response.error = false
            response.data = data
            response.message = "Successfully Deleted All!"
        })
        .catch(err => {
            response.status = 503
            response.error = true
            response.data = err
            response.message = "Service Unavailable!"
        })
    res.send(response);
}

module.exports = { deleteAllItems }