import CreateElementTrasaction, { ClearTransaction } from "./createElementTransaction.js";
import DataTransaction from "./dataTransaction.js";
import UpdateSaldos from "./updateSaldos.js";





export function init() {

  DataTransaction.forEach( (transaction) => {
    CreateElementTrasaction(transaction);
  
  });


  UpdateSaldos();

}
export function reload() {
  ClearTransaction();
  init();
}

init();


