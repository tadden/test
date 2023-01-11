import axios from "axios";
import { ICategories } from "../types/Categories";
import { ICats } from "../types/Items";

export const URL = {
  BASE: "https://api.thecatapi.com/v1",
  KEY: "live_rp8162wdxCuvcFPHzquP3HB4ShJpeSFoTPMoW5BSr78WjCf5Tn1gqwjnt8pBIcqr",
};

axios.defaults.baseURL = URL.BASE;
axios.defaults.params = {
  api_key: URL.KEY,
};

export async function getCategories(): Promise<ICategories[]> {
  const { data } = await axios(`${URL.BASE}/categories`);
  return data;
}

export async function getRandomCats(): Promise<ICats[]> {
  const { data } = await axios(`${URL.BASE}/images/search?limit=10`);
  return data;
}
export async function getCatsById(
  id: string | undefined,
  page: number
): Promise<ICats[]> {
  const { data } = await axios(
    `${URL.BASE}/images/search?limit=10&page=${page}&category_ids=${id}`
  );
  return data;
}
