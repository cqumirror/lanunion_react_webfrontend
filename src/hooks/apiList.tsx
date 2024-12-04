import { AxiosResponse } from "axios";
import instance from "./Api";
import { ApiUserInfo } from "./apiTransformer";

enum ApiPath {
  Articles = "/articles/",
  Articles_Id = "/articles/",
  Articles_Public = "/articles/public/",
  Permissions = "/permissions/",
  Permissions_Id = "/permissions/",
  Schooladdrs = "/schooladdrs/",
  Schooladdrs_Id = "/schooladdrs/",
  Scorechanges = "/scorechanges/",
  Scorechanges_Id = "/scorechanges/",
  Scorechanges_MyRecords = "/scorechanges/my_records/",
  Sheets = "/sheets/",
  Sheets_Id = "/sheets/",
  Sheets_Id_Comment = "/comment/", // 后端路径为 api/sheets/{id}/comment/，调用时应使用 Sheets_Id + id + Sheets_Id_Comment
  Sheets_Id_Repair = "/repair/", // 后端路径为 api/sheets/{id}/repair/，调用时应使用 Sheets_Id + id + Sheets_Id_Repair
  Sheets_MySheets = "/sheets/my_sheets/",
  Users = "/users/",
  Users_Id = "/users/",
  Users_Me = "/users/me/",
  Users_Id_AdminEdit = "/admin_edit/", // 后端路径为 api/users/{id}/admin_edit/，调用时应使用 Users_Id + id + Users_Id_AdminEdit
  Users_Id_ViewLanker = "/view_lanker/", // 后端路径为 api/users/{id}/view_lanker/，调用时应使用 Users_Id + id + Users_Id_ViewLanker
  Users_Lankers = "/users/lankers/"
}

export async function api_Users(): Promise<AxiosResponse> {
  const response = await instance.post<ApiUserInfo>(ApiPath.Users);
  return response;
}

export async function api_Users_Me(): Promise<AxiosResponse> {
  const response = await instance.post<ApiUserInfo>(ApiPath.Users_Me);
  return response;
}

export async function api_Users_Id(id: string): Promise<AxiosResponse> {
  const response = await instance.post<ApiUserInfo>(ApiPath.Users_Id + id + '/');
  return response;
}

// TODO