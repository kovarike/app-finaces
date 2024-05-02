import Saldo from "./saldo.js";
import FormatCurrencyMoney from "./formstCurrencyMoney.js";



export default function UpdateSaldos(){
  const saida = document.getElementById('saida').innerHTML = FormatCurrencyMoney(Saldo.Saida());
  const entrada = document.getElementById('entrada').innerHTML = FormatCurrencyMoney(Saldo.Entrada());
  const total = document.getElementById('total').innerHTML = FormatCurrencyMoney(Saldo.Total());
}