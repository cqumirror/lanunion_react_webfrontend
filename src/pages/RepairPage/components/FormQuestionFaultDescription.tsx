import React from "react";
import { Box } from "@mui/material";
import { FormQuestionProps } from "./FormQuestions";
import FormQuestionFaultDescriptionHardware from "./FormQuestionFaultDescriptionHardware";
import FormQuestionFaultDescriptionCampusNetwork from "./FormQuestionFaultDescriptionCampusNetwork";
import FormQuestionFaultDescriptionSoftware from "./FormQuestionFaultDescriptionSoftware";

export default function FormQuestionsFaultCategory({ repairFormData, setRepairFormData, }: FormQuestionProps): JSX.Element {
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
