import { PostApi } from "../api/api.js";
import { reload } from "./app.js";
export async function SendData(ValueData){
  await PostApi(ValueData);
 reload()
  
}