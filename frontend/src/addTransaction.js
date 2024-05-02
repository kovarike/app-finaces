import { reload } from "./app.js";
import DataTransaction from "./dataTransaction.js";

export function Add(saldo){
  DataTransaction.push(saldo);

  reload();

};


export function Remove(index){
  DataTransaction.splice(index, 1);
  reload();


  
}