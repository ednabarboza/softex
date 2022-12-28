const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const routes = require("./routes/index.js");

app.use(bodyParser.json());

routes(app);

app.listen(port, () => {
  console.log(`Exemplo de um app escutando na porta ${port}`);
});
