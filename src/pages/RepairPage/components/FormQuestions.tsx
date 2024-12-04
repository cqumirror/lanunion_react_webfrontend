import React from 'react';
import { Box, Stepper, Step, StepLabel, Button, Typography, Paper, Container, } from '@mui/material';
import FormQuestionFaultCategory from './FormQuestionFaultCategory';
import FormQuestionFaultDescription from './FormQuestionFaultDescription';
import FormQuestionContact from './FormQuestionContactInfo';
import formQuestionNextStepDisable from './formQuestionNextStepDisable';
import FormQuestionSubmit from './FormQuestionSubmit';
import FormQuestionAcknowledge from './FormQuestionAcknowledge';

export interface RepairFormData {
  faultDescription?: {
    faultCategory?: number;
    canBootUp?: boolean;
    isNoteBook?: boolean;
    brand?: string;
    model?: string;
    timeBrought?: number;
    os?: number;
    osVersion?: number;
    detail?: string;
  };
  contactInfo?: {
    campus?: number;
    addr?: string;
    customInfo?: string;
  };
}

export interface FormQuestionProps {
  repairFormData: RepairFormData;
  setRepairFormData: (repairFormData: RepairFormData) => void;
}

export interface FormQuestionSubmitProps {
  handleReset: () => void;
}

export default function FormQuestions() {

  const [repairFormData, setRepairFormData] = React.useState<RepairFormData>({});

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const steps = [
    {
      stepName: '请您知悉',
      stepIndex: 0,
      form: (<FormQuestionAcknowledge />),
    },
    {
      stepName: '故障类别',
      stepIndex: 0,
      form: (<FormQuestionFaultCategory repairFormData={repairFormData} setRepairFormData={setRepairFormData} />),
    },
    {
      stepName: '故障描述',
      stepIndex: 1,
      form: (<FormQuestionFaultDescription repairFormData={repairFormData} setRepairFormData={setRepairFormData} />),
    },
    {
      stepName: '联系方式',
      stepIndex: 2,
      form: (<FormQuestionContact repairFormData={repairFormData} setRepairFormData={setRepairFormData} />),
    },
    {
      stepName: '提交报单',
      stepIndex: 0,
      form: (<FormQuestionSubmit handleReset={handleReset} />),
    },
  ];

  return (
    <Container sx={{ alignItems: "center", maxWidth: "sm" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step) => (
          <Step key={step.stepIndex}>
            <StepLabel>{step.stepName}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Container sx={{ marginTop: 5 }}>
        <Typography>{steps[activeStep].form}</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', paddingTop: 2 }}>
          <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ display: (activeStep === steps.length - 1 ? "none" : "") }}>
            上一步
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button variant="contained" disabled={formQuestionNextStepDisable(repairFormData, activeStep)} onClick={handleNext} sx={{ display: (activeStep === steps.length - 1 ? "none" : "") }}>
            {activeStep === steps.length - 2 ? '提交' : '下一步'}
          </Button>
        </Box>
      </Container>
    </Container>
  );
}
