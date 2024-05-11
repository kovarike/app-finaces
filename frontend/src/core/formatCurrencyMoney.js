export function FormatMoney(value) {
  value = Number(value) * 100;
  return value;
};




export default function FormatCurrencyMoney(value){
  const signal = Number(value) < 0 ? "- " : "";
  value = String(value).replace(/\D/g, "");
  value = Number(value) / 100;
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
  return signal + "" + value;
  
}





export function FormatDate(date) {
  const Date = date.split("-");
  return `${Date[2]}${Date[1]}${Date[0]}`;
  //
}

