import axios from "axios";
import { TMDB_IMG_BASE_URL } from "../constants/apiUrls";
import { apiToken } from "../constants/token";

export default axios.create({
  baseURL: TMDB_IMG_BASE_URL,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    Authorization: `Bearer ${apiToken}`,
  },
});
