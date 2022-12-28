let appRouter = function (app) {
  app.get("/", function (req, res) {
    res.status(200).send("Bem vindo ao nosso web service!");
  });

  app.post("/", function (req, res) {
    res
      .status(200)
      .send("Respondendo ap Método POST: Bem vindo ao nosso web service!");
  });
};
module.exports = appRouter;
