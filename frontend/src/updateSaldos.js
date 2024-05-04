import Saldo from "./saldo.js";
import FormatCurrencyMoney from "./formstCurrencyMoney.js";



export default function UpdateSaldos(){

  const total = document.getElementById('total').innerHTML = FormatCurrencyMoney(Saldo.Total());
}