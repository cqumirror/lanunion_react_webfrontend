import { api_Users_Id } from "../../hooks/apiList";
import { transformApiUserInfo } from "../../hooks/apiTransformer";
import { userInfo } from "../../types";
import { undefinedUserInfo } from "./presetUserInfo";

async function getUserInfo(id: string): Promise<userInfo> {
  try {
    const response = await api_Users_Id(id);
    const data = response.data;
    switch (response.status) {
      case 200:
        return (transformApiUserInfo(data))
      case 403:
        return undefinedUserInfo
      // TODO 对接后端，添加错误码
      default:
        return undefinedUserInfo
    }
  } catch (error) {
    // TODO
    console.error('Error fetching user info:', error);
    throw error;
  }
}