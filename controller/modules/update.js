//findByIdAndUpdate 
const models = require('../../model/item');
var response = { error: false, success: false, data: null };

let updateOne = (req, res) => {
    console.log(req.body)
    models.Item.findByIdAndUpdate(
        { _id: req.params.id }, //find match item in DB
        req.body,//the update to be made
        (err, data) => { //callback function            
            if (err) { // Handle any possible database errors
                response.status = 404
                response.error = err
                response.message = "Database Update Error!"
            } else {
                response.status = 200
                response.data = data
                response.message = "Updated Successfully!"
            }
        })
        .catch(err => {
            response.error = err
            response.status = 503
            response.message = "Service Unavailable"
        })
    res.send(response);
}
module.exports = { updateOne }