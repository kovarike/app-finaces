import { DataBase } from "./base/dataBase.js";
import { FormatDate, FormatMoney } from "./formstCurrencyMoney.js";
import { Close } from "./modal.js";


const description = document.getElementById('description');
const money = document.getElementById('amount');
const date = document.getElementById('date');
function GetElement(){
  return {
    description: description.value,
    money: money.value,
    date: date.value
  }
};

function ValidateForm() {
  const {description, money, date} = GetElement();

  if(description.trim() === "" || money.trim() === "" || date.trim() === "") {
    throw new Error("Preencha todos os campos !")
  }

};

function FormatData() {
  let {description, money, date} = GetElement();
  money = FormatMoney(money);
  date = FormatDate(date);
  return {
    description,
    money, 
    date
  }
};

function RemoveData() {
  description.value = "";
  money.value = "";
  date.value = "";
};



function Submit(event){


  event.preventDefault();
  try {
    ValidateForm();
    const ValueForm = FormatData();
    DataBase(ValueForm);
    RemoveData();
    Close();
    
  } catch (error) {
    alert(error.message);
  }



}


document.querySelector("#F").addEventListener("submit", function (event) {
  
  event.preventDefault();
  Submit(event)
})

