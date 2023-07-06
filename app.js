import dotenv from 'dotenv';
import express from 'express';
import storageCampus from './routers/campus.js';
dotenv.config();
const appExpress = express();//levanta todo el sevicio

appExpress.use(express.json());
appExpress.use("/campus", storageCampus);
//Accerder a las variables de entorno
/* console.log(process.env.MY_CONFIG); */

//implementacion middleware (el req lo q pide el cliente y el res lo que envia el servidor)
/* appExpress.use((req,res,next)=>{

    next();
}); */
/* appExpress,use(express.json());
appExpress,use(express.text());
appExpress.get('/campus/:id', (req,res)=>{
    console.log(req.params);//ver parametros para la consulta
    res.send("kiubo mano");
    
}); */
const config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);});