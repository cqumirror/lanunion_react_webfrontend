import React from "react";
import { Box, Typography, List, ListItem, Link } from "@mui/material";
import { MarginRounded } from "@mui/icons-material";

export default function Service(): JSX.Element {
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
        服务流程
      </Typography>
      <Box sx={styles.ContentBox}>
      <Typography sx={styles.Content}>
        <Typography sx={styles.ContentParaGraph}>
          请点击导航栏最右边的“<b>用户登录</b>”，使用<b>重庆大学校内的上网账号和密码</b>登录系统。如果您没有我校校内的上网账号，请点击{" "}<Link href="http://user.cqu.edu.cn/NetApps/Baomi.aspx?typ=stu" target="_blank">这里</Link>{" "}申请。
        </Typography>
        <Typography sx={styles.ContentParaGraph}>
          第一次登录，会弹出 “个人信息修改”界面。请点击最下方“
          <b>修改资料</b>
          ”按钮，将个人信息填写完整，特别需要注意“QQ”“邮箱”“宿舍”与“房间号”。修改完成后，请点击“
          <b>确认修改</b>
          ”按钮。
        </Typography>
        <Typography sx={styles.ContentParaGraph}>
          确认您的个人信息<b>没有任何一项错误或遗漏</b>后，点击导航栏的“
          <b>故障报修</b>
          ”，根据提示对您的软件或系统故障进行报修。
        </Typography>
        <Typography sx={styles.ContentParaGraph}>
          提交保修申请后，您可以点击导航栏的“
          <b>状态查询</b>
          ”，查看自己提交的报修记录。
        </Typography>
        <Typography sx={styles.ContentParaGraph}>
          稍后我们会派出蓝客与您取得联系，并协商见面维修的时间与地点。请保持手机处于<b>开机状态</b>。
        </Typography>
        <Typography sx={styles.ContentParaGraph}>
          <b>您无需为蓝客支付任何物质性报酬</b>。若在蓝客维修过程中存在索取物质报酬的行为，请点击导航栏的“<b>投诉蓝客</b>”向我们举报。
        </Typography>
        <Typography sx={styles.ContentParaGraph}>
          维修完成后，请再次登录该网站，点击导航栏的“<b>状态查询</b>”，然后点击自己提交的报修记录，给为您服务的蓝客一个中肯的<b>评价。这一步非常重要！</b>
        </Typography>
      </Typography>
    </Box>
    </Box >
  );
}
