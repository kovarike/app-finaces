import { Remove } from "./addTransaction.js";
import { SetStorage } from "./base/storage.js";
import CreateElementTrasaction, { ClearTransaction } from "./createElementTransaction.js";
import DataTransaction from "./dataTransaction.js";
import UpdateSaldos from "./updateSaldos.js";



export function init() {
  


  DataTransaction.forEach((transaction, index) => {
    CreateElementTrasaction(transaction, index);

    
  });
  document.querySelector(".rm").addEventListener("click", () => {
    const checkboxes = document.querySelectorAll(".check:checked");
    
    /*if (DataTransaction < 0) {
      alert("Selecione pelo menos uma transação para excluir");
      
    }*/
    
    //const d = DataTransaction.filter((_, index) => !indicesToRemove.includes(index));
    //Remove(d)
    
    let d;
  
    checkboxes.forEach((checkbox, index) => {
      const tr = checkbox.closest("tr");
      
      //console.log(tr.dataset.index);
      d = DataTransaction.filter((_, indexAA) => indexAA != tr.dataset.index);
      tr.remove();
      Remove(d)
    });
  
    
    
  
    UpdateSaldos();
    
  });





  /*
  document.getElementById('rm').addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('.check:checked');
    const indicesToRemove = Array.from(checkboxes).map(checkbox => parseInt(checkbox.dataset.index));
    const d = DataTransaction.filter((_, index) => !indicesToRemove.includes(index));
    
    //if(checkboxes.length == 0) return 
    checkboxes.forEach((checkbox) => {
      const tr = checkbox.closest("tr");
      tr.remove(d);
      
      UpdateSaldos();
    });

    
    
    
    
    
  });
  */
  SetStorage(DataTransaction)
  UpdateSaldos();

  
  

};




  





export function reload() {
  

  ClearTransaction();
  init();

};

init();


