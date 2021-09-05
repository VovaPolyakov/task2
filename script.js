// const http = require('http');
const fs = require('fs');
const path = require('path');
var express = require('express')
var bodyParser = require('body-parser');

var app = express()

app.use(bodyParser());

var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.get('/', function (req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, './files') })
});

app.post('/', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    console.log(req.body)
    res.sendFile('index.html', { root: path.join(__dirname, './files') })

});







// app.post('/', function (req, res) {
//     res.end(JSON.stringify(req.body));
// });


app.listen(1337, '127.0.0.1', () => console.log('Сервер работает '));