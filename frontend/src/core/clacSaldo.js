import DataTransaction from "./dataGetApi.js";
const CalculoSaldo = {
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
    return CalculoSaldo.Entrada() - CalculoSaldo.Saida()
    
  }




};

export default CalculoSaldo;