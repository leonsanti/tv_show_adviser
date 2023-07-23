import axios from "axios";
import { BASE_URL, API_KEY_PARAM } from "../config";
import { FAKE_POPULARS } from "./fake_data";


export class TVShowAPI {
  static async fetchPopulars() {
    // const url = `${BASE_URL}tv/popular${API_KEY_PARAM}`;
    // const response = await axios.get(url);
    // return response.data.results;
    return FAKE_POPULARS
  }
}
