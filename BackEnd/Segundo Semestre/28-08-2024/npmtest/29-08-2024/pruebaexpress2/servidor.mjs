import express from "express";
import path from "path";

const ruta = import.meta.dirname;

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(ruta, "/index.html"));
});

app.listen(3000, ()=>{
    console.log("Iniciando servidor en http://localhost:3000");
});