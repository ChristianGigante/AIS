
const express = require("express");
const routes = express.Router();
const mainController = require('../controller/mainController');
// const jwt = require("jsonwebtoken")

//CRUDitems
routes.route('/createItem').post((req, res) => {
    mainController.createItem(req, res);
})

routes.route('/retrieveItems').get((req, res) => {
    mainController.retrieveAllItems(req, res);
})
routes.route('/retrieveOneItem/:id').post((req, res) => {
    mainController.retrieveOneItem(req, res);
})

routes.route('/updateItem/:id').post((req, res) => {
    mainController.updateOneItem(req, res);
})

routes.route('/deleteItem/:id').delete((req, res) => {
    mainController.deleteOneItem(req, res);
})

module.exports = routes