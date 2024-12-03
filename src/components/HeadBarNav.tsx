import React from "react";
import { Identity, Path } from "../types";
import {Box, Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { desktop } from "./Display/DisplayMode";
import { VscAccount } from "react-icons/vsc";  //登录后图标
import { MdLogin } from "react-icons/md";  //登录图标
import HeadBar from "../components/HeadBar";

import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Menu from '@mui/material/Menu';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import ReactDOM from "react-dom/client";

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

export default function HeadBarNav({ navList, currentUserIdentity }: { navList: Path[]; currentUserIdentity: Identity[] }) {
    const navigate = useNavigate();
    const handleMenu = () => {
      navigate('true');
    };
    const handleClose = () => {
      navigate('true');
    };
    const { Header, Footer, Sider, Content } = Layout;
    const result = navList
        .filter((nav) =>
            nav.canAccessIdentity
                ? currentUserIdentity.some(identity => nav.canAccessIdentity?.includes(identity))
                : true
        )
        .map((nav, index) => (
            <Button
              key={index}
              variant="text"
              color="primary"
              onClick={() => navigate(nav.path)}
              sx={{ my: 2, color: 'white', display: 'block' }}>{nav.name}
            </Button>
          ));
        ReactDOM.render(
          <div>
            <layout>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
               onClick={handleMenu}
                color="inherit"
              >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(navigate)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>个人信息修改</MenuItem>
              <MenuItem onClick={handleClose}>后台</MenuItem>
              <MenuItem onClick={handleClose}>登出</MenuItem>
            </Menu>
            </layout>
          </div>,
          mountNode,
        );



    return result;

    return (

              <Toolbar>
                  {navigate && (
                    <div>
                        <IconButton
                          size="large"
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          onClick={handleMenu}
                          color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                          id="menu-appbar"
                          anchorOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                          }}
                          keepMounted
                          transformOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                          }}
                          open={Boolean(navigate)}
                          onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>个人信息修改</MenuItem>
                            <MenuItem onClick={handleClose}>后台</MenuItem>
                            <MenuItem onClick={handleClose}>登出</MenuItem>
                        </Menu>
                    </div>
                  )}
              </Toolbar>);}

