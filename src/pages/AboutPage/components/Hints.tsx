import React from "react";
import { Box, Typography } from "@mui/material";

export default function Hints(): JSX.Element {
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
        友情提示
      </Typography>
      <Box sx={styles.ContentBox}>
        <Typography sx={styles.Content}>
          <Typography sx={styles.ContentParaGraph}>
            本着对您的电脑负责的态度，蓝盟仅为您提供系统、软件和网络维护服务，而不涉及硬件拆装、维修、更换等。原则上，
            <Typography component="strong" sx={{ color: "red" }}>
              蓝客不得拆卸您的笔记本电脑
            </Typography>
            （内存条后盖除外）。因此，若您电脑的故障属于硬件损坏，或者您需要下列服务（包括但不限于）：
            <Typography component="strong" sx={{ textDecoration: "underline" }}>
              笔记本电脑清理灰尘、浸液后的紧急处理、更换除内存以外的任何部件等，请您自行联系相关品牌的售后服务站或第三方维修商家。
            </Typography>
          </Typography>
          <Typography sx={styles.ContentParaGraph}>
            若您执意要求蓝客拆卸您的笔记本电脑，请事先与该蓝客达成风险责任界定协议。蓝盟不承担任何蓝客拆卸笔记本电脑的行为所造成的损失，请您谅解。
            “个人信息修改”界面。请点击最下方“修改资料”按钮，将个人信息填写完整，特别需要注意“QQ”“邮箱”“宿舍”与“房间号”。修改完成后，请点击
            “确认修改”按钮。
          </Typography>
          <Typography sx={styles.ContentParaGraph}>
            因苹果计算机的保修政策苛刻，蓝客无法为您的苹果计算机提供除口头咨询与简单操作设置以外的任何服务（含重装系统），否则会影响其保修。若蓝客无法通过口头咨询与简单操作设置为您解决该故障，请您自行前往售后服务站。
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}
