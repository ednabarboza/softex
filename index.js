//Importando as bibliotecas express, bodyParser e cors
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;
let artigos = [];

//Create - método post
app.post("/listar/50", (req, res) => {
  let artigo = req.body;
  let pos = artigos.length + 1;
  artigos.push(artigo);
  artigos.pos = pos;
  res.status(201).send(artigo);
});

//Read - método get
app.get("/listar/50/id", (req, res) => {
  let id = req.params.id;
  if (id > 0 && id <= artigos.length) {
    res.status(200).send(artigos[id - 1]);
  } else {
    res.status(404).send("Artigo não encontrado");
  }
});

//Do exemplo anterior:
// //criando um array para usar como se fosse um B.D
// let livros = [];
// app.use(cors()); //cors é usado para compartilhamento de recursos entre origens (evitar que endereços diferentes deem algum problema)

// app.use(bodyParser.urlencoded({ extended: false })); //extened: false ---> analisa os dados com a biblioteca queryString
// app.use(bodyParser.json()); //corpo da requisição é passado no formato json

// //criação da rota
// app.get("/book", (req, res) => {
//   res.send("Olá express");
// });

// //escutando a porta
// app.listen(port, () => {
//   console.log(`Servidor escutando na porta ${port}`);
// });

// //Implementando o método get
// app.get("/book", (req, res) => {
//   res.send(livros);
// });

// //Implementando o método post
// app.post("/book", (req, res) => {
//   const livro = req.body;
//   //printando o livro que foi inserido
//   console.log(livro);
//   //adicionando no array de livros
//   livros.push(livro);
//   res.send("O livro foi inserido com sucesso!");
// });
