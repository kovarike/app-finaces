import { FormatDate, FormatMoney } from "./formatCurrencyMoney.js";

const description = document.getElementById('description');
const money = document.getElementById('amount');
const date = document.getElementById('date');
export function GetElement() {
  return{
    description: description.value,
    money: money.value,
    date: date.value
  }
}
export function ValidateForm() {
  
  let {description, date, money} = GetElement();
  if(description.trim() === "" || money.trim() === "" || date.trim() === "") {
    throw new Error("Preencha todos os campos !")
  }

};

export function FormatData() {
  let {description, date, money} = GetElement();
  money = FormatMoney(money);
  date = FormatDate(date);
  
  return {
    description,
    money, 
    date
  }
};

export function RemoveData() {
  
  description.value = "";
  money.value = "";
  date.value = "";
};

