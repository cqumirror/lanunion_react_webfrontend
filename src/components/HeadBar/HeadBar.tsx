import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import getCurrentUserInfo from '../../content/getUserInfo/getCurrentUserInfo';
import headBarNavList from './components/headBarNavList';
import { Identity } from '../../types';
import { Box } from '@mui/material';
import { desktop, mobile } from '../Display/DisplayMode';
import { HeadBarUserConfigButton } from './components/HeadBarUserConfigButton';
import { HeadBarNavDesktop, HeadBarNavMobile } from './components/HeadBarNav';
import { HeadBarLogo } from './components/HeadBarLogo';

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
          <Box sx={{ display: desktop, justifyContent: 'flex-start', flexGrow: 0, position: 'absolute', left: '0px' }}>
            <HeadBarLogo />
          </Box>
          <Box sx={{ display: desktop, justifyContent: 'center', flexGrow: 1 }}>
            {HeadBarNavDesktop({ navList: headBarNavList, currentUserIdentity: [Identity.USER] })}
          </Box>
          {/* 移动端 */}
          <Box sx={{ display: mobile, justifyContent: 'flex-start', flexGrow: 0, position: 'absolute', left: '0px' }}>
            {HeadBarNavMobile({ navList: headBarNavList, currentUserIdentity: [Identity.USER] })}
          </Box>
          <Box sx={{ display: mobile, justifyContent: 'center', flexGrow: 1 }}>
            <HeadBarLogo />
          </Box>
          <Box sx={{ justifyContent: 'flex-start', flexGrow: 0, position: 'absolute', right: '0px' }}>
            <HeadBarUserConfigButton />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default HeadBar;