const display = document.getElementById('display');

function CalculatorFn(input) {
  display.value += input;
}

function ClearCalculate() {
display.value = "";
}
function Calculate() {
  try {
    display.value = eval(display.value);    
  } catch (error) {
    display.value = "Error";
  }
}