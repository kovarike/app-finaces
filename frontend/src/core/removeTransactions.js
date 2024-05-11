import { DeleteApi } from "../api/api.js";
import { reload } from "./app.js";
import Saldos from "./saldo.js";



export async function Remove(id){
  await DeleteApi(id)
  Saldos();
  reload();

}


