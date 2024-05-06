import FormatCurrencyMoney from "./formstCurrencyMoney.js";

const Tbody = document.querySelector('#data tbody');
export default function CreateElementTrasaction(transaction, index){

  const tr = document.createElement('tr');
  tr.innerHTML = innerHTMLTransaction(transaction, index);
  tr.dataset.index = index;
  Tbody.appendChild(tr);
  return tr;

};

export function ClearTransaction(){
  Tbody.innerHTML = "";
}


export function innerHTMLTransaction(transaction, index){
  const cssClass = transaction.money > 0 ? "entrada-coin" : "saida-coin";
  const currencyMoney = FormatCurrencyMoney(transaction.money);

  const html = `
    <td class="descrição">
        <input class="check" id="${index}" data-index="${index}" type="checkbox" />
        ${transaction.description}
    </td>
    <td class="${cssClass}">${currencyMoney}</td>
    <td class="date">${transaction.date}</td>
  `;
  
  





  return html;
}





