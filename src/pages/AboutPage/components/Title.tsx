import React from "react";
import { Box, Typography } from "@mui/material";
import { desktop, mobile } from "../../../components/Display/DisplayMode";

export default function Title(): JSX.Element {
  return (
    <>
      <TitleDesktop />
      <TitleMobile />
    </>
  )
}

export function TitleDesktop(): JSX.Element {
  const styles = {
    TitleBox: {
      width: '100%',
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "16px",
      marginBottom: "16px",
    },
    Title: {
      fontWeight: "bold",
      fontSize: "60px",
    },
    SubtitleBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
    },
    Subtitle: {
      fontSize: "30px",
    },
    Strong: {
      color: "#EE3B80",
      fontWeight: "bold",
      fontSize: "30px",
    },
  };

  return (
    <Box sx={{ ...styles.TitleBox, display: desktop }}>
      <Box>
        <Typography sx={styles.Title}>
          重庆大学蓝盟
        </Typography>
      </Box>
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
  );
}

export function TitleMobile(): JSX.Element {
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
    <Box sx={{ ...styles.TitleBox, display: mobile }}>
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