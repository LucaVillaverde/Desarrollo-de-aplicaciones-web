import {createServer} from "http";

createServer(function (req, res) {
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write("Hola Mundo");
    res.end();
}).listen(8080, "127.0.0.1", ()=>{
    console.log("Servidor activo en 127.0.0.1:8080")
});