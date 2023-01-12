import axios from "axios";
import { Categories } from "../types/Categories";
import { Items } from "../types/Items";

export const URL = {
  BASE: "https://api.thecatapi.com/v1",
  KEY: "live_rp8162wdxCuvcFPHzquP3HB4ShJpeSFoTPMoW5BSr78WjCf5Tn1gqwjnt8pBIcqr",
};

axios.defaults.baseURL = URL.BASE;
axios.defaults.params = {
  api_key: URL.KEY,
};

export const getCategories = async (): Promise<Categories[]> => {
  const { data } = await axios(`${URL.BASE}/categories`);
  return data;
};

export const getRandomCats = async (): Promise<Items[]> => {
  const { data } = await axios(`${URL.BASE}/images/search?limit=10`);
  return data;
};
export const getCatsById = async (
  id: string | undefined,
  page: number
): Promise<Items[]> => {
  const { data } = await axios(
    `${URL.BASE}/images/search?limit=10&page=${page}&category_ids=${id}`
  );
  return data;
};
