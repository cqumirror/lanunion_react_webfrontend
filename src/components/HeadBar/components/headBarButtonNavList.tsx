// TODO 后端自动处理

import { IconAbout, IconAngry, IconHouse, IconIdCard, IconMessageSquareMore, IconCalendarClock, IconWrench } from "../../../content/icon";
import { Path } from "../../../types";
import { Identity } from "../../../types";

const headBarNavList: Path[] = [
  {
    path: '/',
    name: '首页',
    icon: <IconHouse />,
  },
  {
    path: '/about',
    name: '关于我们',
    icon: <IconAbout />,
  },
  {
    path: '/repair',
    name: '故障报修',
    canAccessIdentity: [Identity.USER],
    icon: <IconWrench />,
  },
  {
    path: '/repair',
    name: '接报修单',
    canAccessIdentity: [Identity.LANKER, Identity.LANKER_ADMIN, Identity.SUPER_ADMIN, Identity.ROOT],
  },
  {
    path: '/repair',
    name: '报单管理',
    canAccessIdentity: [Identity.LANKER_ADMIN, Identity.SUPER_ADMIN, Identity.ROOT],
  },
  {
    path: '/repair',
    name: '用户管理',
    canAccessIdentity: [Identity.LANKER_ADMIN, Identity.SUPER_ADMIN, Identity.ROOT],
  },
  {
    path: '/repair',
    name: '蓝客管理',
    canAccessIdentity: [Identity.SUPER_ADMIN, Identity.ROOT],
  },
  {
    path: '/check',
    name: '报修进展',
    canAccessIdentity: [Identity.USER],
    icon: <IconCalendarClock />,
  },
  {
    path: '/lanke',
    name: '蓝客风采',
    icon: <IconIdCard />,
  },
  {
    path: '/suggest',
    name: '意见建议',
    icon: <IconMessageSquareMore />,
  },
  {
    path: '/complain',
    name: '投诉蓝客',
    icon: <IconAngry />,
  },
]

export default headBarNavList;