import axios from "axios";
const SERVER_API = `http://localhost:8080`;
class serviceUserInfo {
  static getAll(search, page, size, sortField, orderByType) {
    console.log(sortField, orderByType);
    return axios.get(
      SERVER_API +
      `/api/admin/userinfo?search=${search}&page=${page}&size=${size}&sort=${sortField + "," + orderByType
      }`
    );
  }
  static addUserInfo(data) {
    return axios.post(SERVER_API + `/api/admin/userinfo`, data);
  }
  static editUserinfo(id) {
    return axios.put(SERVER_API + `/api/admin/userinfo/${id}`);
  }
  static delete(id) {
    return axios.delete(SERVER_API + `/api/admin/userinfo/${id}`);
  }
  static uploadFile(image) {
    return axios.post(SERVER_API + `/api/admin/files/images/${image}`);
  }
  static getUserById(id) {
    return axios.get(SERVER_API + `/api/admin/userinfo/${id}`);
  }
  static getUserByPhone(phone) {
    return axios.get(SERVER_API + `/api/admin/userinfo/checkPhone/${phone}`);
  }
}
export default serviceUserInfo;
