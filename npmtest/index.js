import { createServer } from 'http';


const servidor=createServer(function(req, res){
    res.writeHead(200, {'Content-type':'text/html'})
    res.write('Hola que tal');
    res.end();
});

servidor.listen(3000, '127.0.0.1', ()=>{
    console.log('Escuchando en http://localhost:3000');
}); 
