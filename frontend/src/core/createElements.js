import FormatCurrencyMoney from "./formatCurrencyMoney.js";


const Tbody = document.querySelector('#data tbody');
export default function CreateElementTrasaction(transaction){

  const tr = document.createElement('tr');
  tr.innerHTML = innerHTMLTransaction(transaction);
  tr.dataset.index = transaction.id; 
  Tbody.appendChild(tr);
  return tr;

};

export function ClearTransaction(){
  Tbody.innerHTML = "";
}


export function innerHTMLTransaction(transaction){
  const cssClass = transaction.money > 0 ? "entrada-coin" : "saida-coin";
  const currencyMoney = FormatCurrencyMoney(transaction.money);


  const html = `
    <td class="descrição">
        
      ${transaction.description}
    </td>
    <td class="${cssClass}">${currencyMoney}</td>
    <td class="date">${transaction.date}<div><input class="check" id="${transaction.id}" type="checkbox" /> </div></td>
  `;
  
  





  return html;
}





