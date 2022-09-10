import axios from "axios";
import { TMDB_BASE_URL } from "../constants/apiUrls";
import { apiToken } from "../constants/token";

export const client = axios.create({
  baseURL: TMDB_BASE_URL,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    Authorization: `Bearer ${apiToken}`,
  },
});
