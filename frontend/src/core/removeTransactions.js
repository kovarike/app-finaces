import { DeleteApi } from "../api/api.js";
import { reload } from "./app.js";
import DataTransaction from "./dataGetApi.js";
import Saldos from "./saldo.js";



export async function Remove(id){
  await DeleteApi(id)
  console.log(id)
  Saldos();
  reload();

}


