import { request } from "../utils/request";

export default class NetflixService {
  static getTrending() {
    return request({
      url: "/trending/all/week",
      method: "GET",
    });
  }

  static getTrendingAsianMovies() {
    return request({
      url: "/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_original_language=ja%7Czh%7Cko&vote_count.gte=20",
      method: "GET",
    });
  }

  static getMovieInfoById(id: string) {
    return request({
      url: `/movie/${id}?language=en-US`,
      method: "GET",
    });
  }

  static getTVShowInfoById(id: string) {
    return request({
      url: `/tv/${id}?&language=en-US`,
      method: "GET",
    });
  }

  static getTVShowCreditsById(id: string) {
    return request({
      url: `/tv/${id}/credits?language=en-US`,
      method: "GET",
    });
  }

  static getMovieCreditsById(id: string) {
    return request({
      url: `/movie/${id}/credits?language=en-US`,
      method: "GET",
    });
  }
}
