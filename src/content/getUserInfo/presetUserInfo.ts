/************
 * 
 * 预设的用户信息
 * 
 */

import { UserLoginState, Identity } from '../../types';

// 未登录用户
export const neverLoginUserInfo = {
  isLogin: false,
  identity: [Identity.None],
  state: UserLoginState.NeverLogin,
};

// 登录过期用户
export const expiredUserInfo = {
  isLogin: false,
  identity: [Identity.None],
  state: UserLoginState.Expired,
};

// 非法登录用户
export const invalidUserInfo = {
  isLogin: false,
  identity: [Identity.None],
  state: UserLoginState.Invalid,
};

// 未找到用户信息
export const undefinedUserInfo = {
  isLogin: false,
  name: "未找到用户信息",
  identity: [Identity.None],
  state: UserLoginState.Undifined,
};