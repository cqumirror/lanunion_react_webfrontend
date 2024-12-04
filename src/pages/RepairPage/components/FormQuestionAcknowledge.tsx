import { Collapse, Container, Alert, AlertTitle, Typography, Box } from "@mui/material";
import React, { useState } from "react";

export default function ActionAlerts(): JSX.Element {
  const styles = {
    acknowlodgeBox: {
      maxWidth: "md",
    },
    ContentBox: {
      display: "flex",
      flexDirection: "column",
    },
    Content: {
      fontSize: "15px",
      lineHeight: "30px",
      textIndent: "2em",
    },
    ContentParaGraph: {
      marginTop: "7px",
      marginBottom: "7px",
      lineHeight: "1.3"
    },
    formNoticeBox: {
      maxWidth: "md",
      display: "flex",
      flexDirection: "column",
      paddingLeft: "25px",
      paddingRight: "25px",
      marginTop: "16px",
      marginBottom: "16px",
    }
  }

  return (
    <Container sx={styles.acknowlodgeBox}>
      <Alert severity="info">
        <AlertTitle>尊敬的用户您好，感谢您使用蓝盟的服务！请仔细阅读以下条款：</AlertTitle>
        <Box sx={styles.ContentBox}>
          <Typography sx={styles.Content}>
            <Typography sx={styles.ContentParaGraph}>1. 蓝盟服务为无偿服务，用户无需为蓝客提供物质回报，自愿除外。</Typography>
            <Typography sx={styles.ContentParaGraph}>2. 原则上不提供拆机服务，若需拆机，后果需用户自行承担。</Typography>
            <Typography sx={styles.ContentParaGraph}>3. 您报修后，蓝客会主动联系您，您需要等待并配合蓝客的工作。</Typography>
            <Typography sx={styles.ContentParaGraph}>4. 蓝客完成维修后，请回到报修系统，为蓝客进行如实评价。</Typography>
          </Typography>
        </Box>
      </Alert>

      <Container sx={styles.formNoticeBox}>
        <Typography>
          请认真详细地填写，描述您所遇到的故障，我们将会尽快安排蓝客与您取得联系。
        </Typography>
        <Typography>
          蓝盟的服务范围为重庆大学A、B、C区和虎溪校区。
        </Typography>
      </Container>
    </Container>
  );
}
