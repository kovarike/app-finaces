export function GetStorage() {
  return JSON.parse(localStorage.getItem("Finaces:Data")) || [];
};


export function SetStorage(transactions) {
  localStorage.setItem("Finaces:Data", JSON.stringify(transactions))
}