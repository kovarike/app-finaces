import { SendData } from "./core/dataPostApi.js";
import { FormatData, RemoveData, ValidateForm} from "./core/form.js";
import { Close } from "./core/modal.js";

function Submit(event){
  try {
    ValidateForm();
  
    const ValueData = FormatData();
    SendData(ValueData);
    
    RemoveData();
    Close();
    
  } catch (error) {
    alert(error.message);
  }



}


document.getElementById('F').addEventListener("submit", function (event) {
  
  event.preventDefault();
  Submit(event)
})
