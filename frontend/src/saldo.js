import DataTransaction from "./dataTransaction.js";




const Saldo = {
  Entrada(){
    let income = 0
    DataTransaction.forEach(transaction => {
      if(transaction.money > 0){
        income = income + transaction.money;
      }
    })




    return income;
  },

  Saida(){
    let expense = 0
    DataTransaction.forEach(transaction => {
      if(transaction.money < 0){
        expense = expense + transaction.money;
      }
    })

    return expense;

  },

  Total(){
    return Saldo.Entrada() + Saldo.Saida()
    
  }




};

export default Saldo;