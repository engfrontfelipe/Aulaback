import fastify from "fastify";
import { DataMemory } from "./database-memory.js";

const server = fastify();

const database = new DataMemory()


//Request Body
//Requisiçao para criar
server.post("/videos", (req, res)=> {
  const {title, description, duration} = req.body; 
    database.create({
        title,
        description,
        duration,
    });

    return res.status(201).send()       
});
 
//Req para receber
server.get("/videos", (req)=> {       
    const search = req.query.search;
    const videos = database.list(search);   
    return videos
});


// Req para editar
server.put("/videos/:id", (req, res)=> {  
    const {title, description, duration} = req.body; 
    const videoId = req.params.id
    
    database.update(videoId, {
        title,
        description,
        duration,
    });

    return res.status(204).send()
});


//Req para deletar
server.delete("/videos/:id", (req, res)=> {    
   const videoId = req.params.id;

   database.delete(videoId)

   return res.status(204).send()
});


server.listen({
    port: 3333

})