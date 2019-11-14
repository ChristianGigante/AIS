
const express = require("express");
const routes = express.Router();
const mainController = require('../controller/mainController');
// const jwt = require("jsonwebtoken")

//CRUDitems
routes.route('/createItem').post((req, res) => {
    mainController.createItem(req, res);
})

routes.route('/retrieveItems').post((req, res) => {
    mainController.retrieveAllItems(req, res);
})
routes.route('/retrieveItem/:id').post((req, res) => {
    mainController.retrieveOneItem(req, res);
})

routes.route('/deleteItems').post((req, res) => {
    mainController.deleteAllItems(req, res);
})

module.exports = routes