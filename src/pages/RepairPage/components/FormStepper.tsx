import { Step, StepLabel, Stepper } from "@mui/material";
import { FormStep } from "./RepairForm";
import { desktop, mobile } from "../../../components/Display/DisplayMode";

export interface FormStepperProps {
  activeStep: number,
  steps: FormStep[]
}

export default function FormStepper({ activeStep, steps }: FormStepperProps) {
  return (
    <>
      <FormStepperDesktop activeStep={activeStep} steps={steps} />
      <FormStepperMobile activeStep={activeStep} steps={steps} />
    </>
  )
}

export function FormStepperDesktop({ activeStep, steps }: FormStepperProps) {
  return (
    <Stepper activeStep={activeStep} sx={{ display: desktop }}>
      {steps.map((step) => (
        <Step key={step.stepIndex}>
          <StepLabel >{step.stepName}</StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}

export function FormStepperMobile({ activeStep, steps }: FormStepperProps) {
  return (
    <Stepper alternativeLabel activeStep={activeStep} sx={{ display: mobile }}>
      {steps.map((step) => (
        <Step key={step.stepIndex}>
          <StepLabel >{step.stepName}</StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}