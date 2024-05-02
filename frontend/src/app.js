import { Remove } from "./addTransaction.js";
import { SetStorage } from "./base/storage.js";
import CreateElementTrasaction, { ClearTransaction } from "./createElementTransaction.js";
import DataTransaction from "./dataTransaction.js";
import UpdateSaldos from "./updateSaldos.js";





export function init() {

  DataTransaction.forEach( (transaction, index) => {
    CreateElementTrasaction(transaction, index);
    document.getElementById('r').addEventListener('click', function(transaction, index){
      Remove(index)
    });
    
  });


  UpdateSaldos();
  SetStorage(DataTransaction);


}
export function reload() {
  ClearTransaction();
  init();
}

init();


