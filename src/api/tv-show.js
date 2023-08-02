import axios from "axios";
import { BASE_URL, API_KEY_PARAM } from "../config";
import { FAKE_POPULARS, FAKE_RECOMMENDATIONS } from "./fake_data";

export class TVShowAPI {
  static async fetchPopulars() {
    const url = `${BASE_URL}tv/popular${API_KEY_PARAM}`;
    const response = await axios.get(url);
    return response.data.results;
    // return FAKE_POPULARS;
  }

  static async fetchRecommendations(tvShowId) {
    const url = `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`;
    const response = await axios.get(url);
    return response.data.results;
    // return FAKE_RECOMMENDATIONS;
  }

  static async fetchByTitle(title) {
    const url = `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`;
    const response = await axios.get(url);
    return response.data.results;
    // return FAKE_RECOMMENDATIONS;
  }


}
