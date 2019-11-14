const model = require('../../model/item');
var response = { error: false, success: false, message: null, data: null }
let createItem = (req, res) => {

    // Validate request
    if (!req.body.name) {
        response.message = "Item name can not be empty"
    }

    let name = req.body.name;
    let quantity = req.body.quantity;
    let priority = req.body.priority;

    let Item = new model.Item({
        name,
        quantity,
        priority
    })

    Item.save()
        .then(data => {
            response.error = false
            response.success = true
            response.data = data;
            response.message = "Created Successfully!"
        })
        .catch(err => {
            response.error = err
            response.message = "Service Unavailable!"
        })

    res.send(response);

}

module.exports = { createItem }