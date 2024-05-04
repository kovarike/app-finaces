import { Remove } from "./addTransaction.js";
import { SetStorage } from "./base/storage.js";
import CreateElementTrasaction, { ClearTransaction } from "./createElementTransaction.js";
import DataTransaction from "./dataTransaction.js";
import UpdateSaldos from "./updateSaldos.js";



export async function init() {

  DataTransaction.forEach( (transaction, index) => {
    const tr = CreateElementTrasaction(transaction, index);
    document.querySelector('.rm').addEventListener('click', () => {
      let check = tr.querySelector('.check');

      if(check.checked) {
        Remove(check.value);
        
      } 


    });
  
  });
  /*
      document.querySelector('.rm').addEventListener('click', () => {
              check.value.map(remove => remove.value)
      Remove(index);
       else {
        console.log("O cliente não marcou o checkbox");
      }




            check.value.forEach( (value) => {

      })

      console.log(check.value)
    });
    */

  


  SetStorage(DataTransaction);
  UpdateSaldos();


};

export function reload() {
  ClearTransaction();
  init();

};

await init();


