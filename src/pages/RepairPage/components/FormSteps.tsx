import { Box, Typography } from "@mui/material";
import { FormStep } from "./RepairForm";

export interface FormStepsProps {
  activeStep: number,
  steps: FormStep[]
}

export default function FormSteps({ activeStep, steps }: FormStepsProps) {
  return (
    <>
      <Typography>{steps[activeStep].description}</Typography>
      <Box sx={{
        minHeight: "350px",
        paddingTop: "20px",
        display: "flex", 
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        {steps[activeStep].form}
      </Box>
    </>
  )
}