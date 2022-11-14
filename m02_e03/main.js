const express = require('express');
const app = express();

//alteração de rota usando o placeholder id
app.get('/usuarios:id', function (req,res){
    const id = req.params.id
    res.send(`id recebido ${id}`)
});

app.listen(8080, function() {
    console.log("Servidor escutando na porta 8080")
})