import { Path } from "../types";
import { Identity } from "../types";

const headBarNavList : Path[] = [
  {
    path: '/',
    name: '首页',
  },
  {
    path: '/about',
    name: '关于我们',
  },
  {
    path: '/repair',
    name: '故障报修',
    canAccessIdentity: [Identity.USER]
  },
  {
    path: '/repair',
    name: '接报修单',
    canAccessIdentity: [Identity.LANKER, Identity.LANKER_ADMIN, Identity.SUPER_ADMIN, Identity.ROOT]
  },
  {
    path: '/repair',
    name: '报单管理',
    canAccessIdentity: [Identity.LANKER_ADMIN, Identity.SUPER_ADMIN, Identity.ROOT]
  },
  {
    path: '/repair',
    name: '用户管理',
    canAccessIdentity: [Identity.LANKER_ADMIN, Identity.SUPER_ADMIN, Identity.ROOT]
  },
  {
    path: '/repair',
    name: '蓝客管理',
    canAccessIdentity: [Identity.SUPER_ADMIN, Identity.ROOT]
  },
  {
    path: '/check',
    name: '报修进展',
    canAccessIdentity: [Identity.USER]
  },
  {
    path: '/lanke',
    name: '蓝客风采',
  },
  {
    path: '/suggest',
    name: '意见建议',
  },
  {
    path: '/complain',
    name: '投诉蓝客',
  },
]

export default headBarNavList;