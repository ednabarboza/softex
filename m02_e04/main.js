const express = require ('express');
const app = express();

//método GET
app.get('/', (req, res) => {
    return res.send('Recebi um HTTP GET');
});

//método POST
app.post('/', (req, res) => {
    return res.send('Recebi um HTTP POST');
});

//método PUT
app.put('/', (req, res) => {
    return res.send('Recebi um HTTP PUT');
});

//método DELETE
app.delete('/', (req, res) => {
    return res.send('Recebi um HTTP DELETE')
});

app.listen(8080, ()=>{
    console.log('Servidor escutando na porta 8080')
});