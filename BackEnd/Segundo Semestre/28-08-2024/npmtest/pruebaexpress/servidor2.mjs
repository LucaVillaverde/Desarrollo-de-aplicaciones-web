import express from 'express';


const app = express();

app.use(express.json())

let datos=[];

app.get('/datos', function(req, res){
    res.json(datos);
});

app.post('/agregar', function (req, res){
    const nuevo =  {id:datos.length, nombre:req.body.nombre, apellido:req.body.apellido}
    datos.push(nuevo);
    res.status(201).json(nuevo);
});

app.delete('/borrar/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const indice = datos.findIndex(i => i.id === id);

    if(indice != -1){
        datos.splice(indice, 1);
        res.status(200).send('Ok');
    }else{
        res.status(404).send('No encontre nada capo.');
    }
})

app.listen(3000, ()=>{
    console.log('Servidor en http://localhost:3000');
});