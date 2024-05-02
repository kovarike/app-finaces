import { Remove } from "./addTransaction.js";
import { SetStorage } from "./base/storage.js";
import CreateElementTrasaction, { ClearTransaction } from "./createElementTransaction.js";
import DataTransaction from "./dataTransaction.js";
import UpdateSaldos from "./updateSaldos.js";



export function init() {

  DataTransaction.forEach( (transaction, index) => {
    const tr = CreateElementTrasaction(transaction, index);
    tr.querySelector('.rm').addEventListener('click', () => {
      Remove(index);
    });
  
  });

  


  SetStorage(DataTransaction);
  UpdateSaldos();


};

export function reload() {
  ClearTransaction();
  init();

};

init();


