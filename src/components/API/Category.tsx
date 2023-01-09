import axios from 'axios';


export const URL = {
  BASE: "https://api.thecatapi.com/v1/categories",
  KEY: "live_rp8162wdxCuvcFPHzquP3HB4ShJpeSFoTPMoW5BSr78WjCf5Tn1gqwjnt8pBIcqr",
};

axios.defaults.baseURL = URL.BASE;
axios.defaults.params = {
  apikey: URL.KEY,
};

export async function getCategories() {
  const { data } = await axios(URL.BASE); 
  console.log(data);
  return data;
}   

