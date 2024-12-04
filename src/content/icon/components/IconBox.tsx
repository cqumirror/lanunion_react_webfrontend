import React from "react";
import { Box } from "@mui/material";
import { IconBoxProps } from "./props";

const styles = {
  IconBox: {
    filter: "opacity(1)",
    padding: 0,
    lineHeight: 0,
    display: "inline-block",
  }
}

export default function IconBox({ icon: Icon, props: IconBaseProps }: IconBoxProps) {
  return (
    <Box style={styles.IconBox}>
      <Icon {...{ color: "black", ...IconBaseProps }} />
    </Box>
  );
}