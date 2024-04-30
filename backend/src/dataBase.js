import {randomUUID} from "node:crypto";

export class DataBase{
    #finaces = new Map();

    list(){
        return Array.from(this.#finaces.values()).map((inputArray) =>{
            const id = inputArray[0];
            const data = inputArray[1];

            return {
                id,
                ...data
            }
        })
    };

    create(inputs) {

        const inputsID = randomUUID();

        this.#finaces.set(inputsID, inputs);
    };

    update(id, inputs){
        this.#finaces.set(id, inputs);
    };

    delete(id){
        this.#finaces.delete(id);
    }



}