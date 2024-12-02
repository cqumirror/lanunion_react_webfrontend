import { Identity, userInfo } from "../types";

export interface ApiUserInfo {
  id: string,
  auth_id: string,
  name: string,
  user_id: string,
  date_joined: string,
  last_ip: string,
  last_login: string,
  groups: string[],
  email: string,
  qqnumber: number,
  addr_school: {
    id: string,
    campus: number,
    addr: string
  },
  addr_custom: string,
  score: string,
  my_brief: string
}

export function transformApiIdentity(apiData: string[]): Identity[] {
  if (!Array.isArray(apiData)) {
    console.error("Invalid data format for apiData, expected an array:", apiData);
    return [Identity.None];
  }
  return apiData
    .map((role) => {
      switch (role) {
        case "none":
          return Identity.None;
        case "user":
          return Identity.USER;
        case "lanke":
          return Identity.LANKER;
        case "lankeAdmin":
          return Identity.LANKER_ADMIN;
        case "superAdmin":
          return Identity.SUPER_ADMIN;
        case "root":
          return Identity.ROOT;
        default:
          console.warn(`Unknown role received: ${role}`);
          return null;
      }
    })
    .filter((identity): identity is Identity => identity !== null);
}

export function transformApiUserInfo(apiData: ApiUserInfo): userInfo {
  return {
    isLogin: true,
    userId: apiData.user_id,
    name: apiData.name,
    email: apiData.email,
    qqnumber: String(apiData.qqnumber),
    identity: transformApiIdentity(apiData.groups),
    score: apiData.score,
    myBrief: apiData.my_brief,
    addrSchool: apiData.addr_school,
    addrCustom: apiData.addr_custom,
  };
}