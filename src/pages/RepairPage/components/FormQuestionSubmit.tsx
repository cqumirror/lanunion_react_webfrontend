import { Box, Button, Typography } from "@mui/material";
import { FormQuestionSubmitProps } from "./FormQuestions";

export default function FormQuestionSubmit({ handleReset }: FormQuestionSubmitProps) {
  const styles = {
    formQuestionSubmitBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }
  }

  return (
    <Box sx={styles.formQuestionSubmitBox}>
      <Typography>报修单正在提交中</Typography>
      <Typography>提交成功，您可以稍后在「报修进展」处查询您的报修单</Typography>
      <Button variant="contained" onClick={handleReset} sx={{ mt: 2 }}>再提交一份</Button>
    </Box>
  )
}