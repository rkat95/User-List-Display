import axios from "axios";
import { baseURL } from "../assets/configuration/config";

export async function getUsers() {
  const response = await axios.get(`${baseURL}/users`);
  return await response.data;
}
