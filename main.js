
const express = require ('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Olá express, método get");
});

app.post('/', (req, res) => {
    res.send("callback post");
});

app.listen(8080, () => {
    console.log("Servidor escutando na porta 8080")
})


/*

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Olá Mundo!');
});

app.listen(8080, function() {
  console.log('App de Exemplo escutando na porta 8080!');
});
*/