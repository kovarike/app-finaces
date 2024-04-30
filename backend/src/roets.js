import { fastify } from "fastify";
import { DataBase } from "./dataBase.js";

export const Rotes = fastify();

const dataBas = new DataBase();


Rotes.get('/inputs', (request, reply) =>{
    const listInputs = dataBas.list();
    return listInputs;

});

Rotes.post('/inputs', (request, reply) =>{

    const { description, money, date } = request.body

    dataBas.create({
        description: description,
        money: money,
        date: date
    });


    return reply.status(201).send();

});

Rotes.put('/inputs/:id', (request, reply) =>{
    const inputsId = request.params.id;
    const { description, money, date } = request.body;
    dataBas.update(inputsId, {
        description,
        money,
        date
    });


    return reply.status(204).send();

});



Rotes.delete('/inputs/:id', (request, reply) =>{
    const deleteId = request.params.id;
    dataBas.delete(deleteId);

    return reply.status(204).send();
});