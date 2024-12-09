import { IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IconCircleUserRound } from "../../../content/icon";
import { Identity, Path } from "../../../types";

export function HeadBarUserConfigButton({ navList, currentUserIdentity }: { navList: Path[]; currentUserIdentity: Identity[] }) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const result = navList
    .filter((nav) =>
      nav.canAccessIdentity
        ? currentUserIdentity.some(identity => nav.canAccessIdentity?.includes(identity))
        : true
    )
    .map((nav, index) => (
      <MenuItem key={index} onClick={() => navigate(nav.path)}>
        {nav.name}
      </MenuItem>
    ));

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
        {result}
      </Menu>
    </div>
  );
}