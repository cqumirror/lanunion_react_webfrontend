import React from "react";
import { Identity, Path } from "../types";
import { Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TbMenu2 } from "react-icons/tb";



export default function HeadBarNavMobile({ navList, currentUserIdentity }: { navList: Path[]; currentUserIdentity: Identity[] }) {
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
          <ListItemButton><ListItemText>{nav.name}</ListItemText></ListItemButton>
        </ListItem>
      ));
  }
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}><TbMenu2 /></IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <List>
          {generateDrawerList({ navList, currentUserIdentity })}
        </List>
      </Drawer>
    </div>
  );
}

