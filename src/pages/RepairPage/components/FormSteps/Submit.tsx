import { Box, Button, Typography } from "@mui/material";

export interface SubmitProps {
  handleReset: () => void;
}

export default function Submit({ handleReset }: SubmitProps) {
  const styles = {
    formQuestionSubmitBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }
  }

  return (
    <Box sx={styles.formQuestionSubmitBox}>
      <Typography>提交成功，您可以稍后在「报修进展」处查询您的报修单</Typography>
      <Typography>您也可以继续提交保修单，但请注意，每个人每天只能提交三份</Typography>
      <Button variant="contained" onClick={handleReset} sx={{ mt: 2 }}>再提交一份</Button>
    </Box>
  )
}