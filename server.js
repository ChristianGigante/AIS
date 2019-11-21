const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router')
const path = require('path');

//DBConfig
const mongoose = require("mongoose");
const dbConfig = "mongodb://localhost:27017/dbShop";

mongoose.Promise = global.Promise;
console.log("Connecting to the Server..,");
mongoose.connect(dbConfig, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }
).then(() => {
    console.log("Successfully connected to the database..,");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.use(cors())
app.use(bodyParser.urlencoded({ extended: true, limit: "20mb" }));
app.use(bodyParser.json({ limit: "20mb" }));

app.all('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'view/index.html'));
});


app.use("/ais", router)

app.listen(PORT, () => {
    console.log("Server is running in PORT..," + PORT)
})