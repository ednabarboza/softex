const express = require("express");
const router = express.Router();

router
  .get("/jogos", (req, res) => {
    console.log("busca");
  })
  .get("/jogos/:id", (req, res) => {
    console.log("busca específica");
  })
  .post("/jogos", (req, res) => {
    console.log("cadastro");
  })
  .put("/jogos/:id", (req, res) => {
    console.log("update");
  })
  .delete("/jogos/:id", (req, res) => {
    console.log("delete");
  });

module.exports = router;
