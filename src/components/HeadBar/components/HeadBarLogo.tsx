import { Box } from "@mui/material";

export function HeadBarLogo() {
  return (
    <Box component="img" src={`${process.env.PUBLIC_URL}/images/Logo_small_3.png`} alt="Logo" sx={{ width: "100px", objectFit: "contain" }} />
  )
}