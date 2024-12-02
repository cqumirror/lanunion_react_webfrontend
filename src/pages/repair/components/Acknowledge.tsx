import { Collapse, Container, Alert, AlertTitle, Typography, Box } from "@mui/material";
import React, { useState } from "react";

export default function ActionAlerts(): JSX.Element {
  const styles = {
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
  }
  const [open, setOpen] = useState(true);

  return (
    <Container maxWidth="md">
      <Collapse in={open}>
        <Alert severity="info" onClose={(): void => setOpen(false)}>
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
      </Collapse>
    </Container>
  );
}
