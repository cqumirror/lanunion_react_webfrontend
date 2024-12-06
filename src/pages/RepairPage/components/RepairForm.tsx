import React from 'react';
import { Box, Typography, Container, } from '@mui/material';
import FaultCategory from './FormSteps/FaultCategory';
import FaultDescription from './FormSteps/FaultDescription';
import ContactInfo from './FormSteps/ContactInfo';
import Submit from './FormSteps/Submit';
import FormQuestionAcknowledge from './FormSteps/Acknowledge';
import FormStepper from './FormStepper';
import FormControlButtons from './FormControlButtons';
import FormSteps from './FormSteps';

export interface RepairFormData {
  faultDescription?: {
    faultCategory?: number;
    canBootUp?: boolean;
    isNoteBook?: boolean;
    brand?: string;
    model?: string;
    timeBrought?: string;
    os?: number;
    osVersion?: number;
    osBitNumber?:number;
    detail?: string;
    isApple?: boolean;
  };
  contactInfo?: {
    campus?: number;
    addr?: string;
    customInfo?: string;
  };
}

export interface FormStep {
  stepName: string,
  stepIndex: number,
  form: JSX.Element,
  description: string
}

export interface FormQuestionProps {
  repairFormData: RepairFormData;
  setRepairFormData: (repairFormData: RepairFormData) => void;
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
      form: <FormQuestionAcknowledge />,
      description: '我们认为您需要知晓以下信息',
    },
    {
      stepName: '故障类别',
      stepIndex: 1,
      form: (<FaultCategory repairFormData={repairFormData} setRepairFormData={setRepairFormData} />),
      description: '请选取本次报修的故障类别',
    },
    {
      stepName: '故障描述',
      stepIndex: 2,
      form: (<FaultDescription repairFormData={repairFormData} setRepairFormData={setRepairFormData} />),
      description: '请认真填写本次报修的故障信息',
    },
    {
      stepName: '联系方式',
      stepIndex: 3,
      form: (<ContactInfo repairFormData={repairFormData} setRepairFormData={setRepairFormData} />),
      description: '请填写您的联系方式，以便蓝客联系您以提供报修服务',
    },
    {
      stepName: '提交报单',
      stepIndex: 4,
      form: (<Submit handleReset={handleReset} />),
      description: '',
    },
  ];

  return (
    <Container sx={{ maxWidth: "md", alignItems: "center", marginTop: 5 }}>
      <FormStepper activeStep={activeStep} steps={steps} />
      <Container maxWidth="md" sx={{ marginTop: 5 }}>
        <FormSteps activeStep={activeStep} steps={steps} />
        <FormControlButtons activeStep={activeStep} steps={steps} repairFormData={repairFormData} handleBack={handleBack} handleNext={handleNext} />
      </Container>
    </Container>
  );
}
