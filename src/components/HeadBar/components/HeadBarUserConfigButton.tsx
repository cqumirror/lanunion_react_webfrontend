import { AccountCircle } from "@mui/icons-material";
import { AppBar, Box, FormControlLabel, FormGroup, IconButton, Menu, MenuItem, Switch, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IconCircleUserRound } from "../../../content/icon";

export function HeadBarUserConfigButton() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <IconCircleUserRound color="white" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {/* TODO 后端自动处理 */}
        <MenuItem onClick={handleClose}>用户信息</MenuItem>
        <MenuItem onClick={handleClose}>后台</MenuItem>
        <MenuItem onClick={handleClose}>登出</MenuItem>
      </Menu>
    </div>
  );
}