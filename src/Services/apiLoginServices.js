import request from "../utils/request";

const BASE_API = "https://quanlycudan.azurewebsites.net";
export function loginRequestServices(payload) {
  return request(`${BASE_API}/api/users/authenticate`, {
    method: "POST",
    data: payload,
  });
}
