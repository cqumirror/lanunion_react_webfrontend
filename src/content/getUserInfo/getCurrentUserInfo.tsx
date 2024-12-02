import { api_Users_Me } from "../../hooks/apiList";
import { transformApiUserInfo } from "../../hooks/apiTransformer";
import { userInfo } from "../../types";
import { neverLoginUserInfo } from "./presetUserInfo";

export default async function getCurrentUserInfo(): Promise<userInfo> {
  try {
    const response = await api_Users_Me();
    const data = response.data;
    switch (response.status) {
      case 200:
        return (transformApiUserInfo(data))
      case 403:
        return neverLoginUserInfo
      // TODO 对接后端，添加错误码
      default:
        return neverLoginUserInfo
    }
  } catch (error) {
    // TODO
    console.error('Error fetching user info:', error);
    throw error;
  }
}