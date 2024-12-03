import React from "react";
import { Box, Typography, Link, List, ListItem } from "@mui/material";

export default function Contact(): JSX.Element {
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
        联系我们
      </Typography>
      <Box sx={styles.ContentBox}>
        <Typography sx={styles.Content}>
          <Typography sx={styles.ContentParaGraph}>
            客户服务群：110274790（加群请说明校区、专业、年级）
          </Typography>
          <Typography sx={styles.ContentParaGraph}>
            新浪微博：
            <Link
              href="http://weibo.com/cqulanunion"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              http://weibo.com/cqulanunion
            </Link>
          </Typography>
          <Typography sx={styles.ContentParaGraph}>
            腾讯微博：
            <Link
              href="http://t.qq.com/cqulanunion"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              http://t.qq.com/cqulanunion
            </Link>
          </Typography>
          <Typography sx={styles.ContentParaGraph}>
            电子邮箱：
            <Link
              href="mailto:lanunion@cqu.edu.cn"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              lanunion@cqu.edu.cn
            </Link>
          </Typography>
          <Typography sx={styles.ContentParaGraph}>办公室地址：重庆大学B区材料楼二楼最右</Typography>
        </Typography>
      </Box>
    </Box>
  );
}
