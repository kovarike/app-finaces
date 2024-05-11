import CalculoSaldo from "./clacSaldo.js";
import FormatCurrencyMoney from "./formatCurrencyMoney.js";
export default function Saldos(){
  document.getElementById('total').innerHTML = FormatCurrencyMoney(CalculoSaldo.Total());
}