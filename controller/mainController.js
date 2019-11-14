const modules = {
    createItem: require('./modules/create'),
    retrieveItem: require('./modules/retrieve'),
    deleteItem: require('./modules/delete'),

}

let createItem = (req, res) => {
    modules.createItem.createItem(req, res);
}

let retrieveAllItems = (req, res) => {
    modules.retrieveItem.retrieveAll(req, res);
}

let retrieveOneItem = (req, res) => {
    modules.retrieveItem.retrieveOne(req, res);
}

let deleteAllItems = (req, res) => {
    modules.deleteItem.deleteAllItems(req, res);
}
module.exports = { createItem, retrieveAllItems, retrieveOneItem, deleteAllItems }