import React from "react";
import { Box, Typography } from "@mui/material";

export default function Title(): JSX.Element {
  const styles = {
    TitleBox: {
      width: '100%',
      display: "flex", // 使 Title 和 Subtitle 横向排列
      justifyContent: "space-between", // Title 和 Subtitle 分别靠左和靠右
      alignItems: "center", // 垂直居中对齐
      marginTop: "16px",
      marginBottom: "16px",
    },
    Title: {
      fontWeight: "bold",
      fontSize: "60px",
    },
    SubtitleBox: {
      display: "flex",
      flexDirection: "column", // Subtitle 内部内容上下排列
      alignItems: "flex-end", // Subtitle 对齐右边
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
    <Box sx={styles.TitleBox}>
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