import React from "react";
import { Identity, Path } from "../../../types";
import { Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ReactDOM from "react-dom/client";
import { IconMenu } from "../../../content/icon";

export function HeadBarNavDesktop({ navList, currentUserIdentity }: { navList: Path[]; currentUserIdentity: Identity[] }) {
  const navigate = useNavigate();
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
  return result;
}

export function HeadBarNavMobile({ navList, currentUserIdentity }: { navList: Path[]; currentUserIdentity: Identity[] }) {
  const navigate = useNavigate();

  function generateDrawerList({ navList, currentUserIdentity }: { navList: Path[]; currentUserIdentity: Identity[] }) {
    return navList
      .filter((nav) =>
        nav.canAccessIdentity
          ? currentUserIdentity.some(identity => nav.canAccessIdentity?.includes(identity))
          : true
      )
      .map((nav, index) => (
        <ListItem key={index} onClick={() => navigate(nav.path)}>
          <ListItemButton>
            <ListItemIcon>{nav.icon}</ListItemIcon>
            <ListItemText>{nav.name}</ListItemText>
          </ListItemButton>
        </ListItem>
      ));
  }
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}><IconMenu color="white" /></IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <List>
          {generateDrawerList({ navList, currentUserIdentity })}
        </List>
      </Drawer>
    </div>
  );
}