import { Box } from "@mui/material";
import React from "react";
import { RepairFormData } from "./FormQuestions";
import FormQuestionFaultDescriptionHardware from "./FormQuestionFaultDescriptionHardware";
import FormQuestionFaultDescriptionCampusNetwork from "./FormQuestionFaultDescriptionCampusNetwork";
import FormQuestionFaultDescriptionSoftware from "./FormQuestionFaultDescriptionSoftware";

export interface FormQuestionsFaultCategoryProps {
  repairFormData: RepairFormData;
  setRepairFormData: (repairFormData: RepairFormData) => void;
}

export default function FormQuestionsFaultCategory({ 
  repairFormData, 
  setRepairFormData, 
}: FormQuestionsFaultCategoryProps): JSX.Element {
  const renderDescriptionComponent = () => {
    switch (repairFormData.faultDescription?.faultCategory) {
      case 0:
        return <FormQuestionFaultDescriptionHardware repairFormData={repairFormData} setRepairFormData={setRepairFormData} />;
      case 1:
        return <FormQuestionFaultDescriptionSoftware repairFormData={repairFormData} setRepairFormData={setRepairFormData} />;
      case 2:
        return <FormQuestionFaultDescriptionCampusNetwork />;
      default:
        return null;
    }
  };

  return (
    <Box>
      {renderDescriptionComponent()}
    </Box>
  );
}
