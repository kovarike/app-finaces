import DataTransaction from "./dataGetApi.js";
import Saldos from './saldo.js'
import CreateElementTrasaction, { ClearTransaction } from "./createElements.js";
import { Remove } from "./removeTransactions.js";


export function init() {
  DataTransaction.forEach((transaction) => {
    CreateElementTrasaction(transaction);
  });
  document.getElementById('rm').addEventListener("click", () => {
    const checkboxes = document.querySelectorAll(".check:checked");
    let deleteID;
  
    checkboxes.forEach((checkbox) => {
      const tr = checkbox.closest("tr");
  
      
      
  
      DataTransaction.forEach(i => {
        deleteID = i.id
        if( deleteID == tr.dataset.index){
  
          Remove(deleteID);
          
          
        }
      });;
      Saldos();
      
  
      
      
    });
    
    
    Saldos();
    
    
  });
 
  Saldos();

};
Saldos();

export function reload() {
  

  ClearTransaction();
  init();

};

init();


