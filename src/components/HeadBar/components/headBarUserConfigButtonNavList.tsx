// TODO 后端自动处理

import { IconAbout, IconAngry, IconHouse, IconIdCard, IconMessageSquareMore, IconCalendarClock, IconWrench } from "../../../content/icon";
import { Path } from "../../../types";
import { Identity } from "../../../types";

const headBarNavList: Path[] = [
  {
    path: '/userinfo',
    name: '用户信息',
    icon: <IconHouse />,
  },
  {
    path: '/admin',
    name: '后台',
    icon: <IconAbout />,
  },
]

export default headBarNavList;