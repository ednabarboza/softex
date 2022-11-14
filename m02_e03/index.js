const express = require('express');
const app = express();

//alteração de rota usando o query
app.get('/listar', function (req, res){
    const page = req.query.page;
    const pageSize = req.query.pageSize;
    res.send(`page${page}, pageSize${pageSize}`)
})


app.listen(8080, function() {
    console.log("Servidor escutando na porta 8080")
})