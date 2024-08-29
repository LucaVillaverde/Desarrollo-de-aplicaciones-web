import express from 'express';

const app = express();


// CRUD (Create, Read, Update, Delete).
// -Create : POST 
// -Read : GET
// -Update : PUT
// -Delete : DELETE


app.get('/', function(req, res){
    res.send('Hola mundo actualizando2323');
});

app.get('/pedidos', function(req, res){
    res.send('Hola pedidos');
});

app.get('/pepe', function(req, res){
    res.send('Hola pepe');
});

app.listen(3001, ()=>{
    console.log('Escuchando en http://localhost:3001');
}); 
