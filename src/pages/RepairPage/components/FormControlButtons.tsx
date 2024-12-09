import { Box, Button } from "@mui/material";
import formQuestionNextStepDisable from "./formQuestionNextStepDisable";
import { FormStep, RepairFormData } from "./interfaces";

export interface FormControlButtonsProps {
  activeStep: number,
  steps: FormStep[],
  repairFormData: RepairFormData,
  handleNext: () => void;
  handleBack: () => void;
}

export default function FormControlButtons({ activeStep, steps, repairFormData, handleBack, handleNext }: FormControlButtonsProps) {
  const styles = {
    FormControlButtonsBox: {
      display: 'flex',
      flexDirection: 'row',
      paddingTop: 2,
    },
    FormControlButtonsMidBox: {
      flex: '1 1 auto',
    },
  }

  return (
    <Box sx={styles.FormControlButtonsBox}>
      <Button
        color="inherit"
        disabled={activeStep === 0}
        onClick={handleBack}
        sx={{ display: (activeStep === steps.length - 1 ? "none" : "") }}
      >
        上一步
      </Button>
      <Box sx={styles.FormControlButtonsMidBox} />
      <Button
        variant="contained"
        disabled={formQuestionNextStepDisable(repairFormData, activeStep)}
        onClick={handleNext}
        sx={{ display: (activeStep === steps.length - 1 ? "none" : "") }}
      >
        {activeStep === steps.length - 2 ? '提交' : '下一步'}
      </Button>
    </Box>
  )
}