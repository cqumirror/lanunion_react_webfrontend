import React from 'react';
import { Box, Stepper, Step, StepLabel, StepContent, Button, Paper, Typography } from '@mui/material';
import FormQuestionFaultCategory from './FormQuestionFaultCategory';
import FormQuestionFaultDescription from './FormQuestionFaultDescription';
import FormQuestionContact from './FormQuestionContactInfo';
import formQuestionNextStepDisable from './formQuestionNextStepDisable';

export interface RepairFormData {
  faultDescription?: {
    faultCategory?: number,
    canBootUp?: boolean,
    isNoteBook?: boolean,
    brand?: string,
    model?: string,
    timeBrought?: number,
    os?: number,
    osVersion?: number,
    detail?: string,
  },
  contactInfo?: {
    campus?: number,
    addr?: string,
    customInfo?: string,
  }
}

export default function FormQuestions() {
  const [repairFormData, setRepairFormData] = React.useState({});
  const steps = [
    {
      stepName: '故障类别',
      stepIndex: 0,
      form: <FormQuestionFaultCategory repairFormData={repairFormData} setRepairFormData={setRepairFormData} />,
    },
    {
      stepName: '故障描述',
      stepIndex: 1,
      form: <FormQuestionFaultDescription repairFormData={repairFormData} setRepairFormData={setRepairFormData} />,
    },
    {
      stepName: '联系方式',
      stepIndex: 2,
      form: <FormQuestionContact repairFormData={repairFormData} setRepairFormData={setRepairFormData} />,
    }
  ];

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: "md" }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map(step => (
          <Step key={step.stepIndex}>
            <StepLabel>{step.stepName}</StepLabel>
            <StepContent>
              <Typography>{step.form}</Typography>
              <Box sx={{ mb: 2 }}>
                <Button variant="contained" disabled={formQuestionNextStepDisable(repairFormData, step.stepIndex)} onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                  {step.stepIndex === steps.length - 1 ? '提交' : '下一步'}
                </Button>
                <Button disabled={step.stepIndex === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                  上一步
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>报修单正在提交中</Typography>
          <Typography>提交成功，您可以稍后在「报修进展」处查询您的报修单</Typography>
        </Paper>
      )}
    </Box>
  );
}