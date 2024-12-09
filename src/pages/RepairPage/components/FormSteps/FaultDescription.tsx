import React from "react";
import { FaultDescriptionHardware, FaultDescriptionCampusNetwork, FaultDescriptionSoftware } from "./index";
import { FormQuestionProps } from "../interfaces";

export default function FaultCategory({ repairFormData, setRepairFormData, }: FormQuestionProps): JSX.Element {
  const renderDescriptionComponent = () => {
    switch (repairFormData.faultDescription?.faultCategory) {
      case 0:
        return <FaultDescriptionHardware repairFormData={repairFormData} setRepairFormData={setRepairFormData} />;
      case 1:
        return <FaultDescriptionSoftware repairFormData={repairFormData} setRepairFormData={setRepairFormData} />;
      case 2:
        return <FaultDescriptionCampusNetwork />;
      default:
        return null;
    }
  };

  return (
    <>{renderDescriptionComponent()}</>
  );
}
