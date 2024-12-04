import React from "react";
import { Typography, Box } from "@mui/material";

export default function About(): JSX.Element {
  const styles = {
    Heading: {
      color: "#0772A1",
      fontSize: "23px",
      fontWeight: "bold",
      marginTop: "16px",
      marginBottom: "16px",
    },
    ContentBox: {
      display: "flex",
      flexDirection: "column",
      paddingLeft: "25px",
      paddingRight: "25px",
    },
    Content: {
      fontSize: "15px",
      lineHeight: "30px",
      marginBottom: "16px",
      textIndent: "2em",
    },
    ContentParaGraph: {
      marginTop: "7px",
      marginBottom: "7px",
      lineHeight: "1.8"
    },
  }
  
  return (
    <Box>
      <Typography sx={styles.Heading}>
        关于蓝盟
      </Typography>
      <Box sx={styles.ContentBox}>
        <Typography sx={styles.Content}>
          <Typography sx={styles.ContentParaGraph}>
            重庆大学蓝盟（英文名 lanunion）是在重庆大学信息化办公室指导下成立的校级学生社团，是一个为重庆大学 A、B、C 区师生免费提供计算机系统、软件与网络维护服务的志愿者组织。“蓝客”即蓝盟的正式成员，他们利用自己的电脑知识无偿为大家进行计算机系统、软件与网络维护。
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}
