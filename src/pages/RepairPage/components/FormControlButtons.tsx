import { Box, Button } from "@mui/material";
import formQuestionNextStepDisable from "./formQuestionNextStepDisable";
import { FormStep, RepairFormData } from "./RepairForm";

export interface FormControlButtonsProps {
  activeStep: number,
  steps: FormStep[],
  repairFormData: RepairFormData,
  handleNext: () => void;
  handleBack: () => void;
}

export default function FormControlButtons({ activeStep, steps, repairFormData, handleBack, handleNext }: FormControlButtonsProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', paddingTop: 2 }}>
      <Button
        color="inherit"
        disabled={activeStep === 0}
        onClick={handleBack}
        sx={{ display: (activeStep === steps.length - 1 ? "none" : "") }}
      >
        上一步
      </Button>
      <Box sx={{ flex: '1 1 auto' }} />
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