export interface userInfo {
  isLogin: boolean; // 是否成功登录，成功 true，失败 false
  userId?: string; // 学号
  name?: string; // 姓名
  email?: string; // 邮箱
  qqnumber? : string; // QQ号
  identity: Identity[]; // 身份
  state?: number; // 登录状态
  score?: string; // 蓝客积分
  myBrief?: string; // 简介
  addrSchool?: {
    id: string,
    campus: number,
    addr: string,
  }; // 校址
  addrCustom?: string; // 自定义地址
}

export interface Path {
  path: string;
  name: string;
  canAccessIdentity?: string[];
}

export interface GlobalContextProps {
  authInfo: userInfo;
  login: (token: string) => void;
  logout: () => void;
}

export interface AuthRouteProps {
  children: JSX.Element;
  path: string;
  pageAccessCode: AdminAccess;
  userAccessCode: AdminAccess;
  exact?: boolean;
}

export interface NavbarAdminItemProps {
  label: string;
  to: string;
  icon: JSX.Element;
  pageAccessCode: AdminAccess;
  showDivider?: boolean;
}

export enum PagePath {
  Index = "/",
  About = "/about",
  Check = "/check",
  Complain = "/complain",
  Lanker = "/lanker",
  Repair = "/repair",
  Suggest = "/suggest",
  Wechat = "/wechat",
  Admin = "/admin"
}

export enum PageLabel {
  Index = "首页",
  About = "关于我们",
  Check = "状态查询",
  Complain = "投诉蓝客",
  Lanke = "蓝客风采",
  Repair = "故障报修",
  Suggest = "意见建议",
  Wechat = "公众号",
  Admin = "后台"
}

export enum Identity {
  None = "none", // 未登录
  USER = "user", // 普通用户
  LANKER = "lanker", // 蓝客
  LANKER_ADMIN = "lankerAdmin", // 管理员
  SUPER_ADMIN = "superAdmin", // 超级管理员
  ROOT = "root" // ROOT权限
}

// 权限管理
export enum AdminAccess {
  None = 0,
  Dashboard = 1 << 0,
  ModifyUserInfo = 1 << 1,
  RepairUnreceived = 1 << 2,
  RepairReceived = 1 << 2,
  CommentManagement = 1 << 6,
  Publish = 1 << 3,
  UserManage = 1 << 4,
  ApplyManage = 1 << 5,
  CreditManage = 1 << 6,
  Maintenance = 1 << 7
}

// 用户登录状态
export enum UserLoginState {
  Login = 0, // 已登录
  NeverLogin = 1, // 从未登录
  Expired = 2, // 登录过期
  Invalid = 3, // 无效登录
  Undifined = 4, // 无效用户
}