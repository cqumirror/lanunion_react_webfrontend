import { Box, Typography } from "@mui/material";
import { FormStep } from "./interfaces";

export interface FormStepsProps {
  activeStep: number,
  steps: FormStep[]
}

export default function FormStepBody({ activeStep, steps }: FormStepsProps) {
  const styles = {
    FormStepsBox: {
      minHeight: "380px",
      paddingTop: "20px",
      display: "flex", 
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  }

  return (
    <>
      <Typography>{steps[activeStep].description}</Typography>
      <Box sx={styles.FormStepsBox}>
        {steps[activeStep].form}
      </Box>
    </>
  )
}