import { request } from "../utils/request";

export default class NetflixService {
  static getTrending() {
    return request({
      url: "/trending/all/week",
      method: "GET",
    });
  }
}
