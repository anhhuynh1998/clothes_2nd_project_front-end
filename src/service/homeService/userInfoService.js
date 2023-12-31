import { axiosInstance } from "../axiosInstance/axiosInstance";
const API_USERINFO = `http://localhost:8080/api/home/userInfos`

class UserInfoService {
    static getUserInfoByEmail() {
        return axiosInstance.get(API_USERINFO)
    }
    static showCartByUser() {
        return axiosInstance.get(`${API_USERINFO}/showCartByUser`)
    }
    static showProductByUser() {
        return axiosInstance.get(`${API_USERINFO}/showProductByUser`)
    }
    static updateUserInfo(data) {
        if (data)
            return axiosInstance.patch(`${API_USERINFO}`, data)
    }
}
export default UserInfoService;