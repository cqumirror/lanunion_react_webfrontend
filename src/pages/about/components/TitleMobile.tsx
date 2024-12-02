import React from "react";
import { Box, Typography } from "@mui/material";

export default function Title(): JSX.Element {
  const styles = {
    TitleBox: {
      width: '100%',
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "16px",
      marginBottom: "16px",
    },
    Title: {
      fontWeight: "bold",
      fontSize: "40px",
    },
    SubtitleBox: {
      width: '100%',
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    Subtitle: {
      fontSize: "20px",
    },
    Strong: {
      color: "#EE3B80",
      fontWeight: "bold",
      fontSize: "20px",
    },
  }
  return (
    <Box sx={styles.TitleBox}>
      <Box>
        <Typography sx={styles.Title}>
          重庆大学蓝盟
        </Typography>
        <Box sx={styles.SubtitleBox}>
        <Typography sx={styles.Subtitle}>
          我们是为重庆大学在校师生
          <br />
          <Typography component="span" sx={styles.Strong}>
            免费修电脑
          </Typography>
          的校级学生社团
        </Typography>
        </Box>
      </Box>
      <Box sx={{ clear: "both" }} />
    </Box>
  );
}