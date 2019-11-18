let models = require('../../model/item');
let response = { error: false, success: false }

let retrieveAll = (req, res) => {
    models.Item.find()
        .then(
            data => {
                if (data.length == 0) {
                    response.status = 404
                    response.success = true
                    response.error = false
                    response.data = data
                    response.message = "No Document Found!"
                } else {
                    response.status = 200
                    response.success = true
                    response.error = false
                    response.data = data
                    response.message = "Successfully Retrived All!"
                }
            }
        )
        .catch(err => {
            if (err) {
                response.status = 503
                response.error = true
                response.data = err
                response.message = "Service Unavailable!"
            }
        })
    res.send(response);
}


let retrieveOne = (req, res) => {
    console.log(req.params.id);
    
    let id = req.params.id
    // return new Promise((resolve, reject) => {
        models.Item.findOne({ _id: id }
            , (err, data) => {
                if (err) {
                    response.status = 404
                    response.success = true
                    response.data = err
                    response.message = "No Document found!"
                } else {
                    response.status = 200
                    response.success = true
                    response.data = data
                    response.message = "Successfully Retrieved One!"
                }
            }
        )
        // .then(data=>{}).catch(err=>{})
    // })

        // .then(
        //     data => {
        //         if (data.length == 0) {
        //             response.status = 404
        //             response.success = true
        //             response.error = false
        //             response.data = data
        //             response.message = "No Document Found!"
        //         } else {
        //             response.status = 200
        //             response.success = true
        //             response.error = false
        //             response.data = data
        //             response.message = "Successfully Retrived All!"
        //         }
        //     }
        // )
        .catch(err => {
            if (err) {
                response.status = 503
                response.error = true
                response.data = err
                response.message = "Service Unavailable!"
            }
        })
    res.send(response);
}

module.exports = { retrieveAll, retrieveOne }