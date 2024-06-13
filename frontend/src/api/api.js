
const headers = {
  "Content-Type": "application/json",
  'Authorization': ''
}

export async function GetApi() {
  try {
    const response = await axios.get(Url);
    const Data = response.data;
    return Data;
  } catch (error) {
    console.log(error);
  }
  
};
// {headers:{"Content-Type" : "application/json"}}



export async function PostApi(ValueData) {
  
  try {
    await axios.post(Url, {...ValueData}, headers);
    
  } catch (error) {
    console.log(error);
  }
  
};









export async function DeleteApi(id) {
  try {
    const response = await axios.delete(`${Url}/${id}`);
    
  } catch (error) {
    console.log(error.response.data);
  }
  
};




