import FormatCurrencyMoney from "./formstCurrencyMoney.js";


const Tbody = document.querySelector('#data tbody');
export default function CreateElementTrasaction(transaction){

  const tr = document.createElement('tr');
  tr.innerHTML = innerHTMLTransaction(transaction);
  Tbody.appendChild(tr);


};

export function ClearTransaction(){
  Tbody.innerHTML = "";
}




export function innerHTMLTransaction(transaction){

  const cssClass = transaction.money > 0 ? "entrada-coin" : "saida-coin";
  const currencyMoney = FormatCurrencyMoney(transaction.money);

  const html = `
    
      <td class="descrição">${transaction.description}</td>
      <td class="${cssClass}">${currencyMoney}</td>
      <td class="date">${transaction.date}</td>

      <td>
          <img src="./src/public/minus.svg" alt="miuns">
      </td>
    
   
  `;

  return html;
}





