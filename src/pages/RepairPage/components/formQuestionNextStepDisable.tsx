import React from "react";
import { RepairFormData } from "./interfaces";

export default function formQuestionNextStepDisable(repairFormData: RepairFormData, step: number) {
  switch (step) {
    case 0:
      return false;
    case 1:
      return ![0, 1, 2].includes(repairFormData.faultDescription?.faultCategory ?? -1);
    case 2:
      switch (repairFormData.faultDescription?.faultCategory ?? -1) {
        case 0:
          return !(
            repairFormData.faultDescription?.canBootUp !== undefined &&
            repairFormData.faultDescription?.isNoteBook !== undefined &&
            ![undefined, ""].includes(repairFormData.faultDescription?.brandHardware) &&
            ![undefined, ""].includes(repairFormData.faultDescription?.modelHardware) &&
            ![undefined, ""].includes(repairFormData.faultDescription?.timeBroughtHardware) &&
            ![undefined, ""].includes(repairFormData.faultDescription?.detailHardware)
          );
        case 1:
          return !(
            repairFormData.faultDescription?.os !== undefined &&
            repairFormData.faultDescription?.osBitNumber !== undefined &&
            ![undefined, ""].includes(repairFormData.faultDescription?.brandSoftware) &&
            ![undefined, ""].includes(repairFormData.faultDescription?.modelSoftware) &&
            ![undefined, ""].includes(repairFormData.faultDescription?.timeBroughtSoftware) &&
            ![undefined, ""].includes(repairFormData.faultDescription?.detailSoftware)
          );
        case 2:
          return true;
        default:
          return true;
      }
    case 3:
      return !(
        repairFormData.contactInfo?.campus !== undefined &&
        ![undefined, ""].includes(repairFormData.contactInfo?.addr)
      );
    case 4:
      return false;
    default:
      return true;
  }
}