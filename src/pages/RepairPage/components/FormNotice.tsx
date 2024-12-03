import { Container, Typography } from "@mui/material";

export default function FormNotice(): JSX.Element {
  const styles = {
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
    <Container sx={styles.formNoticeBox}>
      <Typography>
        请认真详细地填写下面的页面描述您所遇到的故障，我们将会尽快安排蓝客与您取得联系。
      </Typography>
      <Typography>
        蓝盟的服务范围为重庆大学A、B、C区和虎溪校区。
      </Typography>
    </Container>
  );
}
