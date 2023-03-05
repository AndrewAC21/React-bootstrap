import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";
async function getProducts() {
  let res = await axios.get(BASE_URL);
  console.log('call')
  return res.data;
}

export { getProducts };
