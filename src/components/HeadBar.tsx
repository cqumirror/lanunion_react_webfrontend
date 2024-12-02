import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import HeadBarNav from './HeadBarNav';
import getCurrentUserInfo from '../content/getUserInfo/getCurrentUserInfo';
import headBarNavList from './headBarNavList';
import { Identity } from '../types';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import HeadBarNavMobile from './HeadBarNavMobile';
import { desktop, mobile } from './Display/DisplayMode';

const settings = ['设置', '后台', '登出'];

function HeadBar(): JSX.Element {
  // const [currentUserIdentity, setCurrentUserIdentity] = useState<Identity[]>([Identity.USER]);

  // useEffect(() => {
  //   async function fetchUserInfo() {
  //     const userInfo = await getCurrentUserInfo();
  //     setCurrentUserIdentity(userInfo.identity);
  //   }
  //   fetchUserInfo();
  // }, []);

  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex' }}>
          {/* TODO 需要更改 */}
          {/* {HeadBarNav(headBarNavList, currentUserIdentity)} */}
          {/* 桌面端 */}
          <Box sx={{ display: desktop, justifyContent: 'flex-start', flexGrow: 0, position: 'absolute', left: '20px' }}>
            <Box component="img" src={`${process.env.PUBLIC_URL}/images/Logo_small_3.png`} alt="Logo" sx={{ width: "100px", objectFit: "contain" }} />
          </Box>
          <Box sx={{ display: desktop, justifyContent: 'center', flexGrow: 1 }}>
            {HeadBarNav({ navList: headBarNavList, currentUserIdentity: [Identity.USER] })}
          </Box>
          {/* 移动端 */}
          <Box sx={{ display: mobile, justifyContent: 'flex-start', flexGrow: 0, position: 'absolute', left: '0px' }}>
            {HeadBarNavMobile({ navList: headBarNavList, currentUserIdentity: [Identity.USER] })}
          </Box>
          <Box sx={{ display: mobile, justifyContent: 'center', flexGrow: 1 }}>
            <Box component="img" src={`${process.env.PUBLIC_URL}/images/Logo_small_3.png`} alt="Logo" sx={{ width: "100px", objectFit: "contain" }} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default HeadBar;