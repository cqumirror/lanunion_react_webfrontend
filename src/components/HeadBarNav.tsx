import React from "react";
import { Identity, Path } from "../types";
import { Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HeadBarNav({ navList, currentUserIdentity }: { navList: Path[]; currentUserIdentity: Identity[] }) {
  const navigate = useNavigate();

  const result = navList
    .filter((nav) =>
      nav.canAccessIdentity
        ? currentUserIdentity.some(identity => nav.canAccessIdentity?.includes(identity))
        : true
    )
    .map((nav, index) => (
      <Button key={index} variant="text" color="primary" onClick={() => navigate(nav.path)} sx={{ my: 2, color: 'white', display: 'block' }}>
        {nav.name}
      </Button>));

  return result;
}