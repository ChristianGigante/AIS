const modules = {
    createItem: require('./modules/create'),
    retrieveItem: require('./modules/retrieve'),
    deleteItem: require('./modules/delete'),
    updateItem: require('./modules/update'),

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

let deleteOneItem = (req, res) => {
    modules.deleteItem.deleteOneItem(req, res);
}

let updateOneItem = (req, res) => {
    modules.updateItem.updateOne(req, res);
}

module.exports = { createItem, retrieveAllItems, retrieveOneItem, deleteOneItem, updateOneItem }